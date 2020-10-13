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

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
wait(250);  //0.25 seconds in milliseconds
var hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
    // wait(250);  //0.25 seconds in milliseconds
    var res = JSON.parse(fetchJSON(endpoint + "/?q=s:" + hashh))[0];
    // ---- FIX BY MATT BEGIN -----///
    // This fix allows a wait time if JSON was not found. It gives two opportunities.
    //Opportunity 1
    if (res == null) {
        wait(500);  //0.5 seconds in milliseconds
        var res = JSON.parse(fetchJSON(endpoint + "/?q=s:" + hashh))[0];
    }
    //Opportunity 2
    if (res == null) {
        wait(1000);  //1 second in milliseconds
        var res = JSON.parse(fetchJSON(endpoint + "/?q=s:" + hashh))[0];
    }
    // ---- FIX BY MATT END -----///

    var data = res["l"];
    console.log(data);
    // wait(250);  //0.25 seconds in milliseconds
    if (data != null) {
        if (isURL(data)) {
            window.location.href = data;
        }
    }
}
