import React, { Component } from 'react';
import Axios from 'axios';
import { ApiKey } from '../apiKey';
import './App.css';
import SearchEngine from './SearchEngine';
import ListCars from './ListCars';

const API = `https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=${ApiKey}`;

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        location: '',
        pick_up: '',
        drop_off: '',
        lang: '',
        currency: '',
        provider: '',
        rate_class: '',
        rate_plan: '',
        rate_filter: '',
        vehicle: '',
        cars: [],
        isLoading: false,
        error: null,
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidCatch() {}
    componentDidMount() {}
    componentWillMount() {}

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value})
  }

    handleSearch() {
        this.setState({isLoading: true});

        const location = this.state.location;
        const pickUp = this.state.pick_up;
        const dropOff = this.state.drop_off;
        const lang = this.state.lang;
        const currency = this.state.currency;
        const provider = this.state.provider;
        const rateClass = this.state.rate_class;
        const ratePlan = this.state.rate_plan;
        const rateFilter = this.state.rate_filter;
        const vehicle = this.state.vehicle;

        Axios.get(`${API}&location=${location}&pick_up=${pickUp}&drop_off=${dropOff}`)
            .then(response => this.setState({
                    cars: response.data,
                    isLoading: false,
                })
            )
    }

    render(){
        const { cars, isLoading, error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return (
            <section>
              <SearchEngine
                location={this.state.location}
                pickUp={this.state.pick_up}
                dropOff={this.state.drop_off}

                handleChange={this.handleChange}
                handleSearch={this.handleSearch}/>

              <ListCars
                cars={this.state.cars} />
            </section>
        );
    }
}


export default App;
