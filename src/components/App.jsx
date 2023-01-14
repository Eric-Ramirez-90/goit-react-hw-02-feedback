import { Component } from 'react';
// import { Section } from './Section/Section';
// import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = evt => {
    console.log(evt.tagret);
    // this.setState(prevState => ({
    //   good: prevState.good + 1,
    // }));
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <div>
            <button type="button" onClick={this.onLeaveFeedBack}>
              Good
            </button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <div>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
