const players = ["K", "Kash", "Vas", "Av"]

const player = (name) => {
    return {
    name : name,
    score: 0,
    turns: []
}}

var game = {
    inProgress : false,
    winner : '',
    players : players.map((name) => {return player(name)}),
    dartsPerPlayer : 4,
    scoreToWin : 301 
}

const calcScore = (list) => {
    if(list.length === 0){
        return 0
    }
    let total = 0
    console.log(1, list)
    list.forEach(round => {
        round.forEach(shot => {
            total += shot
        });
    });
    return total
}

const gameOver = (game) => {
    game.players.forEach(element => {
        console.log(element.turns)
        if (calcScore(element.turns) > 300){
            game.inProgress = false;
            game.winner = element.name;
        }
    });
}


const throwDart = (game, playerId, score) => {
    const turns = game.players[playerId].turns
    console.log(turns)
    len = turns.length
    if (turns.length) {
        if (turns[len-1].length < game.dartsPerPlayer){
            turns[len-1].push(score)
        }
        else {
            turns.push([score])
        }
    }
    else {
        turns.push([score])
    }
    game.players[playerId].score += score
    console.log(turns)
    return game            
}

console.log(calcScore(
    [[1,2,3],
    [1,2,3],
    [1,2,3]]
))



// game.players[0].turns.push(0)
// game.players[0].turns.push(0)
// for (var i=0; i<10; i++){
//     throwDart(game,2,1)
// }
console.log(game)
console.log(game.players[2].turns)

// game.inProgress = true;
// while (game.inProgress){
//     for( var j=0; j < 4; j++){
//         for (var i=0; i<game.dartsPerPlayer; i++){
//             throwDart(game,j,Math.floor(Math.random()*50))
//         }
//     }
//     gameOver(game)
// }

console.log(game)
console.log(game.players[0].turns)

var express = require('express')
var cors = require('cors')
var app = express()
app.use(express.json());
 
app.use(cors())

app.get('/', function (req, res, next) {
        
  res.json(game)
})
app.post('/play', function (req, res, next) {
    console.log(req.body)
    throwDart(game,req.body.id,req.body.score)
    res.json(game)
}
)
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
