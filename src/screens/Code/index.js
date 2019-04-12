import React, {useState} from 'react';
import Input from '../../components/Input';
import AddIssue from '../../components/AddIssue';
import '../../styles/partials/_issues.scss';

const defaultIssues = {
    issues: [
        {
            id: 1,
            text: "Issue 1",
        },
        {
            id: 2,
            text: "Issue 2"
        },
        {
            id: 3,
            text: "Issue 3"
        },
        {
            id: 4,
            text: "Issue 4"
        },
        {
            id: 5,
            text: "Issue 5"
        },
        {
            id: 6,
            text: "Issue 6"
        },
        {
            id: 7,
            text: "Issue 7"
        },
        {
            id: 8,
            text: "Issue 8"
        }
    ]
}

export default function Code() {
    const [issues, setIssues] = useState(defaultIssues.issues);
    const [displayIssues, setDisplayIssues] = useState(issues);

    const onChangeHandler = (e) => {
        const inputQuery = e.target.value;
        if(inputQuery != '') {   
            setDisplayIssues(displayIssues.filter(issue => issue.text.includes(inputQuery)));
        } else {
            setDisplayIssues(issues);
        }
    };

    const addIssueHandler = (text, description) => {
        setDisplayIssues([...displayIssues, {
            text, description
        }]);
        setIssues([...displayIssues]);
    }

    return (
        <div className="container">
            <div className="action__container">
                <Input onChange={(e) => onChangeHandler(e)} />
                <AddIssue addIssue={addIssueHandler} />
            </div>
            <div className="issue__container">
                <span className="issue__header"></span>
                {displayIssues && displayIssues.map(({ text }) => <span className="issue">{text}</span>)}
            </div>
        </div>
    );
}