import styled from 'styled-components/native';
import iconGoBack from '../../assets/img/goback.png';
import iconGoogle from '../../assets/img/google-description.png';
import iconChat from '../../assets/img/chat.png';

export const Container = styled.View`
    background-color: #FBFBFB;
    height: 100%;
`;

export const Scroll = styled.ScrollView`
    height: 100%;
`;

export const StatusBar = styled.StatusBar`
`;

export const Header = styled.Image`
    width: 100%;
    height: 223px;
    position: absolute;
`;

export const ButtonIconGoBack = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 21px;
    top: 10px;
`;

export const IconGoBack = styled.Image.attrs({
    source: iconGoBack
})`
    width: 12px;
    height: 20px;
`;

export const Icon = styled.Image`
    width: 74px;
    height: 74px;
    position: absolute;
    top: -37px;
    z-index: 10;
`;

export const BorderCircle = styled.View`
    width: 76px;
    height: 76px;
    border-radius: 76px;
    background-color: black;
    position: absolute;
    top: -37px;
`;

export const Descriptions = styled.View`
    background-color: #FFF;
    width: 100%;
    height: 191px;
    margin-top: 175px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.24px;
    color: #171716;
    margin-top: 49px;
`;

export const SubTitle = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.24px;
    color: rgba(23, 23, 22, 0.75);
    margin-top: 8px;
`;

export const TitleDescription = styled(Title)`
    font-size: 20px;
    margin-top: 32px;
    margin-bottom: 20px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const SubTitleDescription = styled(SubTitle)`
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 12px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    padding-right: 24px;
`;

export const SubTitleDescriptionRow = styled(SubTitleDescription)`
    padding-left: 0;
    padding-right: 0;
`;

export const Point = styled.View`
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: #BFD4E4;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 50px;
    margin-bottom: 40px;
`;

export const ButtonApply = styled.TouchableOpacity`
    width: 75%;
    height: 56px;
    background: #3F6CDF;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
`;

export const TextButtonApply = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFF;
`;

export const ButtonChat = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background: #3F6CDF;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
`;

export const IconChat = styled.Image.attrs({
    source: iconChat
})`
    width: 24px;
    height: 24px;
`;