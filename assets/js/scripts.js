const baseURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=ffeptjub472nfnf8ywnnyrf4";
let playerURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/players/";
let api_key = "/profile.json?api_key=ffeptjub472nfnf8ywnnyrf4";
let player_ID;
let playerDetails;





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
            console.log(d)
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
            view.id = player_ID;
            view.innerHTML = 'View';
            div.className = 'items';
            view.onclick = (getPlayerData)
            div.innerHTML = "Name:" + " " + d.name +
                "<br>" + "Position:" + " " + d.type +
                "<br>" + "Height:" + " " + d.height + " " + "cm" +
                "<br>" + "Weight:" + " " + d.weight + " " + "kg";
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


        }
        );
    });
}



function getPlayerData() {

    const fullPlayerURL = playerURL + this.id + api_key;
    console.log(fullPlayerURL);
    console.log(this.id);
    var xhr = new XMLHttpRequest();

    xhr.open("GET", fullPlayerURL);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            p = JSON.parse(this.responseText);
            console.dir(p.roles[0])
            document.querySelector('#playerProfileName').textContent = p.player.name;
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:59616") {
                    //Rugby World Cup 2019
                    document.querySelector('#RWC2019games').textContent = "RWC 2019 matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#RWC2019tries').textContent = "RWC 2019 tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#RWC2019yellow').textContent = "RWC 2019 yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#RWC2019red').textContent = "RWC 2019 red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#RWC2019penalty').textContent = "RWC 2019 penalty goals:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#RWC2019conversions').textContent = "RWC 2019 conversions:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }

            }
            //Super Rugby 2019
            document.querySelector('#superTeam').textContent = "Current super rugby team:" + " " + p.roles[0].competitor.name
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:59620") {
                    document.querySelector('#superGames').textContent = "Super 2019 matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#superTries').textContent = "Super 2019 tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#SuperYellow').textContent = "Super 2019 yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#superRed').textContent = "Super 2019 red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#superPenatly').textContent = "Super 2019 penalty goals:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#superConversions').textContent = "Super 2019 conversions:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }
            }
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:67631") {
                    document.querySelector('#RC2019Games').textContent = "Rugby Championship 2019 matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#RC2019Tries').textContent = "Rugby Championship 2019 tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#RC2019Yellow').textContent = "Rugby Championship 2019 yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#RC2019Red').textContent = "Rugby Championship 2019 red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#RC2019conversions').textContent = "Rugby Championship 2019 conversions:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#RC2019Penalty').textContent = "Rugby Championship 2019 penalty goals:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }
            }


        }

    };

}





$(document).ready = function () {
    if (typeof Storage != "undefined") {
        if (!sessionStorage.getItem('openModal')) {
            $("#openModal").modal('show');
        }
        sessionStorage.setItem('openModal', true);
    }
};


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




