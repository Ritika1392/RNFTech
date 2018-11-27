import React from 'react';
import {connect} from 'react-redux';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.css';
import './../css/home.css';

class QuestionComponent extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const question = this.getQuestion.value;
        const choice1 = this.getChoice1.value;
        const choice2 = this.getChoice2.value;
        const choiceCount1 = 0;
        const choiceCount2 = 0;
        const data = {
        id: new Date(),
        question,
        choice1,
        choice2,
        choiceCount1,
        choiceCount2
        }
        // console.log(data);
        this.props.dispatch({
            type:'ADD_POLL',
            data});
            
            this.getQuestion.value = '';
            this.getChoice1.value = '';
            this.getChoice2.value = '';
            this.getChoiceCount1 = '';
            this.getChoiceCount2 = '';

        }
  
    render(){
        return(
            
                // <h1>Create Question</h1>
                 /* <form onSubmit={this.handleSubmit}>
             <textarea required rows="5" ref={(input)=>this.getQuestion=input} cols="28" placeholder="Enter the question" /> <br/>
             <input required type="text" ref={(input)=>this.getChoice1=input} placeholder="Enter choice 1" /> <br/>
             <input required type="text" ref={(input)=>this.getChoice2=input} placeholder="Enter choice 2" /> <br/>
             <button>Submit</button>
             </form>  */
             <div className="container">  
             <form id="contact" onSubmit={this.handleSubmit}>
             <h3>Poll</h3>
             <fieldset>
             <textarea required rows="5" ref={(input)=>this.getQuestion=input} cols="28" placeholder="Enter the question" /> <br/>
             </fieldset>
             <fieldset>
             <input required type="text" ref={(input)=>this.getChoice1=input} placeholder="Enter choice 1" /> <br/>
             </fieldset>
             <fieldset>
             <input required type="text" ref={(input)=>this.getChoice2=input} placeholder="Enter choice 2" /> <br/>
             </fieldset>
             <button name="submit" type="submit" data-submit="...Sending">Submit</button>
             <p className="copyright">Designed by Ritika Sahay</p>
         </form>
        
       </div>     
        );
    }

}
export default connect()(QuestionComponent) ;
