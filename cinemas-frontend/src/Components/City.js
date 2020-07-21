import React, { Component } from 'react'
import Cinema from './Cinema'

export default class City extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            city:null,
            cinemas:[],
            currentCinema:null,
            date: new Date().toISOString().substr(0, 10)
        }
    }

    updateState() {
        let cines = this.props.city.cinemas;
        this.setState({
            city:this.props.city,
            cinemas:cines,
            currentCinema:cines[0],
            date:this.props.date
        })
    }

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps === undefined || this.state.city==null) {
            return false
        }

        if(this.state.city.id !== this.props.city.id || this.state.date !== this.props.date) {
            this.updateState();
        }
     }

    setCurrentCinema(cine) {
        this.setState({
            currentCinema:cine
        })
    }
    
    render() {
        return (
            <div className="card">
                
                <div className="card-header">
                    <h5>
                        Cinemas List 
                    </h5>
                    <div className="nav nav-pills card-header-pills mt-3 btn-group">
                    {
                        this.state.cinemas.map((cinema, index) => 
                            <button key={index} onClick={()=>this.setCurrentCinema(cinema)}
                                className={cinema===this.state.currentCinema?
                                    "btn btn-info text-center m-1":
                                    "btn btn-secondary text-center m-1"}>
                                {cinema.name}
                            </button>
                        )
                    }
                    </div>
                </div>
                <div className="card-body">
                    {
                        this.state.cinemas.length > 0 ? '' : <h5>Cette ville ne contient pas de cinéma pour l'instant</h5>
                    }
                    <div className="row mt-4">
                        {
                            this.state.currentCinema==null?"":
                                <Cinema cinema={this.state.currentCinema} date={this.state.date}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
