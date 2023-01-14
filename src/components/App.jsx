import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = this.state;
    return (
      <>
        <Section title="Please leave feedback"></Section>
        <FeedBackOptions options={options} />
      </>
    );
  }
}
