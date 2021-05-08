import Page from '@components/page';
import Story from '@components/story';
import { useTitle } from '@lib/hooks';
import sequelize from '@lib/../../database/mysql';
import { EventType, Story as StoryType, User } from '@lib/types';
import { fullName } from '@lib/utils/user';
import faker from 'faker';
import { GetServerSideProps } from 'next';
import { FC } from 'react';

interface Props {
    stories: StoryType[],
    user: User,
}

const UserPage: FC<Props> = ({stories, user}) => {
    const userName = fullName(user);
    useTitle(userName);

    return (
        <Page title={userName} user={user}>
            {!!stories.length && stories.map(story => (
                <Story key={story.id} {...story}/>
            ))}
        </Page>
    );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully authenticated');
    } catch (error) {
        console.error(error);
    }
    
    const stories: StoryType[] = [
        {
            events: [
                {
                    description: faker.lorem.paragraph(),
                    id: faker.datatype.uuid(),
                    title: faker.lorem.sentence(),
                    type: EventType.PHOTO,
                }
            ],
            id: faker.datatype.uuid(),
            title: 'My First Story',
        }
    ];
    const user: User = {
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        password: faker.datatype.string(12),
    };

    return {
        props: {stories, user},
    };
};
