jQuery(document).ready ($) ->
    $page = $('#pageMap')

    $page.on 'click', 'aside .icon', ->
        $(@).toggleClass 'checked'

    map = L.mapbox.map 'map', 'localadventures.map-bunqpdpm'
    imgPath = 'http://localadventures.co/images/adventures'

    for adventure in adventures
        description = adventure.description
        if !!adventure.hasImage
            description = "<img src='#{imgPath}/#{adventure.id}.jpg' alt=''/>#{description}"
        console.log description
        L.mapbox
            .markerLayer
                type: 'Feature',
                geometry:
                    type: 'Point'
                    coordinates: [adventure.location.lon, adventure.location.lat]
                properties:
                    title: adventure.name
                    description: description
                    'marker-size': 'medium'
                    'marker-color': '#F08166'
            .addTo map
