var num = localStorage.getItem('number');
var score = localStorage.getItem('score');
var correct = localStorage.getItem('correct');
var _false = localStorage.getItem('_false');

var score_text = document.getElementById('score-text');
var number_text = document.getElementById('number-text');
var correct_text = document.getElementById('correct-text');
var false_text = document.getElementById('false-text');

score_text.innerText = 'Your Score: ' + parseFloat(score).toFixed(2);
number_text.innerText = 'Number of Questions: ' + num;
correct_text.innerText = 'Total Correct Answer: ' + correct;
false_text.innerText = 'Total False Answer: ' + _false;