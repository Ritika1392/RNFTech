import React from 'react';
import HomeComponenct from './Home';
import QuestionComponent from './QuestionComponent';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import DisplayPoll from './DisplayPoll';
import Result from './Result';
import './../css/home.css';


class PollComponent extends React.Component{
    render(){
        return(

            <Router>
            <div className="link">
              <ul className="inlineList">
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/question">Create Poll</Link>
                </li>
                <li>
                  <Link to="/about">Vote</Link>
                </li>
                <li>
                  <Link to="/stats">Result</Link>
                </li>
               
              </ul>
      
              <hr />
              <Route exact path="/" component={HomeComponenct} />
              <Route  path="/question" component={QuestionComponent} />
              <Route path="/about" component={DisplayPoll} />
              <Route path="/stats" component={Result} />
            </div>
          </Router>
               
  
        );
    }
}

export default PollComponent;