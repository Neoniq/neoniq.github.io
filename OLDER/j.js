document.onkeydown = function(e) { 
if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
} 
return false; 
}; 

function click() { 
if (event.button==2||event.button==3) { 
oncontextmenu='return false'; 
} 
} 
document.onmousedown=click 
document.oncontextmenu = new Function("return false;")