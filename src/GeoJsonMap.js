// @flow

import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import parcel_info from './assets/18102019.json';


export default class geoJSON extends Component<{}, State> {
    state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 12,
    }
  
    geoJSONStyle() {
      return {
        color: '#1f2021',
        weight: 1,
        fillOpacity: 0.5,
        fillColor: '#fff2af',
      }
    }
  
    onEachFeature(feature: Object, layer: Object) {
      const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
      layer.bindPopup(popupContent)
    }
  
    render() {
      const position = [this.state.lat, this.state.lng]
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={parcel_info}
            style={this.geoJSONStyle}
            onEachFeature={this.onEachFeature}
          />
        </Map>
      )
    }
  }