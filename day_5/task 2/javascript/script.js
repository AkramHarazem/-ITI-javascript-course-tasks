var leftimg = document.getElementById('leftimg')
var rightimg = document.getElementById('rightimg')
var topimg = document.getElementById('topimg')
var leftimg_leftint = parseInt(getComputedStyle(leftimg).left) // 11
var rightimg_leftint = parseInt(document.styleSheets[0].cssRules[3].style.left) // 371
var topimg_bottomint = parseInt(document.styleSheets[0].cssRules[4].style.top) // 380

var go_stopBtn = document.getElementById('go_stop')


var intervalID
var moving = false
var moveingtop = true
var moveingright = true
var moveingleft = true
var topimg_bottom = topimg_bottomint
var leftimg_left = leftimg_leftint
var rightimg_left = rightimg_leftint

function move() {
    if (!moving) {

        moving = true

        intervalID = setInterval(function () {
            if (moveingtop && topimg_bottom !== 0 || topimg_bottom == topimg_bottomint) {
                topimg_bottom = parseInt(getComputedStyle(topimg).top)
                topimg.style.top = (topimg_bottom - 10) + "px"
                moveingtop = true
            } else if (!moveingtop && topimg_bottom !== topimg_bottomint || topimg_bottom == 0) {
                topimg_bottom = parseInt(getComputedStyle(topimg).top)
                topimg.style.top = (topimg_bottom + 10) + "px"
                moveingtop = false
            }

            if (moveingright && leftimg_left !== rightimg_leftint || leftimg_left == leftimg_leftint) {
                leftimg_left = parseInt(getComputedStyle(leftimg).left)
                leftimg.style.left = (leftimg_left + 10) + "px"
                moveingright = true
            } else if (!moveingright && leftimg_left !== leftimg_leftint || leftimg_left == rightimg_leftint) {
                leftimg_left = parseInt(getComputedStyle(leftimg).left)
                leftimg.style.left = (leftimg_left - 10) + "px"
                moveingright = false
            }

            if (moveingleft && rightimg_left !== leftimg_leftint || rightimg_left == rightimg_leftint) {
                rightimg_left = parseInt(getComputedStyle(rightimg).left)
                rightimg.style.left = (rightimg_left - 10) + "px"
                moveingleft = true
            } else if (!moveingleft && rightimg_left !== rightimg_leftint || rightimg_left == leftimg_leftint) {
                rightimg_left = parseInt(getComputedStyle(rightimg).left)
                rightimg.style.left = (rightimg_left + 10) + "px"
                moveingleft = false
            }
            document.querySelector('#top').innerText = "Top image top value is: " + topimg.style.top
            document.querySelector('#left').innerText = "Left image left value is: " + rightimg.style.left
            document.querySelector('#right').innerText = "Right image left value is: " + leftimg.style.left

        }, 100)
        go_stopBtn.innerText = "Stop"
    } else {
        clearInterval(intervalID)
        moving = false
        go_stopBtn.innerText = "Go"
    }


}

function reset() {
    topimg.style.top = topimg_bottomint + "px"
    leftimg.style.left = leftimg_leftint + "px"
    rightimg.style.left = rightimg_leftint + "px"
    document.querySelector('#top').innerText = "Top image top value is: " + topimg.style.top
    document.querySelector('#left').innerText = "Left image left value is: " + rightimg.style.left
    document.querySelector('#right').innerText = "Right image left value is: " + leftimg.style.left

}