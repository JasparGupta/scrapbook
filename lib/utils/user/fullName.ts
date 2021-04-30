import { User } from '@lib/types';

export default function fullName(user: User): string {
    return `${user.first_name} ${user.last_name}`;
}
