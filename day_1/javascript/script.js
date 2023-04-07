// task 1 6 heading
function heading() {

    document.write(`<h3>Headings</h3> <hr>`)
    var userInput = prompt("Enter a message")
    for (var i = 1; i <= 6; i++) {
        document.write(`<h${i}>${userInput}</h${i}>`)
    }
}

// task 2 user input sum and exit when enter 0
function numSum() {

    var sum = 0
    var userInput_2 = prompt("Enter a number")
    while (userInput_2 !== "0") {
        if (isNaN(userInput_2) || userInput_2 === "" || userInput_2 == null) // validation
        {
            userInput_2 = prompt("this is not a number please enter a number")
        } else {
            sum += parseInt(userInput_2) //
            userInput_2 = prompt("Enter another number or 0 to exit")
        }
    }
    document.write(`<h3>Sum is: ${sum} </h3>`)
}

// task 3.1 palindrome word
function palind() {
    var str = new String(prompt("Enter a string:"))
    if (str == "null") {
        var exitVal = confirm("do you want to exit?")
        if (exitVal) {
            alert("Thanks")
        } else {
            palind()
        }
    } else {
        while (!isNaN(str)) {
            str = new String(prompt("This is not a string please Enter a string:"))
        }

        var caseSen = confirm("Do you want to consider case sentivity?")
        if (!caseSen) {
            str = str.toLowerCase()
        }
        // compare letter of string
        var isValide = true
        for (var i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                isValide = false
                break;
            }
        }
        if (isValide) {
            document.write(`<h3>${str} is a palindrome</h3>`)

        } else {
            document.write(`<h3>${str} is not a palindrome </h3>`)
        }
    }

}

// task 3.2 user info
function userInfo() {
    // name choose and validation
    var nameRegex = /^[a-zA-z ][^\d]{2,30}$/
    var name = prompt("Please enter a valid name (2 to 30 char):")
    if (name == null) {
        alert("thanks, if you want enter your info again press info button")
    } else {
        while (!nameRegex.test(name)) {
            name = prompt("Please enter a valid name (2 to 30 char):")
        }

        // phone number choose and validation
        var phoneNumberRegex = /^\d{6,8}$/
        var phoneNumber = prompt("Please enter a valid phone number (max 8 num):")
        if (phoneNumber == null) {
            alert("thanks, if you want enter your info again press info button")
        } else {
            while (!phoneNumberRegex.test(phoneNumber)) {
                phoneNumber = prompt("Please enter a valid phone number (max 8 num):")
            }

            // mobile number choose and validation
            var mobileNumberRegex = /^(010|011|012)\d{8}$/
            var mobileNumber = prompt("Please enter a valid mobile number (max 11 num start with 010 or 011 or 012):")
            if (mobileNumber == null) {
                alert("thanks, if you want enter your info again press info button")
            } else {
                while (!mobileNumberRegex.test(mobileNumber)) {
                    mobileNumber = prompt("Please enter a valid mobile number (max 11 num start with 010 or 011 or 012):")
                }

                // email choose and validation
                var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/
                var email = prompt("Please enter a valid email:")
                if (email == null) {
                    alert("thanks, if you want enter your info again press info button")
                } else {
                    while (!emailRegex.test(email)) {
                        email = prompt("Please enter a valid email:")
                    }

                    // color choose and validation
                    do {
                        var color = prompt("Please choose a color (red, green, and blue)").toLowerCase()
                    } while (!(/(red|green|blue)/.test(color)))
                    // color !== "red" && color !== "green" && color !== "blue"
                    document.write(`<h1>User INFO</h1> <hr>`)

                    // display info with chosen color
                    switch (color) {
                        case "red":
                            document.write(`<h3 style="color:red;">Welcome dear guest: <span style="color:black;">${name}</span> </h3>`)
                            document.write(`<h3 style="color:red;">Your telephone number is: <span style="color:black;">${phoneNumber}</span> </h3>`)
                            document.write(`<h3 style="color:red;">Your mobile number is: <span style="color:black;">${mobileNumber}</span> </h3>`)
                            document.write(`<h3 style="color:red;">Your email address is: <span style="color:black;">${email}</span> </h3>`)
                            break;
                        case "green":
                            document.write(`<h3 style="color:green;">Welcome dear guest: <spanstyle="color:black;">${name}</span> </h3>`)
                            document.write(`<h3 style="color:green;">Your telephone number is: <span style="color:black;">${phoneNumber}</span> </h3>`)
                            document.write(`<h3 style="color:greend;">Your mobile number is: <span style="color:black;">${mobileNumber}</span> </h3>`)
                            document.write(`<h3 style="color:green;">Your email address is: <span style="color:black;">${email}</span> </h3>`)
                            break;
                        case "blue":
                            document.write(`<h3 style="color:blue;">Welcome dear guest: <span style="color:black;">${name}</span> </h3>`)
                            document.write(`<h3 style="color:blue;">Your telephone number is: <span style="color:black;">${phoneNumber}</span> </h3>`)
                            document.write(`<h3 style="color:blue;">Your mobile number is: <span style="color:black;">${mobileNumber}</span> </h3>`)
                            document.write(`<h3 style="color:blue;">Your email address is: <span style="color:black;">${email}</span> </h3>`)
                            break;
                    }
                }

            }

        }

    }
}

// task 3.3 count 'e' in string
function countE() {
    // var strRegex

    // string entring and validation
    var str = new String(prompt("Please enter string"))
    if (str == "null") {
        alert("thanks, if you want enter string again press count button")
    } else {
        while (!isNaN(str) || str === "") {
            str = new String(prompt("Please enter valid string"))
        }
        var newStr = str.toLowerCase() // lowercase string letters
        var count = 0
        for (var i = 0; i < newStr.length; i++) {
            if (newStr[i] === 'e') {
                count++
            }
        }
        document.write(`<h3>"${str}" contains ${count} of letter 'e'</h3>`)
    }
}

// !(/^[a-zA-Z]+$/.test(str))