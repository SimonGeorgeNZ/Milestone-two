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


function createPlayerElements() {
    getData(function (data) {
        data = data.players;

        data.forEach(function (d) {
            console.log(d);
            document.getElementById('player_data');
            const div = document.createElement('div');
            const outter = document.createElement('div');
            const select = document.createElement('button');
            select.className = 'player-select';
            select.innerHTML = "Select";
            outter.className = 'player-data'
            div.className = 'items';
            div.innerHTML = "Name:" + " " + d.name +
                "<br>" + "Position:" + " " + d.type +
                "<br>" + "Height:" + " " + d.height +
                "<br>" + "Weight:" + " " + d.weight;
            document.getElementById('player_data').appendChild(outter);
            outter.appendChild(div);
            outter.appendChild(select);
        });
    });
}


$(document).ready(function() {
    $("#openModal").modal('show');
});

    


