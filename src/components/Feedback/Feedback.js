import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import Value from './Value';
import s from './Feedback.module.css';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  goodFeedBackIncrement = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralFeedBackIncrement = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedBackIncrement = e => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <Statistics
            good={this.goodFeedBackIncrement}
            neutral={this.neutralFeedBackIncrement}
            bad={this.badFeedBackIncrement}
          />
        </Section>
        <Section title="Statistics" className={s.statistics}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No one reported yet"></Notification>
          ) : (
            <Value
              goodStats={this.state.good}
              neutralStats={this.state.neutral}
              badStats={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
