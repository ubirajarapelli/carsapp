import React, { Component } from 'react';
import Axios from 'axios';
import { ApiKey } from '../apiKey';
import './App.css';
import SearchEngine from './SearchEngine';

const API = `https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=${ApiKey}`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location,
            pick_up,
            drop_off,
            lang,
            currency,
            provider,
            rate_class,
            rate_plan,
            rate_filter,
            vehicle,
            payload: [],
            isLoading: false,
            error: null,
        }
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentDidMount() { }
    
    componentWillMount() {}
    
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
                    flights: response.data,
                    isLoading: false,
                })
            )  
    }


    render(){
        const { payload, isLoading, error } = this.state;

        const renderItens = () => {
            const itensList = payload || [];
            return itensList.map(item => (
                <div>
                    {item.portas}
                    {item.passageiros}
                    {item.portaMalas}
                    {item.arCondicionado}
                    {item.transmissao}
                    {item.direcao}
                    {item.vidroEletrico}
                    {item.multimedia}
                    {item.radio}
                </div>
            ))
        }

        const renderCars = () => {
            const carsList = payload || [];

            return carsList.map(list => (
                <article className="product">
                    {list.titulo}
                    {list.codigoTaxa}
                    {list.urlImagem}
                    {list.detalhes}
                    {list.marcas}
                    {list.valorTotal}
                    {list.porcentagemDesconto}
                    {list.porcentagemDesconto}
                    {list.qtdParcelas}
                    {list.marca}
                    {list.favorito}
                    {renderItens()}
                    <button>Reservar</button>
                </article>
            ))
        }

        if (error) {
            return <div>{error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return (
            <section>
              <SearchEngine/>
              {renderCars()}
            </section>
        );
    }
}


export default App;
