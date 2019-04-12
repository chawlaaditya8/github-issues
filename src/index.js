import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Code from './screens/Code';
import Issues from './screens/Issues';
import PullRequest from './screens/PullRequest';
import Tabs from './components/Tabs';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Tabs />
                <Switch>
                    {/* <Route exact path="/" component={Issues} /> */}
                    <Route path="/code" component={Issues} />
                    <Route path="/issues" component={Code} />
                    <Route path="/pull-request" component={PullRequest} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
