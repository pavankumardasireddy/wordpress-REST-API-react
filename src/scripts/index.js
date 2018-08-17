import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';
import Home from 'components/Home.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {
    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();