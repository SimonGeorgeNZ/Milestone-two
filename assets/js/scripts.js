const baseURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=7h8xjjyjyg7dytdr6pdp76kn";

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

getData();


function createPlayerElements() {
    getData(function (data) {
        data = data.players;

        data.forEach(function () {
            document.getElementById('player_data');
            var div = document.createElement('div');
            div.className = 'items';
            document.getElementById('player_data').appendChild(div);
        });
    });
}









