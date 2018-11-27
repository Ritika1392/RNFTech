import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../css/instruction.css';
class HomeComponenct extends React.Component{

    render()
    {
        return(
        <div>  
        <h1> Instructions </h1>
        <div className="instruction">
  <ol>
    <li><p>Create question for the poll . By selecting "create poll" and then submit two choices. </p></li>
    <li><p>Vote by clicking on the vote link and then double click the option you want to choose.</p></li>
    <li><p>See results by clicking on the Results. </p></li>
  </ol> 
</div>
        </div>
      );
    }

}

export default HomeComponenct;