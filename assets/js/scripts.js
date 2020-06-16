const baseURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4227/profile.json?api_key=ffeptjub472nfnf8ywnnyrf4";
let playerURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/rugby/trial/v2/union/en/players/";
let api_key = "/profile.json?api_key=ffeptjub472nfnf8ywnnyrf4";
let player_ID;
let combinedData;
let playerArray = [];
let fullPlayerList = [];
let newID;
let weight = [];

let super20Games = []; let super20Tries = []; let super20Yellow = []; let super20Red = []; let super20Pentalies = []; let super20Conversions = [];
let super19Games = []; let super19Tries = []; let super19Yellow = []; let super19Red = []; let super19Penalties = []; let super19Conversions = [];
let RWCGames = []; let RWCTries = []; let RWCYellow = []; let RWCRed = []; let RWCPenalites = []; let RWCConversions = [];
let RCGames = []; let RCTries = []; let RCYellow = []; let RCRed = []; let RCPenalties = []; let RCConversions = [];

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
            player_ID = d.id

            fullPlayerList.push(d.name);
            select.className = 'player-select';
            select.innerHTML = "Select";

            select.id = d.name;
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
                    selPlayer.className = 'selectedPlayer';
                    delPlayer.className = 'deletePlayer';
                    const inTheList = document.createElement("li")
                    inTheList.className = 'abtextplain'
                    inTheList.innerHTML = d.name;
                    document.getElementById("combinedNames").appendChild(inTheList)
                    selPlayer.innerHTML = d.name;
                    delPlayer.setAttribute('type', 'checkbox');
                    delPlayer.setAttribute('checked', 'checked');
                    document.getElementById("mySix").appendChild(selPlayer).appendChild(delPlayer);
                    select.style.display = 'none'
                    num++;
                    playerArray.push(d.name)

                    newID = d.id;
                    var fullIndex = fullPlayerList.indexOf(d.name);
                    if (fullIndex > -1) {
                        fullPlayerList.splice(fullIndex, 1);
                    }
                    var arrayOfElements = document.getElementsByClassName('player-select')
                    if (num === 6) {
                        $("#enough").modal('show');
                        for (var i = 0; i < arrayOfElements.length; i++) {
                            arrayOfElements[i].style.display = 'none';

                        }
                    }


                    var combinedURL = playerURL + newID + api_key
                    var xhr = new XMLHttpRequest();
                    console.log(combinedURL)
                    xhr.open("GET", combinedURL);
                    xhr.send();

                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            a = (JSON.parse(this.responseText));



                            weight.push(a.player.weight)
                            //Super Rugby 2020
                            for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:73071") {
                                    super20Games.push(a.statistics.seasons[i].statistics.matches_played)
                                    super20Tries.push(a.statistics.seasons[i].statistics.tries)
                                    super20Yellow.push(a.statistics.seasons[i].statistics.yellow_cards)
                                    super20Red.push(a.statistics.seasons[i].statistics.red_cards)
                                    super20Pentalies.push(a.statistics.seasons[i].statistics.penalty_goals_successful)
                                    super20Conversions.push(a.statistics.seasons[i].statistics.conversions_successful)
                                }


                            } 
                            //Super Rugby 2019
                            for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:59620") {
                                    super19Games.push(a.statistics.seasons[i].statistics.matches_played)
                                    super19Tries.push(a.statistics.seasons[i].statistics.tries)
                                    super19Yellow.push(a.statistics.seasons[i].statistics.yellow_cards)
                                    super19Red.push(a.statistics.seasons[i].statistics.red_cards)
                                    super19Penalties.push(a.statistics.seasons[i].statistics.penalty_goals_successful)
                                    super19Conversions.push(a.statistics.seasons[i].statistics.conversions_successful)
                                }


                            }
                            //World Cup 2019
                            for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:59616") {
                                    RWCGames.push(a.statistics.seasons[i].statistics.matches_played)
                                    RWCTries.push(a.statistics.seasons[i].statistics.tries)
                                    RWCYellow.push(a.statistics.seasons[i].statistics.yellow_cards)
                                    RWCRed.push(a.statistics.seasons[i].statistics.red_cards)
                                    RWCPenalites.push(a.statistics.seasons[i].statistics.penalty_goals_successful)
                                    RWCConversions.push(a.statistics.seasons[i].statistics.conversions_successful)
                                }


                            }
                            // Rugby Championship 2019
                            for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:67631") {
                                    RCGames.push(a.statistics.seasons[i].statistics.matches_played)
                                    RCTries.push(a.statistics.seasons[i].statistics.tries)
                                    RCYellow.push(a.statistics.seasons[i].statistics.yellow_cards)
                                    RCRed.push(a.statistics.seasons[i].statistics.red_cards)
                                    RCPenalties.push(a.statistics.seasons[i].statistics.penalty_goals_successful)
                                    RCConversions.push(a.statistics.seasons[i].statistics.conversions_successful)
                                }


                            }


                        };


                        delPlayer.onclick = function () {
                            document.getElementById("mySix").removeChild(selPlayer).removeChild(delPlayer);
                            select.style.display = 'inline'
                            num--;
                            var index = playerArray.indexOf(d.name);
                            if (index > -1) {
                                playerArray.splice(index, 1);
                            }
                            fullPlayerList.push(d.name)
                            if (num === 5) {
                                for (i = 0; i < fullPlayerList.length; i++) {
                                    document.getElementById(fullPlayerList[i]).style.display = 'inline'
                                }
                            }
                            var weightIndex = weight.indexOf(a.player.weight);
                            if (weightIndex > -1) {
                                weight.splice(weightIndex, 1);
                            } // Super Rugby 2020
                            for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:73071") {
                                    var super20GamesIndex = super20Games.indexOf(a.statistics.seasons[i].statistics.matches_played);
                                    if (super20GamesIndex > -1) {
                                        super20Games.splice(super20GamesIndex, 1);
                                    }
                                    var super20TriesIndex = super20Tries.indexOf(a.statistics.seasons[i].statistics.tries);
                                    if (super20TriesIndex > -1) {
                                        super20Tries.splice(super20TriesIndex, 1);
                                    }
                                    var super20RedIndex = super20Red.indexOf(a.statistics.seasons[i].statistics.red_cards);
                                    if (super20RedIndex > -1) {
                                        super20Red.splice(super20RedIndex, 1);
                                    }
                                    var super20YellowIndex = super20Yellow.indexOf(a.statistics.seasons[i].statistics.yellow_cards);
                                    if (super20YellowIndex > -1) {
                                        super20Yellow.splice(super20YellowIndex, 1);
                                    }
                                    var super20ConversionIndex = super20Conversions.indexOf(a.statistics.seasons[i].statistics.conversions_successful);
                                    if (super20ConversionIndex > -1) {
                                        super20Conversions.splice(super20ConversionIndex, 1);
                                    }
                                    var super20PenaltiesIndex = super20Pentalies.indexOf(a.statistics.seasons[i].statistics.penalty_goals_successful);
                                    if (super20PenaltiesIndex > -1) {
                                        super20Pentalies.splice(super20PenaltiesIndex, 1);
                                    }

                                }
                            } // Super Rugby 2019
                             for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:59620") {
                                    var super19GamesIndex = super19Games.indexOf(a.statistics.seasons[i].statistics.matches_played);
                                    if (super19GamesIndex > -1) {
                                        super19Games.splice(super19GamesIndex, 1);
                                    }
                                    var super19TriesIndex = super19Tries.indexOf(a.statistics.seasons[i].statistics.tries);
                                    if (super19TriesIndex > -1) {
                                        super19Tries.splice(super19TriesIndex, 1);
                                    }
                                    var super19RedIndex = super19Red.indexOf(a.statistics.seasons[i].statistics.red_cards);
                                    if (super19RedIndex > -1) {
                                        super19Red.splice(super19RedIndex, 1);
                                    }
                                    var super19YellowIndex = super19Yellow.indexOf(a.statistics.seasons[i].statistics.yellow_cards);
                                    if (super19YellowIndex > -1) {
                                        super19Yellow.splice(super19YellowIndex, 1);
                                    }
                                    var super19ConversionIndex = super19Conversions.indexOf(a.statistics.seasons[i].statistics.conversions_successful);
                                    if (super19ConversionIndex > -1) {
                                        super19Conversions.splice(super19ConversionIndex, 1);
                                    }
                                    var super19PenaltiesIndex = super19Pentalies.indexOf(a.statistics.seasons[i].statistics.penalty_goals_successful);
                                    if (super19PenaltiesIndex > -1) {
                                        super19Pentalies.splice(super19PenaltiesIndex, 1);
                                    }

                                }
                            }
                            // Rugby World Cup 2019
                             for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:59620") {
                                    var RWCGamesIndex = RWCGames.indexOf(a.statistics.seasons[i].statistics.matches_played);
                                    if (RWCGamesIndex > -1) {
                                        RWCGames.splice(RWCGamesIndex, 1);
                                    }
                                    var RWCTriesIndex = RWCTries.indexOf(a.statistics.seasons[i].statistics.tries);
                                    if (RWCTriesIndex > -1) {
                                        RWCTries.splice(RWCTriesIndex, 1);
                                    }
                                    var RWCRedIndex = RWCRed.indexOf(a.statistics.seasons[i].statistics.red_cards);
                                    if (RWCRedIndex > -1) {
                                        RWCRed.splice(RWCRedIndex, 1);
                                    }
                                    var RWCYellowIndex = RWCYellow.indexOf(a.statistics.seasons[i].statistics.yellow_cards);
                                    if (RWCYellowIndex > -1) {
                                        RWCYellow.splice(RWCYellowIndex, 1);
                                    }
                                    var RWCConversionsIndex = RWCConversions.indexOf(a.statistics.seasons[i].statistics.conversions_successful);
                                    if (RWCConversionsIndex > -1) {
                                        RWCConversions.splice(RWCConversionsIndex, 1);
                                    }
                                    var RWCPenalitesIndex = RWCPenalites.indexOf(a.statistics.seasons[i].statistics.penalty_goals_successful);
                                    if (RWCPenalitesIndex > -1) {
                                        RWCPenalites.splice(RWCPenalitesIndex, 1);
                                    }

                                }
                            }
                            // Rugby Championship 2019
                             for (i = 0; i < a.statistics.seasons.length; i++) {
                                if (a.statistics.seasons[i].id === "sr:season:67631") {
                                    var RCGamesIndex = RCGames.indexOf(a.statistics.seasons[i].statistics.matches_played);
                                    if (RCGamesIndex > -1) {
                                        RCGames.splice(RCGamesIndex, 1);
                                    }
                                    var RCTriesIndex = RCTries.indexOf(a.statistics.seasons[i].statistics.tries);
                                    if (RCTriesIndex > -1) {
                                        RCTries.splice(RCTriesIndex, 1);
                                    }
                                    var RCRedIndex = RCRed.indexOf(a.statistics.seasons[i].statistics.red_cards);
                                    if (RCRedIndex > -1) {
                                        RCRed.splice(RCRedIndex, 1);
                                    }
                                    var RCYellowIndex = RCYellow.indexOf(a.statistics.seasons[i].statistics.yellow_cards);
                                    if (RCYellowIndex > -1) {
                                        RCYellow.splice(RCYellowIndex, 1);
                                    }
                                    var RCConversionsIndex = RCConversions.indexOf(a.statistics.seasons[i].statistics.conversions_successful);
                                    if (RCConversionsIndex > -1) {
                                        RCConversions.splice(RCConversionsIndex, 1);
                                    }
                                    var RCPenaltiesIndex = RCPenalties.indexOf(a.statistics.seasons[i].statistics.penalty_goals_successful);
                                    if (RCPenaltiesIndex > -1) {
                                        RCPenalties.splice(RCPenaltiesIndex, 1);
                                    }

                                }
                            }
                            document.getElementById("combinedNames").removeChild(inTheList);
                        }


                    }
                };
            };
        });

    });
}




