export default function toQueryString(params: Record<string, any>): string {
    return Object.entries(params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
}
