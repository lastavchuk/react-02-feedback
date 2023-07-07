import { StyledContainer } from 'components/shared/styles/Container.styled';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledNotification } from './Notification.styled';
import imgNoFeedback from '../../images/no-feedback.jpg';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledNotification>
                    <h3 className="noFeebback">{message}</h3>
                    <img src={imgNoFeedback} alt={message} />
                </StyledNotification>
            </StyledContainer>
        </StyledSection>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
