// '?user_name=asdas+asd&user_add=asdas-asd-as&user_gender=Male&user_num=01223450060&interests=asd+asd+zxc+rer'
var data = location.search.substring(1,location.search.length).split('&')
var Arr = []
for (var i=0;i<data.length;i++){
    Arr[data[i].split('=')[0]] = data[i].split('=')[1].split(/[\s,(%2C)(%0D%0A)+]+/).join(', ')
}

document.getElementsByTagName ('h1')[0].innerText =`Welcome ${Arr['user_name']} .. you are a ${Arr['user_gender']}, your Mobile Number is: ${Arr['user_num']}, your address is ${Arr['user_add']} and your interests are ${Arr['interests']}` 
