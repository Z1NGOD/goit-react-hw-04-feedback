import Feedback from './Feedback/Feedback';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import { Container } from 'ui/ui.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = selectedValue => {
    switch (selectedValue) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const calculatePositivePercentage = () => {
    const total = good + neutral + bad;
    return total !== 0 ? ((good / total) * 100).toFixed(2) : '0';
  };
  const total = good + neutral + bad;
  const stateNames = ["good", "neutral", "bad"];
  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback handleIncrement={handleIncrement} stateNames={stateNames} />
      </Section>
      <Section title="Statistics">
        <Statistic
          calculatePositivePercentage={calculatePositivePercentage}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
        />
      </Section>
    </Container>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export { App };
