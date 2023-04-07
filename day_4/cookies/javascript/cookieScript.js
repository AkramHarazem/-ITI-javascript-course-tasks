var cookieName1 = 'user_name'
var cookieValue1
function assignVal(val) {
    cookieValue1 = val
}


var cookieName2 = 'user_age'
var cookieValue2
function assignVal1(val) {
    cookieValue2 = val
}


var cookieName3 = 'user_gender'
var cookieValue3  
var radioInp = document.getElementsByName('user_gender')
for (var i=0;i<radioInp.length;i++) {
    radioInp[i].onclick = imgSelect
}
function imgSelect(){
var selectedImg = this.parentNode.querySelector('img').src
cookieValue3 = selectedImg
}


var cookieName4 = "user_color"
var sel = document.getElementsByTagName('select')[0]
var cookieValue4 =sel.value

var counter = 0

function regist() {
    createCookie(cookieName1, cookieValue1)
    createCookie(cookieName2, cookieValue2)
    createCookie(cookieName3, cookieValue3)
    createCookie(cookieName4, cookieValue4)
    createCookie("count", counter)
    location.assign("../HTML/displaycookie.html")
}

document.getElementsByTagName('button')[0].onclick = regist