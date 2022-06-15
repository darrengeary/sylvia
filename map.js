// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2VhcnlkYXJyZW4iLCJhIjoiY2w0Ynk0Y3hxMDc3bzNkbzU2bjV2azJvbiJ9.q1czJ8iVb5wyXfixmNwtdA"
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-7.6221, 55.0836],
  zoom: 8,
})

map.on("load", () => {
  // Add a GeoJSON source with 3 points.
  map.addSource("points", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-7.6221, 55.0836],
          },
        },
      ],
    },
  })
  // Add a circle layer
  map.addLayer({
    id: "circle",
    type: "circle",
    source: "points",
    paint: {
      "circle-color": "#c69d66",
      "circle-radius": 8,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#fff",
    },
  })

  // Center the map on the coordinates of any clicked circle from the 'circle' layer.
  map.on("click", "circle", (e) => {
    map.flyTo({
      center: e.features[0].geometry.coordinates,
    })
  })

  // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
  map.on("mouseenter", "circle", () => {
    map.getCanvas().style.cursor = "pointer"
  })

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "circle", () => {
    map.getCanvas().style.cursor = ""
  })
})
