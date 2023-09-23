
// const submit = document.getElementById('submit-form');

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const form = {
        name,
        email,
        city,
        zipCode,
        status
    }
    return form

}

const formData = handleGetFormData()

function isNumber(stringNumber) {

    if (isNaN(stringNumber)) return false
    return true
}

function checkboxIsChecked() {
    const { status } = handleGetFormData()
    return status
}

function validateFormData(formData) {
    console.log(formData.zipCode)
    if (formData !== null
        && isNumber(formData.zipCode)
        && checkboxIsChecked()) {
        console.log('benarrr')
        return true
    }

    else {
        console.log('salah')
        return false
    }

}

function submit() {
    const warning = document.getElementById('warning')
    if (validateFormData(formData)) {
    console.log('berhasil')
    warning.innerHTML = ''}
    else {
    console.log('gagal')
    warning.innerHTML = 'Periksa form anda sekali lagi'}
}

const form = document.getElementsByTag('form')[0];
form.addEventListener('form', (event) => {
    event.preventDefault()
    submit()
})