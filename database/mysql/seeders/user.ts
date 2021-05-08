import { User } from '@database/mysql/models';
import { Attributes } from '@database/mysql/models/user';
import * as faker from 'faker';

export default async function user(): Promise<void> {
    const attributes: Attributes = {
        email: faker.internet.email(),
        firstName: 'Jaspar',
        lastName: 'Gupta',
        password: faker.internet.password(),
    };

    void await User.create(attributes);
}
