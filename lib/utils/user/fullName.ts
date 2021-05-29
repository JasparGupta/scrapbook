import { User } from '@lib/types';

export default function fullName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
}
