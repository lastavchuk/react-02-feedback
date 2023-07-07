import styled from 'styled-components';

export const StyledStatistics = styled.ul`
    padding-bottom: 20px;
    font-size: 18px;
    @media screen and (min-width: 768px) {
        font-size: 22px;
    }
    li {
        padding-bottom: 5px;
    }

    .bold {
        font-weight: 700;
    }
    .total {
        margin-top: 20px;
    }
`;
