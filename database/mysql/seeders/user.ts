import { User } from '@database/mysql/models';
import { Attributes } from '@database/mysql/models/user';
import hash from '@lib/auth/hash';

export default async function user(): Promise<void> {
    const attributes: Attributes = {
        email: 'jaspar.gupta@gmail.com',
        firstName: 'Jaspar',
        lastName: 'Gupta',
        password: hash('admin'),
    };

    void await User.create(attributes);
}
