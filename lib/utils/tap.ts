type Callback<T> = (value: T) => void

export default function tap<T>(value: T, callback: Callback<T>): T {
    callback(value);

    return value;
}
