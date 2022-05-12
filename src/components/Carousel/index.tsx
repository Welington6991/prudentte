import React from 'react';
import { Dimensions } from 'react-native';
import Card from '../Card';
import Facebook from '../../assets/img/fb.png';
import Pinterest from '../../assets/img/pinterest.png';
import { Item } from '../Card/modules';
import {
    ContainerCarousel,
    Title,
    CarouselView
} from './styles';

const Carousel = () => {
    const data = [
        {
            name: 'Facebook',
            icon: Facebook,
            address: 'California, USA',
            jobName: 'UI Designer',
            level: 'Senior',
            type: 'Fulltime',
            jobLocation: 'Remote',
            value: '$8K'
        },
        {
            name: 'Pinterest',
            icon: Pinterest,
            address: 'California, USA',
            jobName: 'Motion Designer',
            level: 'Junior',
            type: 'Fulltime',
            jobLocation: 'Remote',
            value: '$8K'
        }
    ]
    return (
        <ContainerCarousel>
            <Title>Recomendation</Title>
            <CarouselView
                data={data}
                renderItem={({ item, index }: Item) => {
                    return <Card item={item} index={index} />
                }}
                layout="default"
                sliderWidth={Dimensions.get('window').width}
                itemWidth={265}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                contentContainerCustomStyle={{paddingLeft: 24, paddingRight: 0}}
            />
        </ContainerCarousel>
    );
};

export default Carousel;
