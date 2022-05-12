import React from 'react';
import Home from '../../assets/img/home.png'
import Activity from '../../assets/img/activity.png'
import Heart from '../../assets/img/heart.png'
import Profile from '../../assets/img/profile.png'
import {
    Container,
    ContentRow,
    ButtonFooter,
    IconButtonFooter
} from './styles';

const Footer = () => {

    return (
        <Container>
            <ContentRow>
                <ButtonFooter>
                    <IconButtonFooter source={Home} resizeMode='contain'/>
                </ButtonFooter>
                <ButtonFooter>
                    <IconButtonFooter source={Activity} resizeMode='contain'/>
                </ButtonFooter>
                <ButtonFooter>
                    <IconButtonFooter source={Heart} resizeMode='contain'/>
                </ButtonFooter>
                <ButtonFooter>
                    <IconButtonFooter source={Profile} resizeMode='contain'/>
                </ButtonFooter>
            </ContentRow>
        </Container>
    );
};

export default Footer;
