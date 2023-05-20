import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({ percentage }) => (
  <div className={styles['main-container']}>
    <div className={styles['progress-bar']}>
      <CircularProgressbar value={percentage} />
    </div>
    <div className={styles['completed-percent-text']}>
      <h3 className={styles['percentage-value']}>
        {percentage}
        %
      </h3>
      <p className={styles['completed-text']}>completed</p>
    </div>
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
