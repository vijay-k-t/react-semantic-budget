import React from 'react';
import {Statistic} from 'semantic-ui-react';

function DisplayBalance(props) {
    return  (
        <Statistic size={props.size} color={props.color} >
            <Statistic.Label>{props.label}:</Statistic.Label>
            <Statistic.Value>${props.value}</Statistic.Value>
        </Statistic>
  );
}

export default DisplayBalance