import connection from '../index';
import { DataTypes, Model } from 'sequelize';

export interface Attributes {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}

const User = connection.define<Model, Attributes>('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: true}
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
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
