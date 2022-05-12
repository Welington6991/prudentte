import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

export const ContainerCarousel = styled.View`
`;

export const Title = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.24px;
    color: #171716;
    padding-left: 24px;
    margin-top: 60px;
    margin-bottom: 20px;
`;

export const CarouselView = styled(Carousel)`
`;