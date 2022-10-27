import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onBtnClick }) => (
  <>
    {options.map(option => (
      <Button type="button" key={option} onClick={() => onBtnClick(option)}>
        {option}
      </Button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
