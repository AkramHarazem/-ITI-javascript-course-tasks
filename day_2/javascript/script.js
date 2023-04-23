function calcArr() {
    var arr = new Array()
    var sum = 0
    var multi = 1
    do {
        var arrLength = prompt(`enter a valid number for numbers you want to calculate`)
    } while (isNaN(arrLength) || arrLength === null || arrLength === "" || arrLength == 0 || arrLength < 0)

    for (var i = 0; i < arrLength; i++) {
        var userInput = prompt(`enter number ${i+1}`)
        while (isNaN(userInput) || userInput === null || userInput === "") {
            userInput = prompt(`enter a valid number for number ${i+1}`)
        }
        arr.push(parseInt(userInput))
        sum += arr[i]
        multi *= arr[i]
    }

    // var zeroIndex = arr.indexOf(0)
    // console.log(zeroIndex)
    // var divid = arr.reduce((total, currentVal) => (total / currentVal))

    document.write(`<h1>Adding -- Multiplying -- and dividing 3 values</h1> <hr>`)
    document.write(`<h3 style="color:red;">Sum of 3 values: <span style="color:black;">${arr.join("+")} = ${sum}</span> </h3>`)
    document.write(`<h3 style="color:red;">Multiplication of 3 values: <span style="color:black;">${arr.join("*")} = ${multi}</span> </h3>`)

    var divid = arr[0]
    // if (arr[0] === 0) {
    //     for (var i = 1; i < arrLength; i++) {
    //         divid = divid / arr[i]
    //     }
    //     document.write(`<h3 style="color:red;">Division of 3 values: <span style="color:black;">${arr.join("/")} = ${divid}</span> </h3>`)

    // } 
     if (arr.includes(0, 1)) {
        document.write(`<h3 style="color:red;">Division of 3 values: <span style="color:black;"> is infinity </span> </h3>`)

    } else {
        for (var i = 1; i < arrLength; i++) {
            divid = divid / arr[i]
        }
        document.write(`<h3 style="color:red;">Division of 3 values: <span style="color:black;">${arr.join("/")} = ${divid}</span> </h3>`)
    }

}

function arrSort() {
    var arr = []
    for (var i = 0; i < 5; i++) {
        var userInput = prompt(`enter number ${i+1}`)
        while (isNaN(userInput) || userInput === null || userInput === "") {
            userInput = prompt(`enter a valid number for number ${i+1}`)
        }
        arr.push(parseInt(userInput))
    }

    document.write(`<h1>Sorting</h1> <hr>`)
    document.write(`<h3 style="color:red;">You have entered values of: <span style="color:black;">${arr.join(",")}</span> </h3>`)
    document.write(`<h3 style="color:red;">ur values after being sorted descending: <span style="color:black;"> ${(arr.sort(function(a,b){return b-a})).join(",")}</span> </h3>`)
    document.write(`<h3 style="color:red;">ur values after being sorted ascending: <span style="color:black;"> ${(arr.sort(function(a,b){return a-b})).join(",")}</span> </h3>`)
}

function mathOpr() {
    do {
        var circleRadius = prompt(`What is the value of your circle radius`)
    } while (isNaN(circleRadius) || circleRadius === null || circleRadius === "" || circleRadius == '0' || circleRadius < 0)

    alert(`Total area of circle is: ${((Math.pow(parseFloat(circleRadius),2))*Math.PI).toFixed(3)}`)

    do {
        var num = prompt(`What is the value you want to calculate its square root`)
    } while (isNaN(num) || num === null || num === "" || num < 0)

    alert(`Square root of ${num} is ${(Math.sqrt(parseFloat(num))).toFixed(5)}`)

    do {
        var angle = prompt(`What is the angle you want to calculate its cos value`)
    } while (isNaN(angle) || angle === null || angle === "" || angle < 0 || angle > 360)

    document['write'](`cos ${angle}\xB0 is ${(Math.cos((parseFloat(angle))*(Math.PI / 180)).toFixed(4))}`)

}


var childWin
var timerID

function openWin() {
    childWin = open('', '', 'width=200,height=200')
}

function moveWin() {
    timerID = setInterval(function () {
        var x = Math.floor(Math.random() * (window.outerWidth))
        var y = Math.floor(Math.random() * (window.outerHeight))
        childWin.moveTo(x, y);
        childWin.focus()
    }, 200)
}

function stopMove() {
    clearInterval(timerID)
}


function winType() {

    var myText = "Hello from Akram Harazem"
    var Childwind = open('', 'childWindow', 'width=400,hight=400')
    var i = 0
    var typeID = setInterval(function () {
        Childwind.document.write(`${myText[i]}`)
        i++
        if (i > myText.length - 1) {
            clearInterval(typeID)
            setTimeout(function () {
                Childwind.close()
            }, 2000)
        }
    }, 100)
}

function winScroll() {
    var Childwind = open('', 'childWindow', 'width=400,hight=400')
    Childwind.document.write(`<p style ="font-size: 300px" class="a">This is some text.</p>`)

    var scrollerID = setInterval(function () {
        if (Childwind.document.body.scrollHeight == Childwind.document.body.scrollTop + Childwind.innerHeight) {
            clearInterval(scrollerID)
        } else {
            Childwind.scrollBy(0, 15)
        }
    }, 50)
}