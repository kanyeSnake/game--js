  
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    let kanyeFace = new Image();
    kanyeFace.src = "https://vignette.wikia.nocookie.net/star-clan/images/9/90/Kanye.png/revision/latest?cb=20150410173932"
    let drakeFace = new Image();
    drakeFace.src = "https://png2.kisspng.com/sh/03d7326f3e6e192b95a7142aaa43f543/L0KzQYm3UsA0N5Jqj5H0aYP2gLBuTfRzaZxqRdV1aYCwccP7TfRzaZxqRdhqY3WwgLBuTgRzaZ94iNN7ZX73Pbr0gfdmNWZmT6g5N0a8QLS4WMY5Nmc9SaUDN0W2QYa4V8Y5PGY9TaI9OUaxgLBu/kisspng-drake-clip-art-drake-face-png-transparent-image-5a7607690c1868.6813875315176845850496.png"
    var grid = 40;
    var snake = {
      x: 160,
      y: 160,
      dx: grid,
      dy: 0,
      cells: [],
      maxCells: 4,

    };
    var count = 0;
    var apple = {
      x: 320,
      y: 320,

    };

    var wat = 23

    



    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    // game loop
    function loop() {
      requestAnimationFrame(loop);
      // slow game loop to 15 fps instead of 60 - 60/15 = 4
      if (++count < 4) {
        return;
      }
      count = 0;
      context.clearRect(0,0,canvas.width,canvas.height);
      snake.x += snake.dx;
      snake.y += snake.dy;
      // wrap snake position on edge of screen
      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      }
      else if (snake.x >= canvas.width) {
        snake.x = 0;
      }
      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      }
      else if (snake.y >= canvas.height) {
        snake.y = 0;
      }
      // keep track of where snake has been. front of the array is always the head
      snake.cells.unshift({x: snake.x, y: snake.y});
      // remove cells as we move away from them
      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }
      // draw apple
        
        {context.drawImage(kanyeFace,apple.x, apple.y, grid,  grid )
        }
      
    
      
      // draw boss - add more if statements for bosses
      var drawBoss = function(){
        if(snake.cells.length === 10)
        {context.clearRect(0, 0, canvas.width, canvas.height),
          context.drawImage(drakeFace,apple.x, apple.y, grid+30,  grid+30 )
        }
      }
      drawBoss()



      // eat boss
      // if (cell.x === apple.x && cell.y === apple.y) {
      //   snake.maxCells++;
      //   apple.x = getRandomInt(0, 10) * grid;
      //   apple.y = getRandomInt(0, 10) * grid;
      // }


      // draw snake
      

      snake.cells.forEach(function(cell, index) {
        context.drawImage(kanyeFace,cell.x, cell.y, grid-1, grid-1)

        // snake ate apple
        var eatApple = function (){
          if((snake.cells.length === 10 || snake.cells.length === 20 || snake.cells.length === 30 || snake.cells.length === 40)  && cell.x === apple.x && cell.y === apple.y ) {
            snake.maxCells+=4;}
        
          // if(snake.cells.length === 25 && cell.x === apple.x && cell.y === apple.y ) {
          //   snake.maxCells+=4;}
        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          apple.x = getRandomInt(0, 10) * grid;
          apple.y = getRandomInt(0, 10) * grid;
        // } if(snake.cells.length === 5 && cell.x === apple.x && cell.y === apple.y ) {
        //   snake.maxCells+=5;
      }
    console.log(snake.cells.length)}

      eatApple()

      
      // eatBoss()
        // check collision with all cells after this one (modified bubble sort)
        for (var i = index + 1; i < snake.cells.length; i++) {
          
          // collision. reset game
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            apple.x = getRandomInt(0, 10) * grid;
            apple.y = getRandomInt(0, 10) * grid;
          }
        }
      });
    }
    document.addEventListener('keydown', function(e) {
      // prevent snake from backtracking on itself
      if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      }
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });
    requestAnimationFrame(loop);


//     $(document).ready(function() {
//   // all custom jQuery will go here
//   var drawBoss = function(){
//     if(snake.cells.length === 10)
//     {context.drawImage(nickiFace,apple.x, apple.y, grid+30,  grid+30 )
//     }
//   }
//   drawBoss()

// });
 