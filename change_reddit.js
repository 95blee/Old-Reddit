function change_reddit() {
    var url = window.location.href;
    var re = /https?:\/\/www.reddit.com\/?(.*)/;
    var matcher = url.match(re);
    if (matcher) {
        var path = matcher[1];
        window.location = "https://old.reddit.com/" + path;
    }
}
change_reddit();