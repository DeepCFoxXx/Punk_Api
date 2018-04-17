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

var renderList = function (beersObjects) {
  var mainDiv = document.getElementById('main');
  var list = document.createElement('ul');

  beersObjects.forEach(function (beer) {
    var li = createListItem(beer);
    list.appendChild(li);
  });
  mainDiv.appendChild(list);
};

window.addEventListener('load', app);
