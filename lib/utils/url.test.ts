import url from '@lib/utils/url';

describe('url', () => {
    test.each<[string, string, Record<string, any> | undefined]>([
        ['http://app.scrapbook.local:3000/', '/', undefined],
        ['http://app.scrapbook.local:3000/foo', '/foo', undefined],
        ['http://app.scrapbook.local:3000/foo/bar', '/foo/bar', undefined],
        ['http://app.scrapbook.local:3000/foo', 'foo', undefined],
        ['http://app.scrapbook.local:3000/foo?bar=baz', 'foo', {bar: 'baz'}],
    ])('%# generates a url from the given path', (expected, path, params) => {
        expect(url(path, params)).toBe(expected);
    });
});
