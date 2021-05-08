export default `
    type Query {
        events(story: ID, user: ID): [Event]!
        hello: String!
        stories: [Story]!
        story(id: ID!): Story
    }
`;
