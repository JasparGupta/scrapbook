import * as seeders from './seeders';

Object.values(seeders).forEach(async seeder => {
    console.time('seeder');
    console.log(`Running seeder ${seeder.name}`);

    try {
        await seeder();
    } catch (error) {
        console.error(error);
    }

    console.timeEnd('seeder');
});
