import { User } from '@lib/types';
import fullName from '@lib/utils/user/fullName';

describe('fullName', () => {
    test('returns users full name', () => {
        const user: Partial<User> = {
            first_name: 'Foo',
            last_name: 'Bar',
        };

        expect(fullName(user as User)).toBe('Foo Bar');
    });
});
