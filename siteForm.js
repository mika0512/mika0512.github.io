function radioOption() {
    let radio = document.getElementById("hiring");
    let hiring_form = document.getElementById("hiringForm");
    
    radio.checked == true ? hiring_form.style.display = "block" : hiring_form.style.display = "none";
}

function validateForm() {
    let input = document.getElementById("form");
    let valid = false;

    if(input.name.value && input.email.value && input.address.value && input.cities.value && input.PostalCode.value)
        valid = true;
    return valid;
}
