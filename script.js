let player = [0, 0];
let pixels = document.querySelectorAll("#display img");
let score = 0
let enemy = [5, 5]

function syncPlayer() {
  for (let i = 0; i < pixels.length; i++) {
    if (String(pixels[i].getAttribute("coordinates")).replace("[", "").replace("]", "") == String(player)) {
      pixels[i].src = "assets/full.png";
    } else if (String(pixels[i].getAttribute("coordinates")).replace("[", "").replace("]", "") == String(enemy)) {

    }
    else {
      pixels[i].src = "assets/empty.png";
    }
  }
  if (String(enemy) == String(player)) {
    score++;
    generateEnemy();
  }
  document.querySelector("#score p").innerHTML = score;
}

function syncEnemy() {
  for (let i = 0; i < pixels.length; i++) {
    if (String(pixels[i].getAttribute("coordinates")).replace("[", "").replace("]", "") == String(player)) {
      pixels[i].src = "assets/full.png";
    } else if (String(pixels[i].getAttribute("coordinates")).replace("[", "").replace("]", "") == String(enemy)) {
      pixels[i].src = "assets/enemy.gif";
    }
    else {
      pixels[i].src = "assets/empty.png";
    }
  }

}

syncPlayer();

generateEnemy();

function up() {
  if (player[1] != 0) {
    player[1]--;
  };
  syncPlayer();
}

function right() {
  if (player[0] != 5) {
    player[0]++;
  };
  syncPlayer();
}

function left() {
  if (player[0] != 0) {
    player[0]--;
  };
  syncPlayer();
}

function down() {
  if (player[1] != 2) {
    player[1]++;
  };
  syncPlayer();
}

function generateEnemy() {
  syncEnemy();
  enemy[0] = Math.floor(Math.random() * (5 - 0 + 1) + 0);
  enemy[1] = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  if (String(enemy) == String(player)) {
    generateEnemy();
  } else {
    syncEnemy();
  }
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 38) {
    up()
  }
  if (e.keyCode == 39) {
    right()
  }
  if (e.keyCode == 37) {
    left()
  }
  if (e.keyCode == 40) {
    down()
  }
})