# Code Sprint

This project uses
[React Leaflet](https://react-leaflet.js.org/) and [react-leaflet-cluster](https://github.com/akursat/react-leaflet-cluster) to show marker clustering of code sprint nodes on a map.

The actual [data](./src/nodes.json) it is a GeoJSON encoding of the [OGC Points of Interest (PoI)](https://github.com/opengeospatial/poi) candidate Standard.

## Quickstart

No magic here; just your usual npm sequence:

```shell
npm install
npm start
```

Once you start the development server, the site will be available at:

`http://localhost:3000/sprints/nodes`

The hot reload will ensure that the changes you do on the code will be reflected on the browser.

### Note about Publishing the Website

Commit all your changes to the `master` branch. **The `gh-pages` branch will be wiped each time, and generated dynamically from these [GitHub actions](https://github.com/ogcincubator/nodes/actions)**, which create a static build. In a nutshell, **you don't need to do anything to publish the website** - the republish will be triggered automatically with each push to `master`.

## Contributing 🤝

This website is a live project and we welcome contributions from the community! If you have suggestions for improvements, found a bug, or want to add new features, feel free to:

* Open an [issue](https://github.com/ogcincubator/nodes/issues) to start a discussion
* Submit a [pull request](https://github.com/ogcincubator/nodes/pulls) with your proposed changes

We appreciate your support in making this website better!


## Live

See it live here: https://developer.ogc.org/sprints/nodes

## License

This project is published under a [MIT License](./LICENSE)