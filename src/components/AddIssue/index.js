import React, { useState } from 'react';
import Modal from './Modal';
import '../../styles/partials/_add_issue.scss';

export default function AddIssue(props) {
    const [show, toggleShow] = useState(false);

    return (
    <div>
        <button className="add_issue__button" onClick={() => {toggleShow(!show)}}>Add Issue</button>
        {show ? <Modal hideModal={() => toggleShow(!show)} addIssue={props.addIssue} /> : ''}
    </div>
    );
}
