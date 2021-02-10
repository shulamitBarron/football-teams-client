import React, {FC} from 'react';
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Details from './components/Details';
import Table from './components/Table';

export const App: FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/teams/:id' component={Details}/>
                <Route path='/teams' component={Table}/>
                <Redirect exact from='/' to='/teams'/>
            </Switch>
        </HashRouter>
    );
};

export default App;
