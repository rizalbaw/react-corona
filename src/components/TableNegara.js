import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/css/jquery.dataTables.css'
import 'datatables.net-bs/css/dataTables.bootstrap.css'

var $ = require('jquery')
$.Datatable = require('datatables.net')

export default class TableNegara extends Component {
    state ={
        data:null
    }
    componentDidMount() {
        axios.get('https://api.kawalcorona.com/')
        .then(res => {
            const negara = res.data
            let negara1 = []
            for (var i in negara){
                negara1.push(negara[i].attributes)
            }
            console.log(negara1)
            this.$el = $(this.el)
            this.$el.DataTable({
                data:negara1,
                columns:[
                    {title:"Negara", data:"Country_Region"},
                    {title:"Positif", data:"Confirmed"},
                    {title:"Meninggal", data:"Deaths"},
                    {title:"Sembuh", data:"Recovered"}
                ]
            })
        })
        
        
    }
    render(){
        return (
            <div>
                <table className="display" width="100%" ref={el => this.el = el}></table>
            </div>
        )
    }
    
}


