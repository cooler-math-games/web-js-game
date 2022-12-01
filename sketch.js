let x_player = 0;
let y_player = 0;
let speed_player = 5;
let canvas = 400;
let big = 55
let big_square_enemy = 25


function setup() {
    createCanvas(canvas, canvas);
}
const is_key_down = (() => {
    const state = {};

    window.addEventListener('keyup', (e) => state[e.key] = false);
    window.addEventListener('keydown', (e) => state[e.key] = true);

    return (key) => state.hasOwnProperty(key) && state[key] || false;
})();
  
function draw() {
    background(155);
    fill("#FF0000");
    circle(30, 30, 20);
    
    
    background(155);
    
   
    for (let i = 0; i < currentsquare.length; i++) {
        currentsquare[i].crsquare()
        currentsquare[i].changey()
        currentsquare[i].check_if_off_screen()
        
        fill("#ba3d34")
        currentsquare[i].checkifhittingplayer()
        
    }
    fill(255)
    square(x_player, y_player, big);
    playermcheck()
    
}




function playermcheck(){
    if (is_key_down("w") == true) {
        y_player -= speed_player;
    } else if (is_key_down("s") == true) {
        y_player += speed_player;
    }
    if (is_key_down("d") == true) {
        x_player += speed_player;
    } else if (is_key_down("a") == true) {
        x_player -= speed_player;
    }

    if(x_player > canvas - big){
        x_player -= speed_player
    }else if(x_player == 0 || 0 > x_player){
        x_player = 1  
    }
    if(y_player > canvas - big){
        y_player -= speed_player
    }else if(y_player == 0 || 0 > y_player){
        y_player  = 1
    }
}


let currentsquare = []
const sqr_on_screen = 50
const size = 50;



var intervalID = window.setInterval(test, 100);
//function mouseClicked() {
//    currentsquare.push(new Square(0-big));
//}
function test(){
    //function mouseClicked() {
        currentsquare.push(new Square(0-big_square_enemy ));
    //}
}
class Square {
    constructor(y) {
      this.x = random(100, canvas - 100)
      this.xormaybeanotherx = random(-5, 5)
      this.y = y
    }
    crsquare(){
        square(this.x,  this.y, 25);
    }
    changey(){
        this.y += 4
        this.x += this.xormaybeanotherx
    }

    check_if_off_screen(){
        if(this.y > canvas+big_square_enemy  ){
            currentsquare.shift()
        }
    }
    checkifhittingplayer(){
        if(x_player > this.x - big_square_enemy / 2 &&
        x_player < this.x + big_square_enemy / 2 &&
        y_player > this.y - big_square_enemy / 2 &&
        y_player < this.y + big_square_enemy / 2){
            console.log("bruh lol")
        }
    }
    
}
