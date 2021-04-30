import client from '@lib/redis';
import { tap, value } from '@lib/utils';
import md5 from 'md5';

type Callback<T> = () => T;

export default function cache<T>(key: string, expires: Callback<T> | Date | number, callback?: Callback<T>): Promise<T> {
    if (!callback) {
        callback = expires as Callback<T>;
        expires = null;
    }

    if (expires !== null) {
        expires = expires instanceof Date
            ? Math.floor(expires.getTime() / 1000)
            : Math.floor(Date.now() / 1000) + (expires as number);
    }

    return new Promise<T>(async (resolve, reject) => {
        // Generate cache key.
        key = md5(key);

        // Attempt to retrieve cache object.
        const result = client.get(key, (err, reply) => {
            if (err) return void reject(err);
            if (reply !== null) resolve(JSON.parse(reply));
        });

        // If exists, exit.
        if (result) return;

        // Resolve with result of callback.
        resolve(tap(
            await value<T>(callback),
            cacheable => {
                // Set cache in Redis.
                client.set(key, JSON.stringify(cacheable));
                // Set key expiration if provided.
                if (expires) client.expireat(key, expires as number);
            }
        ));
    });
}
