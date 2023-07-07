export function countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
}

export function countPositiveFeedbackPercentage(state) {
    return Math.round((state.good * 100) / countTotalFeedback(state)) || 0;
}
