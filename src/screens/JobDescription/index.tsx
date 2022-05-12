import React from 'react';
import { useNavigation } from '@react-navigation/native';
import JobImage from '../../assets/img/job-image.png'
import {
    Container,
    Scroll,
    Header,
    ButtonIconGoBack,
    IconGoBack,
    StatusBar,
    Descriptions,
    Icon,
    BorderCircle,
    Title,
    SubTitle,
    TitleDescription,
    SubTitleDescription,
    Row,
    SubTitleDescriptionRow,
    Point,
    ContainerButton,
    ButtonApply,
    TextButtonApply,
    ButtonChat,
    IconChat
} from './styles';
import MenuBar from '../../components/MenuBar';
import { Item } from '../../components/Card/modules';

const JobDescription = ({ route }: any) => {
    const navigation = useNavigation();

    const { data } = route.params;

    return (
        <Container>
            <Scroll>
                <Header source={JobImage} />
                <ButtonIconGoBack onPress={() => navigation.goBack()}>
                    <IconGoBack />
                </ButtonIconGoBack>
                <StatusBar
                    hidden={true} />
                <Descriptions>
                    <Icon source={data.icon}/>
                    <BorderCircle />

                    <Title>{data.jobName}</Title>
                    <SubTitle>{data.address}</SubTitle>

                    <MenuBar />
                </Descriptions>

                <TitleDescription>Requirements</TitleDescription>

                <SubTitleDescription>Exceptional with communication skills and team working skill.</SubTitleDescription>
                <SubTitleDescription>Formulate good design ideas and propose solutions to increased product.</SubTitleDescription>
                <SubTitleDescription>You have at least 3 years of experience in a similar role.</SubTitleDescription>

                <TitleDescription>Skills Needed</TitleDescription>

                <Row>
                    <SubTitleDescriptionRow>Design Thinking</SubTitleDescriptionRow>
                    <Point />
                    <SubTitleDescriptionRow>Problem Solving</SubTitleDescriptionRow>
                    <Point />
                    <SubTitleDescriptionRow>UX Design</SubTitleDescriptionRow>
                </Row>

                <ContainerButton>
                    <ButtonApply>
                        <TextButtonApply>Apply Now</TextButtonApply>
                    </ButtonApply>

                    <ButtonChat>
                        <IconChat />
                    </ButtonChat>
                </ContainerButton>
            </Scroll>
        </Container>
    );
};

export default JobDescription;
