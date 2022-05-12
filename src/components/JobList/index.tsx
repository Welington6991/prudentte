import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Item } from './modules';
import Facebook from '../../assets/img/fb.png';
import Pinterest from '../../assets/img/pinterest.png';
import Google from '../../assets/img/google-description.png';
import Bookmark from '../../assets/img/bookmark.png';
import {
    ContainerFlatList,
    TitleFlatList,
    ContainerCenter,
    Container,
    Header,
    Icon,
    ContentText,
    Title,
    IconBookmark,
    ContentTextRow,
    JobInformation,
    Point,
    Footer,
    ValueRow,
    Value,
    Value2
} from './styles';

const JobList = () => {
    const navigation = useNavigation();

    const data = [
        {
            name: 'Google',
            icon: Google,
            address: 'California, USA',
            jobName: 'Product Designer',
            level: 'Senior',
            type: 'Fulltime',
            jobLocation: 'Remote',
            value: '$8K'
        },
        {
            name: 'Google',
            icon: Google,
            address: 'California, USA',
            jobName: 'Product Designer',
            level: 'Senior',
            type: 'Fulltime',
            jobLocation: 'Remote',
            value: '$8K'
        },
        {
            name: 'Google',
            icon: Google,
            address: 'California, USA',
            jobName: 'Product Designer',
            level: 'Senior',
            type: 'Fulltime',
            jobLocation: 'Remote',
            value: '$8K'
        }
    ];

    const renderItem = ({ item, index }: Item) => {
        return (
            <ContainerCenter onPress={() => navigation.navigate('JobDescription', { data: item })}>
                <Container>
                    <Header>
                        <Icon source={item.icon} />
                        <ContentText>
                            <Title>{item.jobName}</Title>
                            <ContentTextRow>
                                <JobInformation>{item.level}</JobInformation>
                                <Point />
                                <JobInformation>{item.type}</JobInformation>
                                <Point />
                                <JobInformation>{item.jobLocation}</JobInformation>
                            </ContentTextRow>
                        </ContentText>
                        <IconBookmark source={Bookmark} />
                    </Header>

                    <Footer>
                        <ValueRow>
                            <Value>{item.value}</Value>
                            <Value2>/Month</Value2>
                        </ValueRow>
                        <JobInformation>12 Min Ago</JobInformation>
                    </Footer>
                </Container>
            </ContainerCenter>
        )
    }

    return (
        <ContainerFlatList>
            <TitleFlatList>Recent Job List</TitleFlatList>
            {data.map((item, index) => renderItem({ item, index }))}
        </ContainerFlatList>
    );
};

export default JobList;
