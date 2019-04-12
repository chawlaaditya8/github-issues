import React, { useState } from 'react';
import '../../styles/partials/_input.scss';

export default function Input(props) {

  return (
    <div>
        <input onChange={props.onChange} type="text" placeholder="Search Issue" />
    </div>
  );
}