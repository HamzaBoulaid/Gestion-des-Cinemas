import React, { Component } from 'react'
import axios from 'axios'
import Salle from './Salle'

export default class Cinema extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cinema:null,
             nombreSalles:0,
             salles:[],
             date: new Date().toISOString().substr(0, 10)
        }
    }

    updateState() {
        let cine = this.props.cinema;
        this.setState({
            cinema:cine,
            nombreSalles:cine.nombreSalles,
            date: this.props.date
        }, ()=>{
            this.getSalles();
        })
    }
    
    componentDidMount() {
        this.updateState();
    }
    
    componentDidUpdate(prevProps, prevState) {

        if(prevProps === undefined || this.state.cinema==null) {
            return false
        }

        if(this.state.cinema.id !== this.props.cinema.id || this.state.date !== this.props.date) {
            this.updateState();
        }
    }

    getSalles() {
        let url = "http://localhost:8085/client/cinemas/"+this.state.cinema.id+"/salles";
        axios.get(url).then((resp) => {
            //console.log(resp.data);
            this.setState({
                salles:resp.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if(this.state.salles == null) {
            return (
                <div className="row"></div>
            )
        }
        return (
            <div>
                <div className="row">
                    {
                        this.state.salles.map((s, index) => 
                            <Salle salle={s} numero={index+1} key={index} date={this.state.date}/>
                        )                        
                    }
                </div>
            </div>
        )
    }
}
