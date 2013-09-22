(($) ->

    modalOptions =
        cssIn: {opacity: 0, top: '45%'}
        animIn: [{opacity: 1, top: '50%'}, 200]
        animOut: [{opacity: 0, top: '55%'}, 400]

    $.alert = (options) ->
        options = title: options if typeof(options) is 'string'
        $.extend options, modalOptions
        options.type = $.trim "#{options.type ? ''} alert"
        new Skylite options

    $.confirm = (options) ->
        $.extend options, modalOptions
        options.type = 'confirm'
        unless options.actions? and Object.keys(options.actions).length > 1
            options.actions = $.extend {cancel: (-> true)}, options.actions
        new Skylite options

    $.location = (url) ->
        $('body').addClass 'busy'
        document.location = url

) jQuery

jQuery(document).ready ($) ->
    $body = $('body')

    # Flash messages
    $flash = $('#flash')
    $('<a>').addClass('btn icon dismiss').text('Dismiss').appendTo($flash).click ->
        $flash.slideUp 400, -> $flash.remove()
