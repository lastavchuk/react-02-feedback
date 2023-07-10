import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {
    countPositiveFeedbackPercentage,
    countTotalFeedback,
} from 'utils/getCount';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onAddFeedback = btn => {
        this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
    };

    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onAddFeedback}
                    ></FeedbackOptions>
                </Section>
                {countTotalFeedback(this.state) ? (
                    <Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={countTotalFeedback(this.state)}
                            positivePercentage={countPositiveFeedbackPercentage(
                                this.state
                            )}
                        ></Statistics>
                    </Section>
                ) : (
                    <Notification message="There is no feedback"></Notification>
                )}
            </>
        );
    }
}
