import React from 'react';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import JobList from '../../components/JobList';
import Search from '../../components/Search';
import {
    Container,
    Scroll,
    SafeAreaTop,
    SafeAreaBottom,
    Header,
    ContentText,
    SubTitle,
    Title,
    ButtonIconNotification,
    IconNotification
} from './styles';

const Home = () => {
    return (
        <Container>
            <SafeAreaTop />
            <Scroll>
                <Header>
                    <ContentText>
                        <SubTitle>Hello</SubTitle>
                        <Title>Leslie Alexander</Title>
                    </ContentText>

                    <ButtonIconNotification>
                        <IconNotification />
                    </ButtonIconNotification>

                    <Search />
                </Header>
                <Carousel />

                <JobList />
            </Scroll>
            <Footer />
            <SafeAreaBottom />
        </Container>
    );
};

export default Home;
