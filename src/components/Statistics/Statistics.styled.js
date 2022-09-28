import styled from 'styled-components';

export const StatisticList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
`;

export const StatisticListItem = styled.li`
    width: 200px;
    padding: 5px;
    border: 1px grey solid;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const StatisticText = styled.p`
    margin: 0;

    color: black;
    font-size: 14px;

`;