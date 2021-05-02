import connection from '@lib/mysql';
import { DataTypes } from 'sequelize';

const User = connection.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: true}
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.sync({force: process.env.NODE_ENV === 'development'});

export default User;
