import Event from './event';
import Story from './story';
import User from './user';

User.hasMany(Story);
User.hasMany(Event);

Story.belongsTo(User);
Story.hasMany(Event);

Event.belongsTo(Story);
Event.belongsTo(User);

export { Event, Story, User };
