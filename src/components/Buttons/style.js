import styled from 'styled-components';

export const BtnPrimary= styled.button`
    background-color: #f2e7c7;
    border-radius: 10px;
    border: 0px;
    padding-inline: 25px;
    padding-block: 10px;
    box-shadow: 0px 0px 2px 0px;
    :active{
        box-shadow: 0px 0px 0px 0px;
    };
`;

export const BtnSecodary= styled.button`
    border: 0px;
    border-radius: 5px;
    background-color: #292929;
    padding: 10px;
    box-shadow: 0px 0px 4px 0px;
    color: whitesmoke;
    :active{
        box-shadow: 0px 0px 0px 0px;
        background-color: #b5b5b500;
    };
`;