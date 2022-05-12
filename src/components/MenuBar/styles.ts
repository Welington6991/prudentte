import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 22px;
    position: absolute;
    bottom: 0;
`;

export const ScrollHorizontal = styled.ScrollView.attrs({
    horizontal: true
})`
    padding-left: 24px;
`;

export const ButtonMenuBar = styled.TouchableOpacity`
    height: 22px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

export const TextButtonMenuBar = styled.Text`
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.24px;
    color: #171716;
`;

export const UnderlineMenuBar = styled.View`
    width: 100%;
    border-bottom-width: 1.5px;
    border-color: #DDEAF3;
    position: absolute;
    bottom: 0;
`;

export const UnderlineTextButtonMenuBar = styled.View`
    border-bottom-width: 1px;
    border-color: #171716;
    opacity: 0.75;
    width: 90%;
    position: absolute;
    bottom: 0;
    z-index: 10;
`;