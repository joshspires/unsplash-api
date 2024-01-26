function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var data = new XMLHttpRequest();
data.open('GET', 'https://api.unsplash.com/users/drone_nr/statistics?client_id=9ba78e5500cbb3dd5bf9274fe22900a3db670d1283a0d2939c9a78478286d4fd');
data.onload = function() {
 var stats = JSON.parse(data.responseText);
 console.log(stats);
    var viewsWrap = document.getElementById('views');
    viewsWrap.innerHTML = numberWithCommas(stats.views.total) + ' views';
    var downloadsWrap = document.getElementById('downloads');
    downloadsWrap.innerHTML = numberWithCommas(stats.downloads.total) + ' downloads';
    var vmonthsWrap = document.getElementById('vmonths');
    vmonthsWrap.innerHTML = '+' + numberWithCommas(stats.downloads.historical.change) + ' since last month';
    var dmonthsWrap = document.getElementById('dmonths');
    dmonthsWrap.innerHTML = '+' + numberWithCommas(stats.views.historical.change) + ' since last month';
};
data.send();

}
