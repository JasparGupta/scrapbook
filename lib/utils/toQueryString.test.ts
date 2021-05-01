import toQueryString from '@lib/utils/toQueryString';

describe('toQueryString', () => {
    test('converts object to url query string', () => {
        const params = {
            foo: 'bar',
            baz: 'lorem ipsum',
        };
        const expected = 'foo=bar&baz=lorem%20ipsum';
        
        expect(toQueryString(params)).toBe(expected);
    });
});
