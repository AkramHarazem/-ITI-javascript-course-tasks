var Band_list = document.getElementById('Band_list')
var Artist_list = document.getElementById('Artist_list')

var xhr = new XMLHttpRequest()

xhr.open('GET', '../JSON/rockbands.json')
xhr.send() 

 xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 || xhr.status < 300) {
            data = JSON.parse(xhr.responseText)
            console.log(data);
            Band_list.appendChild(document.createElement('option')).innerHTML = "Please select"
            Band_list.options[0].disabled = true
            for (var key in data) {
                var Band_options = Band_list.appendChild(document.createElement('option'))
                Band_options.innerHTML = key
            }

            Band_list.onchange = function () {
                Band_key = this.value
                Artist_list.innerHTML = ''
                Artist_list.appendChild(document.createElement('option')).innerHTML = "Please select"
                Artist_list.options[0].disabled = true
                for (var i = 0; i < data[Band_key].length; i++) {
                    var artist = data[Band_key][i]
                    var Artist_options = Artist_list.appendChild(document.createElement('option'));
                    Artist_options.innerHTML = artist.name
                    Artist_options.value = artist.value
                }
            }

        } else {
            throw ('ERROR')
        }
    }
}

Artist_list.addEventListener('change', function () {
    var selected_artist = this.options[this.selectedIndex]
    location.assign(selected_artist.value)
})