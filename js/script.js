// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    var processParams, pushState, refreshIFrame, updateResolution, updateiFrameUrl;

    updateResolution = function() {
      var dev, landscape, res, resX, resY;

      dev = $("#deviceContainer");
      landscape = $("#landscape")[0].checked;
      res = $("#resolution").val();
      resX = res.split("x")[(landscape ? 1 : 0)];
      resY = res.split("x")[(landscape ? 0 : 1)];
      dev.css("width", resX);
      dev.css("height", resY);
      pushState();
      return false;
    };
    processParams = function() {
      var url;

      url = $.url(window.location.href);
      if (url.param("resolution")) {
        $("#resolution").val(url.param("resolution"));
      } else {
        $("#resolution").val("480x800");
      }
      if (url.param("landscape")) {
        $("#landscape")[0].checked = true;
      } else {
        $("#landscape")[0].checked = false;
      }
      $("#appRoot").val(url.param("appRoot"));
      if (url.param("appRoot")) {
        return updateiFrameUrl();
      }
    };
    updateiFrameUrl = function() {
      var device;

      device = $("#device");
      device.attr("src", $("#appRoot").val());
      return pushState();
    };
    refreshIFrame = function() {
      var device;

      device = $("#device")[0];
      return device.contentWindow.location.reload(true);
    };
    pushState = function() {
      return history.pushState("", "", "index.html?" + ($("form").serialize()));
    };
    $("#resolution").change(function() {
      updateResolution();
      return pushState();
    });
    $("#landscape").change(function() {
      updateResolution();
      return pushState();
    });
    $("#appRoot").change(function() {
      updateiFrameUrl();
      return pushState();
    });
    $("#refresh").click(refreshIFrame);
    processParams();
    return updateResolution();
  });

}).call(this);
