import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((e) => (
    <Button key={e} type="button" onClick={onLeaveFeedback} name={e} value={e}>
      {e}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
