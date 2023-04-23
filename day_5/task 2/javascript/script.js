var go_stopBtn = document.getElementById('go_stop')
var resetBtn = document.getElementById('reset')
var imgs = document.images
var direction

function moveImg(idx, pos) {
    if (parseInt(getComputedStyle(imgs[idx])[pos]) >= 370) {
        direction = -1
    } else if (parseInt(getComputedStyle(imgs[idx])[pos]) <= 0) {
        direction = 1
    }
    imgs[idx].style[pos] = (parseInt(getComputedStyle(imgs[idx])[pos]) + direction) + 'px'
}
var timer
go_stopBtn.onclick = function () {
    if (go_stopBtn.innerText == 'Go') {
        timer = setInterval(function () {
            for (var i = 0; i < imgs.length; i++) {
                if (i == 0) {
                    moveImg(i, 'left');
                } else if (i == 1) {
                    moveImg(i, 'right');
                } else if (i == 2) {
                    moveImg(i, 'bottom');
                }
            }
            document.getElementById('left').innerText = "Left image left value is: " + imgs[0].style.left
            document.getElementById('right').innerText = "Right image left value is: " + imgs[1].style.right
            document.getElementById('top').innerText = "Top image bottom value is: " + imgs[2].style.bottom
        }, 10);
        go_stopBtn.innerText = 'Stop'
    } else if (go_stopBtn.innerText == 'Stop') {
        clearInterval(timer)
        go_stopBtn.innerText = 'Go'
    }
}

resetBtn.onclick = function () {
    imgs[0].style.left = `0px`
    imgs[1].style.right = `0px`
    imgs[2].style.bottom = `0px`
    document.getElementById('left').innerText = "Left image left value is: " + imgs[0].style.left
    document.getElementById('right').innerText = "Right image left value is: " + imgs[1].style.right
    document.getElementById('top').innerText = "Top image bottom value is: " + imgs[2].style.bottom
}
















// var leftimg = document.getElementById('leftimg')
// var rightimg = document.getElementById('rightimg')
// var topimg = document.getElementById('topimg')
// var leftimg_leftint = parseInt(getComputedStyle(leftimg).left) // 11
// var rightimg_leftint = parseInt(document.styleSheets[0].cssRules[3].style.left) // 371
// var topimg_bottomint = parseInt(document.styleSheets[0].cssRules[4].style.top) // 380

// var go_stopBtn = document.getElementById('go_stop')

// var intervalID
// var moving = false
// var moveingtop = true
// var moveingright = true
// var moveingleft = true
// var topimg_bottom = topimg_bottomint
// var leftimg_left = leftimg_leftint
// var rightimg_left = rightimg_leftint

// function move() {
//     if (!moving) {

//         moving = true

//         intervalID = setInterval(function () {
//             if (moveingtop && topimg_bottom !== 0 || topimg_bottom == topimg_bottomint) {
//                 topimg_bottom = parseInt(getComputedStyle(topimg).top)
//                 topimg.style.top = (topimg_bottom - 10) + "px"
//                 moveingtop = true
//             } else if (!moveingtop && topimg_bottom !== topimg_bottomint || topimg_bottom == 0) {
//                 topimg_bottom = parseInt(getComputedStyle(topimg).top)
//                 topimg.style.top = (topimg_bottom + 10) + "px"
//                 moveingtop = false
//             }

//             if (moveingright && leftimg_left !== rightimg_leftint || leftimg_left == leftimg_leftint) {
//                 leftimg_left = parseInt(getComputedStyle(leftimg).left)
//                 leftimg.style.left = (leftimg_left + 10) + "px"
//                 moveingright = true
//             } else if (!moveingright && leftimg_left !== leftimg_leftint || leftimg_left == rightimg_leftint) {
//                 leftimg_left = parseInt(getComputedStyle(leftimg).left)
//                 leftimg.style.left = (leftimg_left - 10) + "px"
//                 moveingright = false
//             }

//             if (moveingleft && rightimg_left !== leftimg_leftint || rightimg_left == rightimg_leftint) {
//                 rightimg_left = parseInt(getComputedStyle(rightimg).left)
//                 rightimg.style.left = (rightimg_left - 10) + "px"
//                 moveingleft = true
//             } else if (!moveingleft && rightimg_left !== rightimg_leftint || rightimg_left == leftimg_leftint) {
//                 rightimg_left = parseInt(getComputedStyle(rightimg).left)
//                 rightimg.style.left = (rightimg_left + 10) + "px"
//                 moveingleft = false
//             }
//             document.querySelector('#top').innerText = "Top image top value is: " + topimg.style.top
//             document.querySelector('#left').innerText = "Left image left value is: " + rightimg.style.left
//             document.querySelector('#right').innerText = "Right image left value is: " + leftimg.style.left

//         }, 100)
//         go_stopBtn.innerText = "Stop"
//     } else {
//         clearInterval(intervalID)
//         moving = false
//         go_stopBtn.innerText = "Go"
//     }


// }

// function reset() {
//     topimg.style.top = topimg_bottomint + "px"
//     leftimg.style.left = leftimg_leftint + "px"
//     rightimg.style.left = rightimg_leftint + "px"
//     document.querySelector('#top').innerText = "Top image top value is: " + topimg.style.top
//     document.querySelector('#left').innerText = "Left image left value is: " + rightimg.style.left
//     document.querySelector('#right').innerText = "Right image left value is: " + leftimg.style.left
// }