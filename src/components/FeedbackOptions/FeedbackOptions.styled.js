import styled from 'styled-components';

export const StyledFeedback = styled.div`
    display: flex;
    gap: 5px;
    padding-bottom: 20px;
    @media screen and (min-width: 768px) {
        gap: 10px;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 5px;

        flex-basis: calc((100% - 2 * 5px) / 3);
        padding: 10px;

        border-radius: 5px;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;

        transition-property: color, border-color, background-color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        @media screen and (min-width: 768px) {
            padding: 15px;
        }
    }

    .good {
        background-color: #198754;
        border: 1px solid #198754;
        &:hover {
            color: #198754;
            background-color: #ffffff;
            border-color: #198754;
        }
    }
    .neutral {
        background-color: #0d6efd;
        border: 1px solid #0d6efd;
        &:hover {
            color: #0d6efd;
            background-color: #ffffff;
            border-color: #0d6efd;
        }
    }
    .bad {
        background-color: #dc3545;
        border: 1px solid #dc3545;
        &:hover {
            color: #dc3545;
            background-color: #ffffff;
            border-color: #dc3545;
        }
    }
`;
