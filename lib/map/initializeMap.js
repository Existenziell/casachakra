export function initializeMap(mapboxgl, map) {

  map.on("click", "data", function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["data"],
    })
    // var clusterId = features[0].properties.cluster_id
    // map
    //   .getSource("dcmusic.live")
    //   .getClusterExpansionZoom(clusterId, function (err, zoom) {
    //     if (err) return
    //     map.easeTo({
    //       center: features[0].geometry.coordinates,
    //       zoom: zoom,
    //     })
    //   })
  })

  map.on("click", "unclustered-point", function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice()
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }

    const html = `
      <h2 style="font-size: 20px; margin-bottom: 20px;">${e.features[0].properties.title}</h2>
      <img src="/yoga/miel.jpg" style="margin-bottom: 20px;"/>
      <p>El Cedral – Cozumel, México</p>
      <p>Tel: +52 1 32 21 40 00 60</p>
    `
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(html)
      .addTo(map)
  })

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  )

  map.on("mouseenter", "data", function () {
    map.getCanvas().style.cursor = "pointer"
  })
  map.on("mouseleave", "data", function () {
    map.getCanvas().style.cursor = ""
  })
}
