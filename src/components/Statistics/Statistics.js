import PropTypes from 'prop-types';
import { StatisticList, StatisticListItem, StatisticText } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
            <StatisticList>
                <StatisticListItem>
                    <StatisticText>Good: {good}</StatisticText>
                </StatisticListItem>
                <StatisticListItem>
                    <StatisticText>Neutral: {neutral}</StatisticText>
                </StatisticListItem>
                <StatisticListItem>
                    <StatisticText>Bad: {bad}</StatisticText>
                </StatisticListItem>
                <StatisticListItem>
                    <StatisticText>Total: {total}</StatisticText>
                </StatisticListItem>
                <StatisticListItem>
                    <StatisticText>Positive feedback: {positivePercentage}%</StatisticText>
                </StatisticListItem>
            </StatisticList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};