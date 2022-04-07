let canvas = document.getElementById("scene");
  let ctx = canvas.getContext("2d");
  let x;
  let y;
  let previousX = 0;
  let timer = 0;
  let velocity = 50;
  const gravity = 10;
  const angle = Math.PI/3;
  const nue = 0.75;
  ctx.fillStyle = "red";
  ctx.font = "10px serif";


  function draw() {
    x = (velocity * timer * Math.cos(angle))/1 + previousX;
    y = -((velocity * timer * Math.sin(angle)) - (0.5 * gravity * Math.pow(timer, 2)));

    // when the projectile reaches the ground
    if (y > 0) {
      y = -0.001;
      timer = 0;
      previousX = x;
      velocity = nue * velocity;

    }

    ctx.fillText("x", x,y + 200);
    console.log("x: " + x + "\n" + "y: " + y);
    document.getElementById("x").innerHTML = (x + "<br>" + y);
    timer += 0.2;
    
  }

  
  setInterval(draw, 100);
  