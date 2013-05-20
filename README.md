Android Viewport Tester
=======================

A simple site for testing your web app on different Android device resolutions.

How to get started
-----------------------

Add the following lines to the top of your app's index.html file (or whatever the root html file is):

```javascript
<script type="text/javascript">
    if (parent && parent.document.getElementById("iframeUrl"))
    {
        window.onhashchange = function() {
                parent.document.getElementById("iframeUrl").value = window.location.href;
            };
    }
</script>
```

Navigate to http://citrrus.github.io/android-viewport-tester and enter the URL to your app in the 'App Root Url'
