import { createHash } from 'crypto';

export default function hash(value: string): string {
    return createHash('sha256').update(value).digest('hex');
}
