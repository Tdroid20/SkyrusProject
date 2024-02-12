import styled from 'styled-components';

interface Props {
    content?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomSearchBar = styled.input<Props>`
    width: 959px;
    height: 55px;
    flex-shrink: 0;
    transition: width 0.3s ease;
    padding: 10px;

    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.20);
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    color: #FFF;
    text-align: center;
    font-size: 27px;
    font-style: bold;
    font-weight: 700;
    line-height: bold;

    &::placeholder {
        color: #FFF;
    }
`;
