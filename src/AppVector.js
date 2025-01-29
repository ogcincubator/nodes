import './App.css'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import nodes from './nodes.json'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function AppVector() {
  return (
    <div className="App">
      <MapContainer
        className="full-screen-map"
        center={[13.0170646,41.7061147]}
        zoom={3}
        minZoom={1}
        maxZoom={20}
        maxBounds={[[-85.06, -180], [85.06, 180]]}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>; this map uses the <a href="https://github.com/opengeospatial/poi">POI</a> Standard Candidate'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        <MarkerClusterGroup>
          {nodes.features.map((node, index) => (
            <Marker
              key={node.id}
              position={[node.geometry.coordinates[1], node.geometry.coordinates[0]]}
            >
              <Popup>
                {node.properties.name.name}
                <br/>
                <a href={node.properties.hasMetadata.href}>{node.properties.hasMetadata.href}</a>
              </Popup>
            </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default AppVector;
