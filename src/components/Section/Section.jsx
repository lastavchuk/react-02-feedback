import PropTypes from 'prop-types';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/shared/styles/Container.styled';

export const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <StyledContainer>
                <h2>{title}</h2>
                {children}
            </StyledContainer>
        </StyledSection>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};
