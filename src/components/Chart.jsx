import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => (
  <div>
    <Sparklines height={props.height} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg"/>
    </Sparklines>
    <div>Average: {average(props.data)}º{props.units}</div>
  </div>
);
