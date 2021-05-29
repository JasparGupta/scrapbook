import { User } from '@database/mysql/models';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import hash from '@lib/auth/hash';

interface Credentials {
    email: string,
    password: string,
}

export default NextAuth({
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }

            return token;
        },
        async session(session, token) {
            if (session?.user) {
                session.user.id = parseInt(token.sub, 10);
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
            }

            return session;
        }
    },
    pages: {
        signIn: '/auth',
    },
    providers: [
        Providers.Credentials({
            credentials: {
                email: {
                    label: 'Email',
                    placeholder: 'Enter your email address',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    placeholder: 'Enter your password',
                    type: 'password',
                },
            },
            async authorize(credentials: Credentials) {
                console.log('CREDENTIALS', credentials);
                const { email, password } = credentials;
                const user = await User.findOne({
                    where: { email, password: hash(password) }
                });
                console.log('USER', user);

                return user;
            }
        }),
    ]
});
