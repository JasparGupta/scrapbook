import { UserContext } from '@lib/contexts';
import { User } from '@lib/types';
import { useContext } from 'react';

export default function useUser(): User {
    return useContext(UserContext);
}
