

  window.onload = function() {
    var rollButton = document.getElementById("rollButton");
    rollButton.onclick = Game.takeTurn;
  
    Game.populateBoard();


  };
  
  var Game = (function() {
    var game = {};
  
    game.squares = [
      new Square("Nothing", 0, "square2"),
      new Square("Nothing", 0, "square3"),
      new Square("Nards", 4, "square4"),
      new Square("Nards", 5, "square5"),
      new Square("Nothing", 0, "square6"),
      new Square("Nothing", 0, "square7"),
      new Square("Nothing", 0, "square8"),
      new Square("Nards", 3, "square9"),
      new Square("Nothing", 0, "square10"),
      new Square("JACKPOT NARDS!", 10, "square11"),
       new Square("Nothing", 0, "square12"),
        new Square("Nothing", 0, "square13"),
        new Square("Nards", 5, "square14"),
        new Square("Nards", 3, "square15"),
     new Square("Nothing", 0, "square16")
      
    ];
  
    game.players = [
      new Player("You", 0, "Triangle", "player1"),/////////////////////////restdb data here
    ];
  
    game.currentPlayer = 0;
  
    game.populateBoard = function() {
      for (var i = 0; i < this.squares.length; i++) {
        var id = this.squares[i].squareID;
  
        var squareName = document.getElementById(id + "-name");
        var squareValue = document.getElementById(id + "-value");
        var squareOwner = document.getElementById(id + "-owner");
  
        squareName.innerHTML = this.squares[i].name;
        squareValue.innerHTML = "$" + this.squares[i].value;
        squareOwner.innerHTML = this.squares[i].owner;
      }
  
      var square1 = document.getElementById("square1");/////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < game.players.length; i++) {
        game.players[i].createToken(square1);
      }
  
      updateByID("player1-info_name", game.players[0].name);
      updateByID("player1-info_cash", game.players[0].cash);
    };
  
    game.takeTurn = function() {
      movePlayer();
  

      checkTile();
      
      // setTimeout(function(){
      //   let currentdate = new Date();
      //   let tomorrowdates=new Date(document.querySelector("info").innerHTML);
      //   console.log(tomorrowdates)
      //   countdown((tomorrowdates-currentdate));
      //   },6000)
      updateByID("currentTurn", game.players[game.currentPlayer].name);
    };
    function movePlayer() {
        var moves = Math.floor(Math.random()*(3-1)+1);
      var totalSquares = game.squares.length + 1;
      var currentPlayer = game.players[game.currentPlayer];
      var currentSquare = parseInt(currentPlayer.currentSquare.slice(6));
  
       if (currentSquare + moves <= totalSquares) {
         var nextSquare = currentSquare + moves;
       } else {
         var nextSquare = currentSquare + moves - totalSquares;
         currentPlayer.updateCash(currentPlayer.cash + 3);
         console.log("3 Nards for passing start");
       }
  
      currentPlayer.currentSquare = "square" + nextSquare;
  
      var currentToken = document.getElementById(currentPlayer.id);
      currentToken.parentNode.removeChild(currentToken);
  
      currentPlayer.createToken(
        document.getElementById(currentPlayer.currentSquare)
      );
    }
  
    function checkTile() {
      var currentPlayer = game.players[game.currentPlayer];
      var currentSquareId = currentPlayer.currentSquare;
      var currentSquareObj = game.squares.filter(function(square) {
        return square.squareID == currentSquareId;
      })[0];
  
      if (currentSquareId == "square1") {
        currentPlayer.updateCash(currentPlayer.cash + 3);
        updateByID(
          "messagePara",
          currentPlayer.name + ": You landed on start. Here's an extra 3 Nards"
        );
      } else if (currentSquareObj.owner == "Claim ME!") {

          currentPlayer.updateCash(currentPlayer.cash + currentSquareObj.value); // cahnged - to + to add money
          var purchase = "Congratulation ! </br>You Have Gotten " +currentSquareObj.value +" Nards !<br>You have a total of "+ currentPlayer.cash+ " Nards";
          document.querySelector("rewardmess h1").innerHTML= purchase
          document.querySelector("rewardmess").classList.remove("hidden");

          updateByID(
            "messagePara",
            "You have " + currentPlayer.cash +" Nards"
          );
          document.getElementById("rollButton").disabled=true
          let tomorrowdate = new Date();
          tomorrowdate.setDate(tomorrowdate.getDate()+1);
          let currentdate = new Date();
          document.querySelector("info").innerHTML=tomorrowdate
          
          let monotime= currentdate.getDate()+"/"+currentdate.getMonth()+"/"+currentdate.getFullYear()+" "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();
          document.querySelector("notice").classList.add("selected")
          document.querySelector("notice h1").innerHTML= "Return at "+tomorrowdate.getDate()+"/"+tomorrowdate.getMonth()+"/"+tomorrowdate.getFullYear()+" "+tomorrowdate.getHours()+":"+tomorrowdate.getMinutes()+":"+tomorrowdate.getSeconds();
          
          // var char = document.querySelector("span")
          // var list = document.getElementsByClassName("cell square")
          // console.log(char)
          // console.log(list)
          // const arr = Array.from(list)
          // arr.forEach(function(item) {
          //   console.log(item.innerHTML)
          //   console.log(item.innerHTML.includes(char)||item.innerHTML.includes(`<p id="square1-residents"><span class="Triangle" id="player1"></span></p>`))
          //   if (item.innerHTML.includes(char)||item.innerHTML.includes(`<p id="square1-residents"><span class="Triangle" id="player1"></span></p>`))
          //   {
          //     console.log(item.id)
          //   }
          // }); currentSquareId


          //put api

          // let url = "specify website"/////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // let payload = {
          //   _id:4,
          //   name:,
          //   password:,
          //   uniqueid:,
          //   datejoined:,
          //   monopoly:monotime,
          //   spinturn:,
          //   monopolylocation:currentSquareId,
          // voucherlist:,
          // cart:,
          // }
          // let option ={
          //   method:"PUT",
          //   body: JSON.stringify(payload)
          // }
          // fetch(url,option)
          // .then(Response =>console.log(Response.status))



          unhidetime();
          function unhidetime(){setTimeout(function(){
            var element = document.querySelector("notice")
            console.log(element.classList.contains("selected"))
            document.querySelector("notice").classList.remove("hidden")
          },5000);
        }
      }
      
    }
    
    function updateByID(id, msg) {
      document.getElementById(id).innerHTML = msg;
    }
    
    function Square(name, value, squareID) {
      this.name = name;
      this.value = value;
      this.rent = value * 0.3;
      this.squareID = squareID;
      this.owner = "Claim ME!";
    }
    
    function Player(name, cash, token, id) {
      this.name = name;
      this.cash = cash;
      this.token = token;
      this.id = id;
      this.currentSquare = "square1";
      this.ownedSquares = [];
    }
    
    Player.prototype.createToken = function(square) {
      var playerSpan = document.createElement("span");
      playerSpan.setAttribute("class", this.token);
      playerSpan.setAttribute("id", this.id);
      square.appendChild(playerSpan);
    };
    
    Player.prototype.updateCash = function(amount) {
      document.getElementById(this.id + "-info_cash").innerHTML = amount;
      this.cash = amount;
    };
    
    return game;
  })();
  // function countdown( countdatetime ) {
  //   let y = countdatetime
  //   while (document.querySelector("notice").classList.contains("selected"))
  //   {
  //     setTimeout(function(){
  //       console.log('reached')
  //       var t=startcounting(y)
  //       function startcounting(y)
  //       {
  //         const seconds = Math.floor( (y/1000) % 60 );
  //         const minutes = Math.floor( (y/1000/60) % 60 );
  //         const hours = Math.floor( (y/(1000*60*60)) % 24 );
  //         const days = Math.floor( y/(1000*60*60*24) );
  //         return{
  //           days,
  //           hours,
  //           minutes,
  //           seconds
  //         };
  //       }
  //       document.querySelector("notice h1").innerHTML= "Return in "+t.days+"days"+ t.hours +'hours' + t.minutes +'minutes' + t.seconds+'seconds';
  //       y-=1000
  //       return y;
  //     },1000)
  //     if (y<=0)
  //     {
  //       break;
  //     }
  //   }
  // };
  
