const baseURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=7h8xjjyjyg7dytdr6pdp76kn";

function getData(type, cb) {
    var xhr = new XMLHttpRequest()

    xhr.open("GET", baseURL)
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    getData(type, function (data) {
        data = data.players;

        data.forEach(function (item) {
            document.getElementById("data").innerHTML += "<p>" + item.name + 
            "<br>" + item.type +
            "<br>" + item.height +
            "<br>" + item.weight + "</p>";
        })
    });
}




