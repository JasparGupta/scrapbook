import migrate from '@database/mysql/migrate';
import seed from '@database/mysql/seed';
import { NextApiHandler } from 'next';

/**
 * TODO: Make this a console command.
 */
const handler: NextApiHandler = async (_, response) => {
    if (process.env.NODE_ENV !== 'development') {
        return response.status(401).end();
    }

    await migrate();
    await seed();

    response.status(204).end();
};

export default handler;
