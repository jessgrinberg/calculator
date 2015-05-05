//
document.getElementById("zero").addEventListener("click", function runNumber() {
     	document.case.display.value += "0";
});
document.getElementById("one").addEventListener("click", function runNumber() {
     	document.case.display.value += "1";
});

document.getElementById("two").addEventListener("click", function runNumber() {
     	document.case.display.value += "2";
});

document.getElementById("three").addEventListener("click", function runNumber() {
     	document.case.display.value += "3";
});

document.getElementById("four").addEventListener("click", function runNumber() {
     	document.case.display.value += "4";
});

document.getElementById("five").addEventListener("click", function runNumber() {
     	document.case.display.value += "5";
});

document.getElementById("six").addEventListener("click", function runNumber() {
     	document.case.display.value += "6";
});

document.getElementById("seven").addEventListener("click", function runNumber() {
     	document.case.display.value += "7";
});

document.getElementById("eight").addEventListener("click", function runNumber() {
     	document.case.display.value += "8";
});

document.getElementById("nine").addEventListener("click", function runNumber() {
     	document.case.display.value += "9";
});


document.getElementById("divide").addEventListener("click", function runSymbols() {
     	document.case.display.value += "/";
 });

document.getElementById("multiply").addEventListener("click", function runSymbols() {
     	document.case.display.value += "*";
 });

document.getElementById("minus").addEventListener("click", function runSymbols() {
     	document.case.display.value += "-";
 });
document.getElementById("plus").addEventListener("click", function runSymbols() {
     	document.case.display.value += "+";
 });
//end where its working

//how to make the = operator working
document.getElementById("operation").addEventListener("click", function runOperation(){

	var result = eval(document.case.display.value)

	document.case.display.value = result;
})

document.getElementById("clear").addEventListener("click", function runClear() {
document.getElementById("one").value = "";

});

// document.getElementsByTagName("button")[i].addEventListener("click", function runNumber() {
//      	document.case.display.value += value;
// });

// for (i = 0; i < value.length; i++) { 
//     text += value[i] + "<br>";
// }


// var i;
// for (i = 0; i < value.length; i++) {
// document.getElementsByTagName("button")[i].addEventListener("click", function runNumber(value) {
// document.case.display.value += value;
// })


// function buttonClicked() {
// 	console.log(value)
// }

// var buttons = document.getElementsByTagName("button");
// for (var i= 0; i < buttons.length; i++) {
// 	//console.log(buttons[i]);
// 	buttons[i].addEventListener("click", buttonClicked)
// }


//
 
// var buttons = document.getElementsByTagName("button");
// var contents = "";
// function buttonClickHandler(e) {
// 	console.log (e)
// 	console.log("clicked on", e.target.innerHTML)
// 	contents += e.target.innerHTML
    
// 	document.getElementById("input").innerHTML = contents + " = " eval();
// }

// for (var i = 0; i<buttons.length; i++) {
// 	console.log(buttons[i]);
// 	buttons[i].addEventListener("click", buttonClickHandler)
// }

//read http://www.santarosa.edu/~jperetz/projects/calculator/