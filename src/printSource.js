var system = require('system');

var url = system.args[1];

if (!url || url == '--help') {
    console.log("Usage: <docker-image-run> URL");
    phantom.exit();
}

var page = require('webpage').create();

page.open(url, function () {
    console.log(page.content);
    phantom.exit();
});
