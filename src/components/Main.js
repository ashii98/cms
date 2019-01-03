import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
// import Persons from './Persons';
// import UserInfo from './UserInfo';
import PageNotFound from './pageNotFound';
import Create from './Create';
import EditPost from './EditPost';
import ViewPost from './ViewPosts';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    {/* <Route path="/users/" component={Persons}/>
                    <Route path="/user/:number/" component={UserInfo}/> */}
                    <Route path="/create/" component={Create}/>
                    <Route path="/edit_post/:number" component={EditPost}/>
                    <Route path="/view_post/:number" component={ViewPost}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </main>
        );
    }
}

export default Main