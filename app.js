const formContainer = document.querySelector('.form-container')
const nameI = document.getElementById('name');
const emailI = document.getElementById('email');
const phoneI = document.getElementById('phone');
const form = document.getElementById('form');
const labelInput = document.querySelector('.input-email')
const alertName = document.querySelector('.input-name .alert')
const alertEmail = document.querySelector('.input-email .alert')
const alertPhone = document.querySelector('.input-phone .alert')
const btns = document.querySelectorAll('.list-btn')
const btn = document.querySelector('#submit');

window.addEventListener("load", (event) => {
    // formPageOne() 
    formPageTwo()
});



// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData)


//     const { name, email, phone } = data


//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//         emailI.style.outline = '1px solid #473dff'
//     } else {
//         emailI.style.outline = '1px solid #ed3548'
//     }


//     name === '' ? alertName.classList.add('show-alert') : alertName.classList.remove('show-alert')
//     email === '' ? alertEmail.classList.add('show-alert') : alertEmail.classList.remove('show-alert')
//     phone === '' ? alertPhone.classList.add('show-alert') : alertPhone.classList.remove('show-alert')

//     if (name && email && phone) {
//         e.currentTarget.reset()
//     } else {
//         return
//     }

// })


// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const formData = new FormData(form);
//     const values = [...formData.entries()];
//     console.log(values);
//     })

// emailI.addEventListener('change', (e) => {

//     let myEmail = e.target.value

//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myEmail)) {
//         emailI.style.outline = '1px solid #473dff'
//         return (true)
//     } else {
//         emailI.style.outline = '1px solid #ed3548'
//         return (false)
//     }

// })

function formPageOne() {
    formContainer.innerHTML = `
    <div class="content-container">
      <div class="info">
        <h1 class="info-heading">Personal info</h1>
        <p class="info-para">
          Please provide your name, email address, and phone number
        </p>
      </div>

      <form id="form">
        <div class="label-input input-name">
          <div class="label-alert">
            <label for="name">Name</label>
            <span class="alert">This Field is required</span>
          </div>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div class="label-input input-email">
          <div class="label-alert">
            <label for="email">Email Address</label>
            <span class="alert">This Field is required</span>
          </div>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div class="label-input input-phone">
          <div class="label-alert">
            <label for="phone">Phone Number</label>
            <span class="alert">This Field is required</span>
          </div>

          <input
            id="phone"
            type="text"
            name="phone"
            placeholder=" e.g. +1 234 567 890"
          />
        </div>

        <div class="btn-container">
          <button type="submit" id="submit">Next Step</button>
        </div>
      </form>
    </div>`
}


function formPageTwo() {
    formContainer.innerHTML = `
    <div class="content-container">
      <div class="info">
        <h1 class="info-heading">Select your plan</h1>
        <p class="info-para">
        You have the option of monthly or yearly billing.
        </p>
      </div>

<ul class="boxes">

<li class="box-list box-list-style" data-index="0">
<div class="box">
<img src="./assets/images/icon-arcade.svg" alt="arcade" />
<div class="box-info">
<span class="span-bold" >Arcade</span>
<span class="span-light" >$9/mo</span>
</div>
</div>
</li>


<li class="box-list" data-index="1">
<div class="box">
<img src="./assets/images/icon-advanced.svg" alt="advanced" />
<div class="box-info">
<span class="span-bold" >Advanced</span>
<span class="span-light" >$12/mo</span>
</div>
</div>
</li>


<li class="box-list" data-index="2">
<div class="box">
<img src="./assets/images/icon-pro.svg" alt="pro" />
<div class="box-info">
<span class="span-bold" >Pro</span>
<span class="span-light" >$15/mo</span>
</div>
</div>
</li>

</ul>

    </div>`


    const boxlistBtn = document.querySelectorAll('.box-list')

    boxlistBtn.forEach((btn, idx) => (
        btn.addEventListener("click", (e) => {

            const lastCard = document.querySelectorAll('.box-list-style')
            if (lastCard) {
                lastCard[0].classList.remove('box-list-style')
            }
            btn.classList.add('box-list-style');
        })
    ))



}

btns.forEach((btn) => (
    btn.addEventListener("click", () => {
        formPageOne()
    })
))