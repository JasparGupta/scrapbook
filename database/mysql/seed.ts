import * as seeders from '@database/mysql/seeders';

export default async function seed(): Promise<void> {
    for (const seeder of Object.values(seeders)) {
        console.time('seeder');
        console.log(`Running seeder ${seeder.name}`);

        try {
            await seeder();
        } catch (error) {
            console.error(error);
        }

        console.timeEnd('seeder');
    }
}
