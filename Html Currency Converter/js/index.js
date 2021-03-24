window.onload = fontuneText();

function fontuneText(){
    var fortune = document.getElementById('set-fortune');
    var fortunes = ["A faithful friend is a strong defense.",
                    "Happiness will bring you good luck.",
                    "Have a beautiful day.",
                    "Success is a journey, not a destination.",
                    "Swimming is easy. Stay floating is hard.",
                    "The harder you work, the luckier you get.",
                    "There is no wisdom greater than kindness.",
                    "Love is a warm fire to keep the soul warm.",
                    "Your success will astonish everyone.",
                    "Your life will be happy and peaceful.",
                    "Your reputation is your wealth.",
                    "Your life will be happy and peaceful.",
                    "Your life will get more and more exciting.",
                    "Your mind is your greatest asset.",
                    "Your mind is creative, original and alert."];

    var x = Math.floor(Math.random() * 15);
    fortune.innerHTML = fortunes[x];
}