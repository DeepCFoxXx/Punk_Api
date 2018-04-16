var app = function () {
  var url = 'https://api.punkapi.com/v2/beers';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    var beersData = JSON.parse(request.responseText);
    renderList(beersData);
  });
  request.send();
};

window.addEventListener('load', app);
