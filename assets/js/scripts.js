const baseURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=7h8xjjyjyg7dytdr6pdp76kn";
let playerURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/players/";
let api_key = "/profile.json?api_key=7h8xjjyjyg7dytdr6pdp76kn";
let player_ID;






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
        let num = 0;

        data.forEach(function (d) {
            console.log(d);
            document.getElementById('player_data')
            const div = document.createElement('div')
            const outter = document.createElement('div')
            const select = document.createElement('button')
            const view = document.createElement('button')
            var player_ID = d.id
            select.className = 'player-select';
            select.innerHTML = "Select";
            outter.className = 'player-data';
            view.className = 'viewProfile';
            view.innerHTML = 'View Profile';
            div.className = 'items';
            div.innerHTML = "Name:" + " " + d.name +
                "<br>" + "Position:" + " " + d.type +
                "<br>" + "Height:" + " " + d.height +
                "<br>" + "Weight:" + " " + d.weight;
            document.getElementById('player_data').appendChild(outter);
            outter.appendChild(div);
            outter.appendChild(select);
            outter.appendChild(view);
            if (d.type == ['PR'] || d.type == ['L'] || d.type == ['BR'] || d.type == ['HO']) {
                outter.classList.add('forward');
            } else {
                outter.classList.add('back');
            };



            select.onclick = function () {
                if (num < 6) {
                    console.log(num)

                    const selPlayer = document.createElement("li")
                    const delPlayer = document.createElement('input')
                    const selPlayDiv = document.createElement('div')
                    selPlayer.className = 'selectedPlayer';
                    delPlayer.className = 'deletePlayer';
                    selPlayDiv.className = 'selPlayDiv';
                    selPlayer.innerHTML = d.name;
                    delPlayer.setAttribute('type', 'checkbox');
                    delPlayer.setAttribute('checked', 'checked');
                    document.getElementById("mySix").appendChild(selPlayer).appendChild(delPlayer);
                    document.getElementById('player_data').removeChild(outter);


                    delPlayer.onclick = function () {
                        document.getElementById("mySix").removeChild(selPlayer).removeChild(delPlayer);
                        document.getElementById('player_data').appendChild(outter);
                        outter.appendChild(div);
                        outter.appendChild(select);
                        outter.appendChild(view);
                        num--;
                    }
                    num++;
                    if (num == 6) {
                        $("#enough").modal('show');
                    }

                }


            }
            view.onclick = function () {
                console.log(player_ID)
                const fullPlayerURL = playerURL + player_ID + api_key;
                console.log(fullPlayerURL)

                var xhr = new XMLHttpRequest();

                xhr.open("GET", fullPlayerURL);
                xhr.send();

                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        (JSON.parse(this.responseText));
                        console.log(this.responseText)
                    }
                }

            }

        }
        );
    });
}






$(document).ready(function () {
    if (typeof Storage != "undefined") {
        if (!sessionStorage.getItem('openModal')) {
            $("#openModal").modal('show');
        }
        sessionStorage.setItem('openModal', true);
    }
});


function forwards() {
    var allPlayers = document.getElementsByClassName('player-data');
    for (i = 0; i < allPlayers.length; i++)
        allPlayers[i].style.display = '';
    var forwards = document.getElementsByClassName('back');
    for (i = 0; i < forwards.length; i++) {
        forwards[i].style.display = 'none';
    }
}

function backs() {
    var allPlayers = document.getElementsByClassName('player-data');
    for (i = 0; i < allPlayers.length; i++)
        allPlayers[i].style.display = '';
    var backs = document.getElementsByClassName('forward');
    for (i = 0; i < backs.length; i++) {
        backs[i].style.display = 'none';
    }
}


function allPlayers() {
    var allPlayers = document.getElementsByClassName('player-data');
    for (i = 0; i < allPlayers.length; i++)
        allPlayers[i].style.display = '';
    document.getElementById('openModal').style.display = 'hidden';
}




