import React from 'react';
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs-2'; 
import './../css/home.css';



 class Result extends React.Component{
    

     render(){
         
                this.data= {
                    labels: [this.props.polls.choice1,this.props.polls.choice2],
                    datasets:[{

                      label:'Poll results',
                      data: [this.props.polls.choiceCount1,this.props.polls.choiceCount2] ,
                      backgroundColor:[
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)'
                       
                    ]
                  }]
                }
                console.log(this.data)

                  return (
        <div className="chart">
        <Bar
          data = {this.data}
          options = {
              { 
                  maintainAspectRatio: false,
                  legend: {
                    labels: {
                        fontColor: 'green',
                        fontSize: 40
                    }
                },
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 40,
                            fontColor: "green",
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 40,
                            fontColor: "green",
                        }
                    }]
                }
            }
          } />
      </div>
    )
        
     }
 }

  const mapStateToProps = (state) =>{
      return{
          polls : state
      }
  }
  export default connect(mapStateToProps)(Result);