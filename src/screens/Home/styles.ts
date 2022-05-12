import styled from 'styled-components/native';
import iconNotification from '../../assets/img/notification.png'
import iconSearch from '../../assets/img/search.png'

export const Container = styled.View`
    background-color: #FBFBFB;
    height: 100%;
`;

export const Scroll = styled.ScrollView`
    height: 100%;
    margin-bottom: 80px;
`;

export const SafeAreaTop = styled.SafeAreaView`
    background-color: #3F6CDF;
`;

export const SafeAreaBottom = styled.SafeAreaView`
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 130px;
    background-color: #3F6CDF;
    justify-content: center;
    align-items: center;
`;

export const ContentText = styled.View`
    width: 100%;
    padding-left: 24px;
    padding-right: 84px;
`;

export const SubTitle = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.24px;
    color: #FFF;
    opacity: 0.75;
`;

export const Title = styled(SubTitle)`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FAFAFA;
`;

export const ButtonIconNotification = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 24px;
    justify-content: center;
    align-items: center;
`;

export const IconNotification = styled.Image.attrs({
    source: iconNotification
})`
    width: 24px;
    height: 28px;
`;