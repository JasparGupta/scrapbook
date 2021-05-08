import { Sequelize } from 'sequelize';

const {
    MYSQL_DATABASE,
    MYSQL_HOSTNAME,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_USERNAME,
} = process.env;

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: MYSQL_HOSTNAME,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
});

export default sequelize;
