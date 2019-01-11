import React, { Component } from 'react';

export default props => (
  <div className="search-engine">
    <div className="is-inline-input">
      <div className="search-engine-input">
        <label htmlFor="local">Local</label>
        <input type="text" name="location" id="local"
          onChange={props.handleChange}
          value={props.location} />
      </div>
      <div className="search-engine-input">
        <label htmlFor="ida">Ida</label>
        <input type="text" name="pick_up" id="ida"
          onChange={props.handleChange}
          value={props.pick_up} />
      </div>
      <div className="search-engine-input">
        <label htmlFor="volta">Volta</label>
        <input type="text" name="drop_off" id="volta"
          onChange={props.handleChange}
          value={props.drop_off} />
      </div>
      <div className="search-engine-input">
        <button className="search-button" type="button" onClick={props.handleSearch}>Buscar</button>
      </div>
    </div>
  </div>
)
