import React, { Component } from 'react';

class SearchEngine extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="search-engine">
        <div className="is-inline">
          <span className="radio">
              <input type="radio" name="type-group" id="facil"/>
              <label htmlFor="facil">Fácil</label>
          </span>
          <span className="radio">
              <input type="radio" name="type-group" id="vbi"/>
              <label htmlFor="vbi">VBI</label>
          </span>
          <span className="radio">
              <input type="radio" name="type-group" id="facial"/>
              <label htmlFor="facial">Facial</label>
          </span>
        </div>
        <div className="is-inline">
        <span className="checkbox">
              <input type="checkbox" name="flight-group" id="only-departure"/>
              <label htmlFor="only-departure">Somente ida</label>
          </span>
          <span className="checkbox">
              <input type="checkbox" name="flight-group" id="only-direct"/>
              <label htmlFor="only-direct">Somente voos diretos</label>
          </span>
          <span className="checkbox">
              <input type="checkbox" name="flight-group" id="executive-class"/>
              <label htmlFor="executive-class">Classe Executiva</label>
          </span>
        </div>
        <div className="is-inline-input">
          <div className="search-engine-input">
            <label htmlFor="origem">Origem</label>
            <input type="text" name="" id="origem"/>
          </div>
          <div className="search-engine-input">
            <label htmlFor="destino">Destino</label>
            <input type="text" name="" id="destino"/>
          </div>
          <div className="search-engine-input">
            <label htmlFor="ida">Ida</label>
            <input type="text" name="" id="ida"/>
          </div>
          <div className="search-engine-input">
            <label htmlFor="volta">Volta</label>
            <input type="text" name="" id="volta"/>
          </div>
          <div className="search-engine-input">
            <button className="search-button" type="button">Buscar</button>
          </div>
        </div>

        <div className="is-inline-input">
          <label htmlFor="adultos" className="sr-only">Adultos</label>
          <span className="select">
              <select name="" id="adultos">
                  <option value="1">1 Adulto</option>
                  <option value="2">2 Adultos</option>
                  <option value="3">3 Adultos</option>
                  <option value="4">4 Adultos</option>
                  <option value="5">5 Adultos</option>
              </select>
          </span>

          <label htmlFor="criancas" className="sr-only">criancas</label>
          <span className="select">
              <select name="" id="criancas">
                  <option value="0">Sem crianças</option>
                  <option value="1">1 Criança</option>
                  <option value="2">2 Crianças</option>
                  <option value="3">3 Crianças</option>
                  <option value="4">4 Crianças</option>
                  <option value="5">5 Crianças</option>
              </select>
          </span>
        </div>
      </div>
    )
  }
}

export default SearchEngine;
