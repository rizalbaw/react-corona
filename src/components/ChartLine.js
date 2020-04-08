import React, {Component} from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ChartLine extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
      componentDidMount() {
        axios.get(`https://api.covid19api.com/country/indonesia/status/confirmed/live`)
          .then(res => {
            const grafpos = res.data;
            console.log(grafpos)
            let datapos = [];
            let tanggal = [];
            let tanggal1 = [];
            grafpos.forEach(element => {
              datapos.push(element.Cases);
              tanggal.push(element.Date);
            });
            for(var i in tanggal){
              tanggal1[i]=tanggal[i].substring(0,10);
            }
            this.setState({ 
              Data: {
                labels: tanggal1,
                datasets:[
                   {
                      label:'Positif',
                      data: datapos ,
                      backgroundColor: "rgba(78, 115, 223, 0.05)",
                      borderColor: "rgba(78, 115, 223, 1)",
                      pointRadius: 2,
                      pointBackgroundColor: "rgba(78, 115, 223, 1)",
                      pointBorderColor: "rgba(78, 115, 223, 1)",
                      pointHoverRadius: 2,
                      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                      pointHitRadius: 10,
                      pointBorderWidth: 2,
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
        <div className="mx-auto" style={{width:"100%"}}>
          <Line
            data={this.state.Data}
            height={600}
            options={
              {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0
                    }
                }
                , scales: {
                    xAxes: [ {
                        time: {
                            unit: 'date'
                        }
                        , gridLines: {
                            display: false,
                            drawBorder: false
                        }
                        , ticks: {
                            maxTicksLimit: 14
                        }
                    }
                    ],
                }
                , legend: {
                    display: false
                }
                , tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    intersect: false,
                    mode: 'index',
                    caretPadding: 10,
                }
            }
            } />
        </div>
      )
   }
}