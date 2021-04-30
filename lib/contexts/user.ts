import { User } from '@lib/types';
import React from 'react';

const UserContext = React.createContext(null as unknown as User);

export default UserContext;
