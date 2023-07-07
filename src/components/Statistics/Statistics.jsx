import PropTypes from 'prop-types';
import { StyledStatistics } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <StyledStatistics>
            <li>
                <p>
                    Good: <span className="bold">{good}</span>
                </p>
            </li>
            <li>
                <p>
                    Neutral: <span className="bold">{neutral}</span>
                </p>
            </li>
            <li>
                <p>
                    Bad: <span className="bold">{bad}</span>
                </p>
            </li>
            <li className="total">
                <p className="bold">
                    Total: <span className="bold">{total}</span>
                </p>
            </li>
            <li>
                <p className="bold">
                    Positive feedback:{' '}
                    <span className="rating">{positivePercentage}%</span>
                </p>
            </li>
        </StyledStatistics>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
