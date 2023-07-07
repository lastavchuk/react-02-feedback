import styled from 'styled-components';

export const StyledSection = styled.section`
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;

    &:first-child {
        padding-top: 20px;
    }
    h2 {
        padding: 20px 0;
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 30px;

        &:first-child {
            padding-top: 32px;
        }
    }
`;
