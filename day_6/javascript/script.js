var Band_list = document.getElementById('Band_list')
var Artist_list = document.getElementById('Artist_list')
var data_keys_arr = []
var data_values_arr = []

var xhr = new XMLHttpRequest()
xhr.open('GET', '../JSON/rockbands.json')
xhr.send()

console.log(xhr)
xhr.onreadystatechange = function () {
console.log(xhr)

    if (xhr.readyState === 4) {
        if (xhr.status >= 200 || xhr.status < 300) {
            var data = JSON.parse(xhr.responseText)
            // console.log(data);
            var j = 0
            // var data_keys_arr = []
            // var data_values_arr = []
            for (var key in data) {
                var dataValue = data[key]
                data_keys_arr[j] = key
                data_values_arr[j] = dataValue
                j++
            }

                        console.log(data);
                        console.log(data[key]);


            // console.log(data_keys_arr);
            // console.log(data_values_arr);
            // console.log(data_values_arr[0][0].name);

            for (var i = 0; i <= data_keys_arr.length; i++) {
                var Band_options = Band_list.appendChild(document.createElement('option'))
                if (i === 0) {
                    Band_options.innerHTML = "Please select"
                } else {
                    Band_options.innerHTML = data_keys_arr[i - 1]
                }
                Band_list.onchange = fillartist
            }

            var Band_Index = 0

            function fillartist() {
                Band_Index = this.selectedIndex - 1
                Artist_list.innerHTML = ''
                for (var k = 0; k <= data_values_arr[Band_Index].length; k++) {
                    var Artist_options = Artist_list.appendChild(document.createElement('option'))
                    if (k === 0) {
                        Artist_options.innerHTML = "Please select"
                    } else {
                        Artist_options.innerHTML = data_values_arr[Band_Index][k - 1].name
                    }
                    Artist_list.onchange = OpenUrl
                }
            }

            function OpenUrl() {
                var Band_URL = this.selectedIndex - 1
                console.log(data_values_arr[Band_Index][Band_URL]);
                location.assign(data_values_arr[Band_Index][Band_URL].value)
                // window.open(data_values_arr[Band_Index][Band_URL].value,'_blank')
            }

        } else {
            throw ('there is ERROR')
        }
    }
}
console.log(xhr)

// xhr.send()
console.log(xhr)

//  console.log(data_keys_arr);
//             console.log(data_values_arr);

// for (var i = 0; i <= data_keys_arr.length; i++) {
//     var Band_options = Band_list.appendChild(document.createElement('option'))
//     if (i === 0) {
//         Band_options.innerHTML = "Please select"
//     } else {
//         Band_options.innerHTML = data_keys_arr[i - 1]
//     }
//     Band_list.onchange = fillartist
// }

// var Band_Index = 0

// function fillartist() {
//     Band_Index = this.selectedIndex - 1
//     Artist_list.innerHTML = ''
//     for (var k = 0; k <= data_values_arr[Band_Index].length; k++) {
//         var Artist_options = Artist_list.appendChild(document.createElement('option'))
//         if (k === 0) {
//             Artist_options.innerHTML = "Please select"
//         } else {
//             Artist_options.innerHTML = data_values_arr[Band_Index][k - 1].name
//         }
//         Artist_list.onchange = OpenUrl
//     }
// }

// function OpenUrl() {
//     var Band_URL = this.selectedIndex - 1
//     console.log(data_values_arr[Band_Index][Band_URL]);
//     location.assign(data_values_arr[Band_Index][Band_URL].value)
//     // window.open(data_values_arr[Band_Index][Band_URL].value,'_blank')
// }