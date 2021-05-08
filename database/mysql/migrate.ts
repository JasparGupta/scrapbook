import * as models from '@database/mysql/models';

export default async function migrate(): Promise<void> {
    for (const model of Object.values(models)) {
        await model.sync({force: process.env.NODE_ENV === 'development'});
    }
}
