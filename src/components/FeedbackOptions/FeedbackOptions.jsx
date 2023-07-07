import PropTypes from 'prop-types';
import { StyledFeedback } from './FeedbackOptions.styled';
import { svgBad, svgGood, svgNeutral } from 'utils/svgIcons';

const svg = {
    good: svgGood,
    neutral: svgNeutral,
    bad: svgBad,
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <StyledFeedback>
            {options.map(button => {
                return (
                    <button
                        className={`btn ${button}`}
                        key={button}
                        onClick={() => onLeaveFeedback(button)}
                        type="button"
                    >
                        {svg[button]}
                        {button}
                    </button>
                );
            })}
        </StyledFeedback>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
