var randomNumber1 = Math.trunc((Math.random() * 6) + 1)
var randomNumber2 = Math.trunc((Math.random() * 6) + 1)
var imgdice1 = document.getElementsByClassName("imgdice")[0]
var imgdice2 = document.getElementsByClassName("imgdice")[1]
imgdice1.innerHTML = '<img class="img1" src="images/dice' + randomNumber1 + '.png">'
imgdice2.innerHTML = '<img class="img1" src="images/dice' + randomNumber2 + '.png">'
