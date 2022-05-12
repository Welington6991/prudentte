import styled from 'styled-components/native';
import iconSearch from '../../assets/img/search.png'

export const ContentSearch = styled.View`
    position: absolute;
    top: 103px;
`;

export const SearchInput = styled.TextInput.attrs({
    placeholder: 'Search job, company, etc..'
})`
    width: 328px;
    height: 56px;
    background: #FFFFFF;
    box-shadow: 0px 4px 45px rgba(26, 42, 97, 0.04);
    border-radius: 13px;
    font-family: 'SFProText-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.24px;
    color: ${props => props.value ? '#171716' : 'rgba(23, 23, 22, 0.55)'};
    padding-left: 52px;
`;

export const IconSearch = styled.Image.attrs({
    source: iconSearch
})`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 18px;
`;