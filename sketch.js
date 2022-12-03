let x_player = 0;
let y_player = 0;
let speed_player = 5;
let canvas = 400;
let big = 55
let big_square_enemy = 25
let playing = false;
let myFont;
let pleaseonlydothisonce = false;
function preload() {
    myFont = loadFont('./assets/Inconsolata-SemiBold.ttf');
  }
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
    if(playing == true){
        console.log(y_player)
        
        background(155);
        if(pleaseonlydothisonce == false){
            currentsquare = []
            x_player = canvas/2-(big/2);
            y_player = canvas - big / 2;
            pleaseonlydothisonce = true
        }
       
        for (let i = 0; i < currentsquare.length; i++) {
            currentsquare[i].crsquare()
            currentsquare[i].changey()
            currentsquare[i].check_if_off_screen()
            
            fill("#ba3d34")
            currentsquare[i].checkifhittingplayer()
            
        }
        fill(255)
        square(x_player, y_player, big);
        playermcheck(true)
    }else if(playing == false){
        background(155)
        textSize(26.5);
        textFont(myFont);
        text('Click "Enter" to start playing', 0, canvas / 2);
        pleaseonlydothisonce = false
        
    }
   
    
}
function keyPressed() {
    if(playing == false){
        playing = true
    }
  }


let pushs = 0;
function playermcheck(cs){
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
        x_player -= speed_player + pushs
    }else if(x_player == 0 || 0 > x_player){
        x_player = 1  
    }
    if(y_player > canvas - big){
        y_player -= speed_player + pushs
    }else if(y_player == 0 || 0 > y_player){
        y_player  = 1
    }
    if(cs == true && y_player > 342.5){
        pushs = 1.5
        console.log("speedy boy")
    }else{
        pushs = 0
    }
}


let currentsquare = []
//const sqr_on_screen = 50
//const size = 50;



var intervalID = window.setInterval(test, 100-15 + GetDif(15, 30));
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
            playing = false
        }
    }
    
}
