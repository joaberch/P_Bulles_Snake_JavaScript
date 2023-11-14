//Create all the variable and explain what it will do
//Canvas to draw
let canvas, ctx;

//player
let head, headpositionx, headpositiony;

//direction it is moving
let checkgoingright, checkgoingleft, checkgoingup, checkgoingdown;

////////////////////////////////////////////////////////////////      Main Code        ///////////////////////////////////////////////////////
initialise()

//////////////////////////////////////////////////////////////// Creating the function //////////////////////////////////////////////////////
function initialise() {
    canvas = document.getElementById('canvas');
    //alert(canvas);
    ctx = canvas.getContext('2d');
}