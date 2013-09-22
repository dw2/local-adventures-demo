jQuery(document).ready ($) ->
    $page = $('#pageMap')

    $page.on 'click', 'aside .icon', ->
        $(@).toggleClass 'checked'

    map = L.mapbox.map 'map', 'localadventures.map-bunqpdpm'

    for adventure in adventures
        console.log adventure
        L.mapbox.markerLayer(
            type: 'Feature',
            geometry:
                type: 'Point'
                coordinates: [adventure.location.lon, adventure.location.lat]
            properties:
                title: adventure.name
                description: adventure.description
                'marker-size': 'medium'
                'marker-color': '#F08166'
        ).addTo map
