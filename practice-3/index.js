var box = document.getElementById("box");

for (i = 0; i < 8; i++) {

    for (j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            var chess = document.createElement("div");
            chess.className = "box1";
        }
        else {
            var chess = document.createElement("div");
            chess.className = "box2";
        }
        box.appendChild(chess);
    }
    document.write("<br/>");
}