import Event from '@database/mysql/models/event';
import Story from '@database/mysql/models/story';
import User from '@database/mysql/models/user';

User.hasMany(Story);
User.hasMany(Event);

Story.belongsTo(User);
Story.hasMany(Event);

Event.belongsTo(Story);
Event.belongsTo(User);

export { User, Story, Event };
