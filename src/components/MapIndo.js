import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataID from "@highcharts/map-collection/countries/id/id-all.geo.json";
import axios from 'axios'

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

// const getConfig = data => ({
//     title: {
//         text: ''
//       },
//       colorAxis: {
//         min: 0,
//         stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
//       },
    
//       series: [
//         {
//           mapData: mapDataID,
//           name: 'Indonesia',
//           data: data
//         }
//       ]
// });


class MapIndo extends React.Component {
    constructor() {
        super();
        this.state = {
          Options: {},
        }
      }
    componentDidMount(){
        this.getData();
    }
    
    getData = () => {
        
        axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
            .then(res=>{
                const dataProv = res.data
                let prov1 =[]
                const prov2 =[]
                const data1 =[]
                for(var i in dataProv){
                    prov1.push(dataProv[i].attributes)
                    prov2.push(prov1[i].Provinsi)
                    data1.push(prov1[i].Kasus_Posi)

                }
                prov2[0] = "Jakarta Raya"
                prov2[27] = "Bangka-Belitung"
                prov2[7] = "Yogyakarta"
                prov2[29] = "Irian Jaya Barat"
                var data2 = data1.map(nilai=>{
                    return {value:nilai}
                })
                console.log(data2)
                
                var prov3 = prov2.map(propinsi=>{
                    return {name:propinsi}
                })
                console.log(prov3)
                
                var data_prov = []
                for (let k = 0; k<prov3.length; k++){
                    data_prov.push({name:prov3[k].name, value:data2[k].value})
                }
                console.log(data_prov)
                
                this.setState({
                    Options:{
                        title: {
                            text: ''
                          },
                          mapNavigation: {
                            enabled: true,
                            buttonOptions: {
                                verticalAlign: 'bottom'
                            }
                        },
                          colorAxis: {
                            min: 0,
                            dataClasses: [
                                {from: 0, to: 75},
                                {from: 75,to: 150},
                                {from: 150,to: 225},
                                {from: 225}
                            ],
                            minColor:"#fadad7",
                            maxColor:"#b83b2f"
                          },
                          
                          series: [
                            {
                                mapData: mapDataID,
                                data: data_prov,
                                joinBy:'name',
                                keys:["name", "value"],
                                dataLabels: {
                                    enabled: true,
                                    color: '#FFFFFF',
                                    format: '{point.name}'
                                },
                                name: 'Positif',
                            }
                          ]
                    }
                })
            }
        )
    }
    render() {
      return (
        <div className="map-indo">
          <HighchartsReact
            options={this.state.Options}
            constructorType={'mapChart'}
            highcharts={Highcharts}
          />
        </div>
      );
    }
  }
export default MapIndo