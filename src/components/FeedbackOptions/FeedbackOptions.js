import PropTypes from 'prop-types';
import { FeedbackList, FeedbackListItem, FeedbackListBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleOption }) => {
    return (
            <FeedbackList>
                {options.map((option) =>
                    <FeedbackListItem key={option}>
                        <FeedbackListBtn type="button" onClick={() => { handleOption(option) }}>{option}</FeedbackListBtn>
                    </FeedbackListItem>
                )}
            </FeedbackList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    handleOption: PropTypes.func.isRequired,
};