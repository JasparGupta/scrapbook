export default function value<T>(v: any): T {
    if (typeof v === 'function') {
        return v();
    }

    return v;
}
