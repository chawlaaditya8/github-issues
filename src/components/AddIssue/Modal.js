import React, { useState } from 'react';
import '../../styles/partials/_add_issue.scss';

export default function Modal(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onClickHandler = () => {
        props.addIssue(title, description);
    }
    return (
    <div className="modal">
        <div onClick={(e) => props.hideModal()} className="blur"></div>
        <div className="content">
            <label htmlFor="title">Title</label>
            <input onChange={e => setTitle(e.target.value)} id="title" />
            <label htmlFor="description">Description</label>
            <input onChange={e => setDescription(e.target.value)}  id="description" />
            <button onClick={() => onClickHandler()}>Add Issue</button>
        </div>
    </div>
    );
}