function getPlayerData() {

    const fullPlayerURL = playerURL + this.id + api_key;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", fullPlayerURL);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            p = JSON.parse(this.responseText);

            document.querySelector('#playerProfileName').textContent = p.player.name;




            //Rugby World Cup 2019
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:59616") {
                    document.querySelector('#RWC2019').textContent = "Rugby World Cup 2019"
                    document.querySelector('#RWC2019games').textContent = "- Matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#RWC2019tries').textContent = "- Tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#RWC2019yellow').textContent = "- Yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#RWC2019red').textContent = "- Red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#RWC2019penalty').textContent = "- Penalty goals:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#RWC2019conversions').textContent = "- Conversions:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }


            }
            //Super Rugby 2019
            document.querySelector('#superTeam').textContent = "- Current super rugby team:" + " " + p.roles[0].competitor.name
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:59620") {
                    document.querySelector('#super2019').textContent = "Super Rugby 2019"
                    document.querySelector('#superGames').textContent = "- Matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#superTries').textContent = "- Tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#SuperYellow').textContent = "- Yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#superRed').textContent = "- Red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#superPenatly').textContent = "- Penalty goals:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#superConversions').textContent = "- Conversions:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }
            }
            //Rugby Championship 2019
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:67631") {
                    document.querySelector('#RC2019').textContent = "Rugby Championship 2019"
                    document.querySelector('#RC2019Games').textContent = "- Matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#RC2019Tries').textContent = "- Tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#RC2019Yellow').textContent = "- Yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#RC2019Red').textContent = "- Red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#RC2019conversions').textContent = "- Conversions:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#RC2019Penalty').textContent = "- Penalty goals:" + " " + p.statistics.seasons[i].statistics.conversions_successful
                }
            }
            //Super Rugby 2020
            for (i = 0; i < p.statistics.seasons.length; i++) {
                if (p.statistics.seasons[i].id === "sr:season:73071") {
                    document.querySelector('#super2020').textContent = "Super Rugby 2020"
                    document.querySelector('#super20Games').textContent = "- Matches:" + " " + p.statistics.seasons[i].statistics.matches_played
                    document.querySelector('#super20Tries').textContent = "- Tries:" + " " + p.statistics.seasons[i].statistics.tries
                    document.querySelector('#Super20Yellow').textContent = "- Yellow cards:" + " " + p.statistics.seasons[i].statistics.yellow_cards
                    document.querySelector('#super20Red').textContent = "- Red cards:" + " " + p.statistics.seasons[i].statistics.red_cards
                    document.querySelector('#super20Penatly').textContent = "- Penalty goals:" + " " + p.statistics.seasons[i].statistics.penalty_goals_successful
                    document.querySelector('#super20Conversions').textContent = "- Conversions:" + " " + p.statistics.seasons[i].statistics.conversions_successful

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

function combineInfo() {
    var x = document.getElementById("myTeam");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    combinedWeight = weight.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("combinedWeight").innerHTML = "Weight:" + " " + combinedWeight + "kg";
    // Super 20 stats
    document.getElementById("supercombined2020").innerHTML = "Super Rugby 2020";
    combinedSuper20Games = super20Games.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedGames").innerHTML = "Games:" + " " + combinedSuper20Games;
    combinedSuper20Tries = super20Tries.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedTries").innerHTML = "Tries:" + " " + combinedSuper20Tries;
    combinedSuper20Yellow = super20Yellow.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedYellow").innerHTML = "Yellow Cards:" + " " + combinedSuper20Yellow;
    combinedSuper20Red = super20Red.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedRed").innerHTML = "Red Cards:" + " " + combinedSuper20Red;
    combinedSuper20Penalties = super20Pentalies.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedPenalty").innerHTML = "Penalty Goals:" + " " + combinedSuper20Penalties;
    combinedSuper20Conversions = super20Conversions.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super20combinedConversions").innerHTML = "Conversions:" + " " + combinedSuper20Conversions;
    // Super 19 stats
    document.getElementById("supercombined2019").innerHTML = "Super Rugby 2019";
    combinedSuper19Games = super19Games.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedGames").innerHTML = "Games:" + " " + combinedSuper19Games;
    combinedSuper19Tries = super19Tries.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedTries").innerHTML = "Tries:" + " " + combinedSuper19Tries;
    combinedSuper19Yellow = super19Yellow.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedYellow").innerHTML = "Yellow Cards:" + " " + combinedSuper19Yellow;
    combinedSuper19Red = super19Red.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedRed").innerHTML = "Red Cards:" + " " + combinedSuper19Red;
    combinedSuper19Penalties = super19Penalties.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedPenalty").innerHTML = "Penalty Goals:" + " " + combinedSuper19Penalties;
    combinedSuper19Conversions = super19Conversions.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("super19combinedConversions").innerHTML = "Conversions:" + " " + combinedSuper19Conversions;
    // Rugby World Cup 2019 stats
    document.getElementById("RWCcombined2019").innerHTML = "Rugby World Cup 2019";
    combinedRWCGames = RWCGames.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedGames").innerHTML = "Games:" + " " + combinedRWCGames;
    CombinedRWCTries = RWCTries.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedTries").innerHTML = "Tries:" + " " + CombinedRWCTries;
    CombinedRWCYellow = RWCYellow.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedYellow").innerHTML = "Yellow Cards:" + " " + CombinedRWCYellow;
    combinedRWCRed = RWCRed.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedRed").innerHTML = "Red Cards:" + " " + combinedRWCRed;
    combinedRWCPenalties = RWCPenalites.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedPenalty").innerHTML = "Penalty Goals:" + " " + combinedRWCPenalties;
    combinedRWCConversions = RWCConversions.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RWC19combinedConversions").innerHTML = "Conversions:" + " " + combinedRWCConversions;
    // Rugby Championship 2019 stats
    document.getElementById("RCcombined2019").innerHTML = "Rugby Championship 2019";
    combinedRCGames = RCGames.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedGames").innerHTML = "Games:" + " " + combinedRCGames;
    CombinedRCTries = RCTries.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedTries").innerHTML = "Tries:" + " " + CombinedRCTries;
    CombinedRCYellow = RCYellow.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedYellow").innerHTML = "Yellow Cards:" + " " + CombinedRCYellow;
    combinedRCRed = RCRed.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedRed").innerHTML = "Red Cards:" + " " + combinedRCRed;
    combinedRCPenalties = RCPenalties.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedPenalty").innerHTML = "Penalty Goals:" + " " + combinedRCPenalties;
    combinedRCConversions = RCConversions.reduce(function (a, b) { return a + b; }, 0);
    document.getElementById("RC19combinedConversions").innerHTML = "Conversions:" + " " + combinedRCConversions;
}

