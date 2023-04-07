// name choose and validation
document.getElementById('user_name').onblur = validateName

function validateName() {
    var nameRegex = /^[a-zA-Z][^\d]{2,30}$/
    var name = this.value
    if (!nameRegex.test(name)) {
        this.nextElementSibling.innerText = 'Name is invalid please use letters only and not exceed 30 letters';
        // alert("Name is invalid please use letters only and not exceed 30 letters");
        console.log(this);
        // this.focus()
        return false
    } else {
        this.nextElementSibling.innerText = '';
        return true
    }

}



document.getElementById('user_add').onblur = validateAdd

function validateAdd() {
    var addRegex = /^([a-zA-z0-9,-\s]{2,255})$/
    var address = this.value
    if (!addRegex.test(address)) {
        // alert("Address is invalid");
        this.nextElementSibling.innerText = 'Address is invalid please use letters, numbers, spaces, comma and slach';
        this.focus()
        return false
    } else {
        this.nextElementSibling.innerText = '';
        return true
    }

}

document.getElementById('user_num').onblur = validateNum

function validateNum() {
    var numRegex = /^(010|011|012)\d{8}$/
    var mobileNumber = this.value
    if (!numRegex.test(mobileNumber)) {
        this.nextElementSibling.innerText = 'Mobile number is invalid, please valid number starts with 010,011,012';
        // alert("Mobile number is invalid");
        this.focus()
        return false
    } else {
        this.nextElementSibling.innerText = '';
        return true
    }

}

document.getElementById('interests').onblur = validateInt

function validateInt() {
    var IntRegex = /^([a-zA-z0-9,-\s\.]+)$/
    var Int = this.value
    if (!IntRegex.test(Int)) {
        this.nextElementSibling.innerText = 'Text is invalid please use letters, numbers, spaces, comma and slach';
        // alert("Interests are invalid");
        this.focus()
        return false
    } else {
        this.nextElementSibling.innerText = '';
        return true
    }

}

function validateForm() {
    if (!confirm('Are you sure?')) {
        return false
    } else {
        validateName()
        validateAdd()
        validateNum()
        validateInt()

        return validateName() && validateAdd() && validateNum() && validateInt()
    }
}
