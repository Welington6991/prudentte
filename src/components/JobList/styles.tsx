import styled from 'styled-components/native';

export const ContainerFlatList = styled.View`
`;

export const TitleFlatList = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.24px;
    color: #171716;
    padding-left: 24px;
    margin-top: 32px;
    margin-bottom: 20px;
`;

export const ContainerCenter = styled.TouchableOpacity`
    width: 100%;
    height: 112px;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 20px;
`;

export const Container = styled.View`
    width: 100%;
    height: 112px;
    background: #FFFFFF;
    border-radius: 20px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    height: 40px;
`;

export const Icon = styled.Image`
    width: 40px;
    height: 40px;
    position: absolute;
`;

export const ContentText = styled.View`

`;

export const Title = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171716;
    padding-left: 52px;
    padding-right: 34px;
`;

export const IconBookmark = styled.Image`
    width: 16px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 0px;
`;

export const ContentTextRow = styled(ContentText)`
    flex-direction: row;
    align-items: center;
    padding-left: 52px;
    padding-right: 34px;
`;

export const SubTitle = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: rgba(23, 23, 22, 0.75);
    padding-left: 52px;
    padding-right: 34px;
`;

export const JobInformation = styled(SubTitle)`
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

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 21px;
`;

export const ValueRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled(Title)`
    padding-left: 0;
    padding-right: 0;
`;

export const Value2 = styled(SubTitle)`
    padding-left: 0;
    padding-right: 0;
`;