
let colorSelectArray = ['rgb(127, 3, 3)', 
                        'rgb(1, 14, 81)', 
                        'rgb(1, 68, 81)',
                        'rgb(107, 183, 7)',
                        'rgb(214, 153, 0)',
                        'rgb(0, 214, 157)',
                        'rgb(214, 0, 92)',
                        'rgb(188, 9, 12)',
                        'rgb(90, 9, 188)',
                        'rgb(182, 188, 9)']


var words = document.querySelectorAll(".wordCloud")
console.log(words);

words.forEach(function(word) {
    let colorSelector = Math.floor(Math.random() * 10);
    word.setAttribute("color", colorSelectArray[colorSelector - 1]);
    console.log(colorSelector);
});