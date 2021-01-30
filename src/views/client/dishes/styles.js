import styled from 'styled-components'

export const StikyContent= styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
    padding-block: 10px;
    padding-inline: 20px;
    margin-bottom: 10px;
    @media (max-width: 767px) {
        border-bottom: 2px solid;
        
    }
    @media (min-width: 768px) {
        border-right: 2px solid;
    }
`;

export const RowResponsive= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    overflow-y: scroll;
    box-shadow: inset 0px 0px 2px 0px;
    padding-block: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px grey; 
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #b5b5b599; 
        border-radius: 5px;
    }
    ::after, ::before{
        box-sizing: border-box;
    }
    @media (max-width: 767px) {
        max-height: 30vh;
        
    };
    @media (min-width: 768px) {
        max-height: 90vh;
    };

`;

export const MenuContent= styled.div`
    max-height: 170px;
    overflow-y: scroll;
    padding-block: 10px;
    &::-webkit-scrollbar {
         width: 10px;
    };

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px grey; 
        border-radius: 5px;
    };
    
    &::-webkit-scrollbar-thumb {
        background: #b5b5b599; 
        border-radius: 5px;
    };
`; 