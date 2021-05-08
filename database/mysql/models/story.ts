import sequelize from '../index';
import { DataTypes } from 'sequelize';

const Story = sequelize.define('Story', {
    title: DataTypes.STRING
});

Story.sync({force: process.env.NODE_ENV === 'development'});

export default Story;