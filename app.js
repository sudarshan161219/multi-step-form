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

window.addEventListener("load", () => {
  formPageOne()
  // formPageTwo()

});



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

     <div class="form-btn-container">
      <button type="submit" class="submit" id="submit">Next Step</button>
    </div>
      </form>


 
    </div>`
    btns[0].style.backgroundColor = '#bfe2fd'
    btns[0].style.color = '#02295a'

  const nextBtn = document.querySelector('.submit')
  const nameI = document.getElementById('name');
  const emailI = document.getElementById('email');
  const phoneI = document.getElementById('phone');
  const form = document.getElementById('form');
  const btn = document.querySelector('#submit');
  const alertName = document.querySelector('.input-name .alert')
  const alertEmail = document.querySelector('.input-email .alert')
  const alertPhone = document.querySelector('.input-phone .alert')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    const values = [...formData.values()];

    const { name, email, phone } = data


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailI.style.outline = '1px solid #473dff'
    } else {
      emailI.style.outline = '1px solid #ed3548'
    }


    name === '' ? alertName.classList.add('show-alert') : alertName.classList.remove('show-alert')
    email === '' ? alertEmail.classList.add('show-alert') : alertEmail.classList.remove('show-alert')
    phone === '' ? alertPhone.classList.add('show-alert') : alertPhone.classList.remove('show-alert')

    // if (name && email && phone) {
    //   e.currentTarget.reset()
    // } else {
    //   return
    // }

    if(!values.includes('')){
    btns[0].style.backgroundColor = ''
    btns[0].style.color = '#FFF'
    formPageTwo()
    }else{
      console.log('empty');
    }

  })

  emailI.addEventListener('change', (e) => {

    let myEmail = e.target.value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myEmail)) {
      emailI.style.outline = '1px solid #473dff'
      return (true)
    } else {
      emailI.style.outline = '1px solid #ed3548'
      return (false)
    }

  })


}


function formPageTwo() {
  btns[1].style.backgroundColor = '#bfe2fd'
  btns[1].style.color = '#02295a'
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
<span class="span-blue" >2 months free</span>
</div>
</div>
</li>


<li class="box-list" data-index="1">
<div class="box">
<img src="./assets/images/icon-advanced.svg" alt="advanced" />
<div class="box-info">
<span class="span-bold" >Advanced</span>
<span class="span-light" >$12/mo</span>
<span class="span-blue" >2 months free</span>
</div>
</div>
</li>


<li class="box-list" data-index="2">
<div class="box">
<img src="./assets/images/icon-pro.svg" alt="pro" />
<div class="box-info">
<span class="span-bold" >Pro</span>
<span class="span-light" >$15/mo</span>
<span class="span-blue" >2 months free</span>
</div>
</div>
</li>

</ul>


<div class="toggle-container">
<span class="toggle-month"> Monthly</span>
<label class="switch">
<input type="checkbox" class="toggle" />
<span class="slider round"></span>
</label>
<span class="toggle-year">Yearly</span>
</div>

<div class="btn-container">
<button class="prev">Go Back</button>
<button type="submit" class="submit" id="submit">Next Step</button>
</div>

    </div>`


  const boxlistBtn = document.querySelectorAll('.box-list')
  const checkbox = document.querySelector('.toggle')
  const toggle = document.querySelector('.switch')
  const spanLight = document.querySelectorAll('.span-light')
  const spanBlue = document.querySelectorAll('.span-blue')
  const month = document.querySelector('.toggle-month')
  const year = document.querySelector('.toggle-year')
  const prevBtn = document.querySelector('.prev')


  boxlistBtn.forEach((btn, idx) => (
    btn.addEventListener("click", (e) => {

      const lastCard = document.querySelectorAll('.box-list-style')
      if (lastCard) {
        lastCard[0].classList.remove('box-list-style')
      }
      btn.classList.add('box-list-style');
    })
  ))


  checkbox.checked ? year.style.color = '#9699ab' : year.style.color = '#02295a'
  !checkbox.checked ? month.style.color = '#9699ab' : month.style.color = '#02295a'

  toggle.addEventListener("click", () => {
    if (checkbox.checked) {
      year.style.color = '#9699ab'
      spanBlue.forEach((item) => {
        item.classList.add('show-span-blue')
      })
      // spanLight.forEach((item, idx) => (
      spanLight[0].innerText = '$90/yr',
        spanLight[1].innerText = '$120/yr',
        spanLight[2].innerText = '$150/yr'
      // ))

    } else {
      year.style.color = '#02295a'
      spanBlue.forEach((item) => {
        item.classList.remove('show-span-blue')
      })
      // spanLight.forEach((item) => (
      spanLight[0].innerText = '$9/mo',
        spanLight[1].innerText = '$12/yr',
        spanLight[2].innerText = '$15/yr'
      // ))
    }


    !checkbox.checked ? month.style.color = '#9699ab' : month.style.color = '#02295a'
  })


  prevBtn.addEventListener("click", () => {
    btns[1].style.backgroundColor = ''
    btns[1].style.color = '#FFF'
    formPageOne()
  })

}

// btns.forEach((btn) => (
//   btn.addEventListener("click", () => {
//     formPageOne()
//   })
// ))