var data = getAllcookies()

var counter = parseInt(getCookie ('count'))
counter++
createCookie("count", counter)

document.getElementsByTagName('img')[0].src = data['user_gender']
document.getElementsByTagName ('h1')[0].innerHTML =`Welcome <span style="color:${data['user_color']};">${data['user_name']}</span>, your age is ${data['user_age']}, you visited this site <span style="color:${data['user_color']};">${data['count']}</span> times`
