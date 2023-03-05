const nameI = document.getElementById('name');
const emailI = document.getElementById('email');
const phoneI = document.getElementById('phone');
const form = document.getElementById('form');
const labelInput = document.querySelector('.input-email')
const alertName = document.querySelector('.input-name .alert')
const alertEmail = document.querySelector('.input-email .alert')
const alertPhone = document.querySelector('.input-phone .alert')
// const alert = document.querySelector('.alert')
const btn = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    // const emailData = formData.get('email')
    // const values = [...formData.values()];
    const data = Object.fromEntries(formData)


    const { name, email, phone } = data


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailI.style.outline = '1px solid #473dff'
    } else {
        emailI.style.outline = '1px solid #ed3548'
    }


    name === '' ? alertName.classList.add('show-alert') : alertName.classList.remove('show-alert')
    email === '' ? alertEmail.classList.add('show-alert') : alertEmail.classList.remove('show-alert')
    phone === '' ? alertPhone.classList.add('show-alert') : alertPhone.classList.remove('show-alert')

    if (name && email && phone) {
        e.currentTarget.reset()
    } else {
        return
    }

})


// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const formData = new FormData(form);
//     const values = [...formData.entries()];
//     console.log(values);
//     })

emailI.addEventListener('change', (e) => {

    let myEmail = e.target.value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myEmail)) {
        emailI.style.outline = '1px solid #473dff'
        return (true)
    } else {
        emailI.style.outline = '1px solid #ed3548'
        return (false)
    }

    // if(myEmail === ''){

    // }else{

    // }

})

function alertHandler() {

}