var endpoint = "https://jsonbox.io/box_55a7d24f8988a1cbd065";

function fetchJSON(a) {
    var f = new XMLHttpRequest;
    f.open("GET", a, false);
    f.send(null);
    return f.responseText
}

function isURL(a) {
    let url = a
    if (!a.startsWith("javascript:")) {
        return true;
    } else {
        return false;
    }
}
var hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
    var res = JSON.parse(fetchJSON(endpoint + "/?q=s:" + hashh))[0];
    var data = res["l"];
    console.log(data);
    if (data != null) {
        if (isURL(data)) {
            window.location.href = data;
        }
    }
}
