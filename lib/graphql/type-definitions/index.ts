import { gql } from 'apollo-server-micro';
import Event from './event';
import Query from './query';
import Story from './story';
import User from './user';

export default gql`${[Event, Story, User, Query].join('\n')}`;
