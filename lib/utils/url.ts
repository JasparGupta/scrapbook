import { toQueryString } from '@lib/utils';

export default function url(path: string, params?: Record<string, any>) {
    path = `${process.env.NEXT_PUBLIC_APP_URL}/${path.replace(/^\//, '')}`;

    if (params) path += `?${toQueryString(params)}`;

    return path;
}
