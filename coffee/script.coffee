$ ->
    updateResolution = ->
        dev = $("#deviceContainer")
        landscape = $("#landscape")[0].checked
        res = $("#resolution").val()

        resX = res.split("x")[((if landscape then 1 else 0))]
        resY = res.split("x")[((if landscape then 0 else 1))]

        dev.css "width", resX
        dev.css "height", resY

        pushState()

        false

    processParams = ->
        url = $.url(window.location.href)

        if url.param("resolution") then $("#resolution").val url.param "resolution" else $("#resolution").val "480x800"
        if url.param("landscape") then $("#landscape")[0].checked = true else $("#landscape")[0].checked = false
        $("#appRoot").val url.param "appRoot"
        updateiFrameUrl() if url.param "appRoot"

    updateiFrameUrl = ->
        device = $ "#device"
        device.attr "src", $("#appRoot").val()
        pushState()

    pushState = ->
        history.pushState "", "", "index.html?#{$("form").serialize()}"        

    $("#resolution").change ->
        updateResolution()
        pushState()

    $("#landscape").change ->
        updateResolution()
        pushState()

    $("#appRoot").change ->
        updateiFrameUrl()
        pushState()

    $("#refresh").click updateiFrameUrl

    processParams()
    updateResolution()



