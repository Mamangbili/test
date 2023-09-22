const name = document.getElementById('name');
const city = document.getElementById('city');
const email = document.getElementById('email');
const zipCode = document.getElementById('zip-code');
const submit = document.getElementById('submit-form');
const status = document.getElementById('status');
const form = document.getElementsByTagName('form')[0];
const warning = document.getElementById('warning')

const formData = {
    name,city,email,zipCode,status
}

function isNumber(code) {
    if(code !== '') code = parseInt(code)
    
    return (typeof code === 'number' && !isNaN(code));
}

function checkBoxisChecked(element){
    return element.checked
}

function validateFormData(formData){
    const {name,city,email,zipCode,status} = formData
    if(formData!==null && isNumber(zipCode.value) && checkBoxisChecked(status)){
        return true
    }
    return false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form')
    if(validateFormData(formData)){
        warning.innerHTML = ''
    }
    else warning.innerHTML='Periksa form anda sekali lagi'
    
    
})
