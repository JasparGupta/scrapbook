import sequelize from '../index';
import { DataTypes, Model } from 'sequelize';

export interface Attributes {
    title: string,
}

const Story = sequelize.define<Model, Attributes>('Story', {
    title: DataTypes.STRING
});

export default Story;
