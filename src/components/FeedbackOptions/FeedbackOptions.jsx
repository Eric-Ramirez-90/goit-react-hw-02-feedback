import { Wrapper, Button } from './FeedbackOptions.styled';

export function FeedBackOptions({ good, neutral, bad }) {
  return (
    <Wrapper>
      <Button good={good}>Good</Button>
      <Button neutral={neutral}>Neutral</Button>
      <Button bad={bad}>Bad</Button>
    </Wrapper>
  );
}
