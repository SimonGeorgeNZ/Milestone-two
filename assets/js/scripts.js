var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=7h8xjjyjyg7dytdr6pdp76kn", true);

xhr.send();