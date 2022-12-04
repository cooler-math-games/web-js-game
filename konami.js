// from https://codepen.io/cferdinandi/pen/qBWVPqL

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;
var patternx = ['d', 's', 't', 'a', 't', 's'];
let konami = false;
var keyHandler = function (event) {
    if(event.key == "ArrowUp"){
        konami = true;
    }
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		if(patternx.indexOf(event.key) < 0 || event.key !== patternx[current]){
            current = 0;
		    return;
        }
        
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current && konami == true) {
		current = 0;
		//window.alert('You found it!');
        for(let i = 0; i < 255; i++){
            console.log("");
            console.log('%c You found it ','background:#013220;color:white;font-size:20px');
        }
        text("ggs", 30, 30)
        return die=false;
	}else if(patternx.length === current && konami == false){
        current = 0;
        return d_stats = true
    }
    return;
};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);