import React from 'react';
import {connect} from 'react-redux';
import './../css/vote.scss';
 
 class DisplayPoll extends React.Component{


    handleOptionChange = (e) => {

        console.log("In handle change");
        e.preventDefault();
        this.choice = e.target.value;
        console.log(e.target)
      };

    handleSubmit = (e) => {
        console.log("In handle submit");
        e.preventDefault();


        if(this.choice === "choice1")
        {
            this.props.polls.choiceCount1 = this.props.polls.choiceCount1+1;
        }
        else
        {
            this.props.polls.choiceCount2 = this.props.polls.choiceCount2+1;   
        }
        const data = this.props.polls;
        this.props.dispatch({
            type:'VOTE',
            data});
            
        }


     render(){
         return(
             <div >
                 {/* <form className ="form" onSubmit={this.handleSubmit}>
                    <h2>{this.props.polls.question}</h2>
                    <div class="inputGroup">
                        <input type="radio"  id="choice1" name="choice1" value="choice1" onChange={this.handleOptionChange}/>
                        <label for="choice1">{this.props.polls.choice1} </label>
                    </div>

                    <div class="inputGroup">
                        <input type="radio"  id="choice2" name="choice2" value="choice2"  onChange={this.handleOptionChange}/> 
                        <label for="choice2"> {this.props.polls.choice2}</label>
                    </div>

                    <button>Submit</button>
                </form> */}
                <form className ="form" onSubmit={this.handleSubmit}>
                    <div class="container">
                        <h2>{this.props.polls.question}</h2>
                        <ul className="list">
                            <li className="list__item">
                                <input type="radio" className="radio-btn" name="choice" id="a-opt" value="choice1" onChange={this.handleOptionChange}/>
                                <label for="a-opt" className="label">{this.props.polls.choice1} </label>
                            </li>
                
                            <li className="list__item">
                                <input type="radio" className="radio-btn" name="choice" id="b-opt" value="choice2"  onChange={this.handleOptionChange}/>
                                <label for="b-opt" className="label">{this.props.polls.choice2}</label>
                            </li>
                
                        </ul>
                    </div>
                    <button className="btn" name="submit" type="submit" data-submit="...Sending">Submit</button>
                </form>

            </div>

           
// {/* <form onSubmit={this.handleSubmit}>
// <div class="radio">
// <label><input type="radio" name="choice" onChange={this.handleOptionChange} checked/>{this.props.polls.choice1}</label>
// </div>
// <div class="radio">
// <label><input type="radio" name="choice" onChange={this.handleOptionChange}/>{this.props.polls.choice2}</label>
// </div>
// <button type="button" class="btn btn-primary btn-md">Submit</button>
// </form> */}

);
     }
 }

  const mapStateToProps = (state) =>{
      return{
          polls : state
      }
  }
  export default connect(mapStateToProps)(DisplayPoll);