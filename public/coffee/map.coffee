jQuery(document).ready ($) ->
    $page = $('#pageMap')

    $page.on 'click', 'aside .icon', ->
        $(@).toggleClass 'checked'
