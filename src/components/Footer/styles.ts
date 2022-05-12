import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    bottom: 0px;
    background-color: #FFF;
    width: 100%;
    height: 80px;
`;

export const ContentRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
`;

export const ButtonFooter = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

export const IconButtonFooter = styled.Image`
    width: 20px;
    height: 20px;
`;