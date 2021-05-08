import sequelize from '../index';
import { DataTypes } from 'sequelize';

const Event = sequelize.define('Event', {
    description: DataTypes.TEXT,
    title: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Event.sync({force: process.env.NODE_ENV === 'development'});

export default Event;
