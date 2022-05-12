import React from 'react';
import { Item } from './modules';
import Bookmark from '../../assets/img/bookmark.png';
import {
    Container,
    Header,
    Icon,
    ContentText,
    Title,
    SubTitle,
    IconBookmark,
    JobName,
    ContentTextRow,
    JobInformation,
    Point,
    Footer,
    ButtonFooter,
    TextButtonFooter,
    ValueRow,
    Value,
    Value2
} from './styles';

const Card = ({ item, index }: Item) => {
    return (
        <Container>
            <Header>
                <Icon source={item.icon} />
                <ContentText>
                    <Title>{item.name}</Title>
                    <SubTitle>{item.address}</SubTitle>
                </ContentText>
                <IconBookmark source={Bookmark} />
            </Header>

            <ContentText>
                <JobName>{item.jobName}</JobName>
                <ContentTextRow>
                    <JobInformation>{item.level}</JobInformation>
                    <Point />
                    <JobInformation>{item.type}</JobInformation>
                    <Point />
                    <JobInformation>{item.jobLocation}</JobInformation>
                </ContentTextRow>
            </ContentText>

            <Footer>
                <ButtonFooter>
                    <TextButtonFooter>Apply Now</TextButtonFooter>
                </ButtonFooter>
                <ValueRow>
                    <Value>{item.value}</Value>
                    <Value2>/Month</Value2>
                </ValueRow>
            </Footer>
        </Container>
    );
};

export default Card;
