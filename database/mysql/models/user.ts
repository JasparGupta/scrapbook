import connection from '@database/mysql';
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

export default User;
