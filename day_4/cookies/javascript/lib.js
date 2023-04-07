// //library
// getcookie
// createCookie
// deleteCookie
// hasCookie
// getAllcookies

function createCookie(cookieName, cookieValue, exdays) {
    if (typeof cookieName !== "string" || cookieValue === undefined || (exdays !== undefined && !isFinite(exdays))) {
        throw new Error("Invalid input parameters for createCookie() function.")
    }

    if (exdays === undefined) {
        document.cookie = cookieName + "=" + cookieValue
    } else {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = "expires=" + d.toUTCString()
        document.cookie = cookieName + "=" + cookieValue + ";" + expires
    }
}



function getCookie(cookieName) {
    if (typeof cookieName !== "string") {
        throw new Error('Invalid input parameter, please enter valid cookie name.')
    } else {
        var arr = document.cookie.split("; ")
        var data = []
        for (var i = 0; i < arr.length; i++) {
            data[arr[i].split("=")[0]] = arr[i].split("=")[1]
        }

        if (data[cookieName] === undefined) {
            throw new Error('Cookie with this name does not exist.')
        } else {
            return data[cookieName]
        }
    }

}

function hasCookie(cookieName) {
    if (!cookieName || typeof cookieName !== "string") {
        throw new Error('Invalid input parameter, please enter valid cookie name.')
    } else {
        var arr = document.cookie.split("; ")
        var data = []
        for (var i = 0; i < arr.length; i++) {
            data[arr[i].split("=")[0]] = arr[i].split("=")[1]
        }

        if (data[cookieName] !== undefined) {
            return true
        } else {
            return false
        }
    }
}

function getAllcookies() {
    var arr = document.cookie.split("; ")
    var data = []
    for (var i = 0; i < arr.length; i++) {
        data[arr[i].split("=")[0]] = arr[i].split("=")[1]
    }
    return data
}


function deleteCookie(cookieName) {
    if (!cookieName || typeof cookieName !== "string" || !hasCookie(cookieName)) {
        throw new Error('Invalid input parameter, please enter valid cookie name.')
    }
    document.cookie = cookieName + "=; Max-Age=0"
}



// function deleteCookie(cookieName, expires) {
//     var date = expires
//     document.cookie = cookieName + "=" + ";expires=" + date.toUTCString() - 1
// }


// function deleteCookie(cookieName) {
// if (getCookie(cookieName)){
// document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT"
// }
// }