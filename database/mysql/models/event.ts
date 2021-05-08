import sequelize from '../index';
import { DataTypes, Model } from 'sequelize';

export interface Attributes {
    description: string,
    title: string,
    type: number,
}

const Event = sequelize.define<Model, Attributes>('Event', {
    description: DataTypes.TEXT,
    title: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Event;
