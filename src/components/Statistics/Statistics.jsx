export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {() => total}</li>
        <li>Positive percent: {() => positivePercentage}</li>
      </ul>
    </div>
  );
}
