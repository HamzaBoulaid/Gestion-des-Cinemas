import React, { Component } from 'react'
import axios from 'axios'
import City from './City'
import CarouselPage from './CarouselPage'


export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            listCities:[1,2,3],
            currentCity:null,
            date: new Date().toISOString().substr(0, 10)
        }
    }

    componentDidMount() {
        this.getCities();
    }
    
    getCities() {
        let url = "http://localhost:8085/client/villes";
        axios.get(url).then((resp) => {
            //console.log(resp.data);
            this.setState({
                listCities:resp.data,
                currentCity:resp.data[0]
            })
        }).catch(err => {
            console.log(err);
        })
    }

    handleChange = (event) => {
        let city = this.state.listCities.find(obj => {
            return obj.id == event.target.value;
        })
        this.setState({
            currentCity: city
        })
    }

    dateChange = (event) => {
        let d = event.target.value;
        this.setState({
            date:d
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <CarouselPage/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-3">
                    <h3 className="text-info">Cinema Hub is here for you</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label><strong>Select City</strong></label>
                            <select className="form-control" name="select" onChange={this.handleChange}>
                                {
                                    this.state.listCities.map((city, index) => 
                                        <option key={index} value={city.id}>{city.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-auto">
                        <form>
                            <div className="form-group">
                                <label><strong>Select Date</strong></label>
                                <input type="date" className="form-control" id="date"
                                        defaultValue={this.state.date}
                                        onChange={this.dateChange}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-3">
                        {
                            this.state.currentCity==null?"..." : 
                                <City city={this.state.currentCity} date={this.state.date}/>
                        }
                    </div>
                </div>
        
            </div>
        )
    }
}
