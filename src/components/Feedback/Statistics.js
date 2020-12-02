import React from 'react';
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => (
  <>
    <button type="button" className={s.button} onClick={good}>
      Good
    </button>
    <button type="button" className={s.button} onClick={neutral}>
      Neutral
    </button>
    <button type="button" className={s.button} onClick={bad}>
      Bad
    </button>
  </>
);

Statistics.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default Statistics;
