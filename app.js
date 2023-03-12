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
const desktopBtns = document.querySelectorAll(".lg-span-list-btn")
const btn = document.querySelector('#submit');

window.addEventListener("load", () => {
  formPageOne()
  // formPageTwo()
  // formPageThree()
  // formPageFour()
  // formPageFive()
});



function formPageOne() {

  const loaclData = localStorage.getItem("data")
  const parsedData = JSON.parse(loaclData)

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
            value=${loaclData ? parsedData.name : "Stephen King"}
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
            value=${loaclData ? parsedData.email : "stephenking@lorem.com"}
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
            type="tel"
            name="phone"
            value=${loaclData ? parsedData.phone : "+1-234-567-890"}
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
  desktopBtns[0].style.backgroundColor = '#bfe2fd'
  desktopBtns[0].style.color = '#02295a'

  const emailI = document.getElementById('email');
  const form = document.getElementById('form');
  const alertName = document.querySelector('.input-name .alert')
  const alertEmail = document.querySelector('.input-email .alert')
  const alertPhone = document.querySelector('.input-phone .alert')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    const values = [...formData.values()];

    const { name, email, phone } = data

    localStorage.setItem('data', JSON.stringify(data));

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailI.style.outline = '1px solid #473dff'
    } else {
      emailI.style.outline = '1px solid #ed3548'
    }


    name === '' ? alertName.classList.add('show-alert') : alertName.classList.remove('show-alert')
    email === '' ? alertEmail.classList.add('show-alert') : alertEmail.classList.remove('show-alert')
    phone === '' ? alertPhone.classList.add('show-alert') : alertPhone.classList.remove('show-alert')

    if (!values.includes('')) {
      btns[0].style.backgroundColor = ''
      btns[0].style.color = '#FFF'
      desktopBtns[0].style.backgroundColor = ''
      desktopBtns[0].style.color = ''
      formPageTwo()
    } else {
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
  desktopBtns[1].style.backgroundColor = '#bfe2fd'
  desktopBtns[1].style.color = '#02295a'

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
<P class="light">$<span class="span-light" >9/mo</span></P>
<span class="span-blue" >2 months free</span>
</div>
</div>
</li>


<li class="box-list" data-index="1">
<div class="box">
<img src="./assets/images/icon-advanced.svg" alt="advanced" />
<div class="box-info">
<span class="span-bold" >Advanced</span>

<P class="light">$<span class="span-light" >12/mo</span></P>
<span class="span-blue" >2 months free</span>
</div>
</div>
</li>


<li class="box-list" data-index="2">
<div class="box">
<img src="./assets/images/icon-pro.svg" alt="pro" />
<div class="box-info">
<span class="span-bold" >Pro</span>
<P class="light">$<span class="span-light" >15/mo</span></P>
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
  const spanBold = document.querySelectorAll('.span-bold')
  const spanLight = document.querySelectorAll('.span-light')
  const spanBlue = document.querySelectorAll('.span-blue')
  const month = document.querySelector('.toggle-month')
  const year = document.querySelector('.toggle-year')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.submit')

  let price;

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

      spanLight[0].innerText = '90/yr',
        spanLight[1].innerText = '120/yr',
        spanLight[2].innerText = '150/yr'

      boxlistBtn.forEach((item, idx) => {
        if (item.classList.contains('box-list-style')) {
          price = spanLight[idx].innerText
        }
      })

    } else {
      year.style.color = '#02295a'
      spanBlue.forEach((item) => {
        item.classList.remove('show-span-blue')
      })

      spanLight[0].innerText = '9/mo',
        spanLight[1].innerText = '12/mo',
        spanLight[2].innerText = '15/mo'

      if (!checkbox.checked) {
        boxlistBtn.forEach((item, idx) => {
          if (item.classList.contains('box-list-style')) {
            price = spanLight[idx].innerText
          }
        })
      }

    }


    !checkbox.checked ? month.style.color = '#9699ab' : month.style.color = '#02295a'
  })


  prevBtn.addEventListener("click", () => {
    btns[1].style.backgroundColor = ''
    btns[1].style.color = '#FFF'
    desktopBtns[1].style.backgroundColor = ''
    desktopBtns[1].style.color = ''
    formPageOne()
  })

  nextBtn.addEventListener("click", () => {
    btns[1].style.backgroundColor = ''
    btns[1].style.color = '#FFF'
    desktopBtns[1].style.backgroundColor = ''
    desktopBtns[1].style.color = ''
    boxlistBtn.forEach((item, idx) => {
      if (item.classList.contains('box-list-style')) {
        price = spanLight[idx].innerText
        plan = spanBold[idx].innerText
        localStorage.setItem('price', JSON.stringify(price));
        localStorage.setItem('plan', JSON.stringify(plan));
        formPageThree()
      }
    })
  })


}

function formPageThree() {

  const localPrice = localStorage.getItem("price")
  const parsedData = JSON.parse(localPrice)
  const checkParsedData = parsedData.includes('mo')


  btns[2].style.backgroundColor = '#bfe2fd'
  btns[2].style.color = '#02295a'
  desktopBtns[2].style.backgroundColor = '#bfe2fd'
  desktopBtns[2].style.color = '#02295a'

  formContainer.innerHTML = `
  <div class="content-container">
    <div class="info">
         <div class="info">
           <h1 class="info-heading"> Pick add-ons</h1>
            <p class="info-para">
          Add-ons help enhance your gaming experience.
     </p>
    </div>

<ul class="boxes boxes-desktop-li">

<li class="box-list box-desktop-list" data-index="0">
<div class="box box-desktop-li">
<label class="container-checkbox">
  <input type="checkbox" class="checkbox">
  <span class="checkmark"></span>
</label>

<div class="box-info-container">
<div class="box-info">
<span class="span-bold" >Online service</span>
<span class="span-light" >Access to multiplayer games</span>
</div>

<p class= "span-price-p">
+$<span class="span-price">${checkParsedData ? 1 : 10}</span>
${checkParsedData ? "/mo" : '/yr'}
</p>



</div>
</div>
</li>


<li class="box-list box-desktop-list" data-index="1">
<div class="box box-desktop-li">

<label class="container-checkbox">
  <input type="checkbox" class="checkbox">
  <span class="checkmark"></span>
</label>

<div class="box-info-container">
<div class="box-info">
<span class="span-bold" >Larger storage</span>
<span class="span-light" > Extra 1TB of cloud save</span>
</div>

<p class= "span-price-p">
+$<span class="span-price">${checkParsedData ? 2 : 20}</span>
${checkParsedData ? "/mo" : '/yr'}
</p>

</div>

</div>
</li>


<li class="box-list box-desktop-list" data-index="2">
<div class="box box-desktop-li">

<label class="container-checkbox">
  <input type="checkbox" class="checkbox">
  <span class="checkmark"></span>
</label>

<div class="box-info-container">
<div class="box-info">
<span class="span-bold" >Customizable Profile</span>
<span class="span-light" >Custom theme on your profile</span>
</div>
<p class= "span-price-p">
+$<span class="span-price">${checkParsedData ? 2 : 20}</span>
${checkParsedData ? "/mo" : '/yr'}
</p>
</div>

</div>
</li>

</ul>




<div class="btn-container">
<button class="prev">Go Back</button>
<button type="submit" class="submit" id="submit">Next Step</button>
</div>

  </div>`

  const checkbox = document.querySelectorAll(".checkbox")
  const boxLi = document.querySelectorAll('.box-list')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.submit')
  const spanLight = document.querySelectorAll('.span-light')
  const spanBold = document.querySelectorAll('.span-bold')
  const spanPrice = document.querySelectorAll('.span-price')
  const loaclNum = localStorage.getItem("addNum")
  const localAddons = localStorage.getItem("addons")
  let listItems = []
  let listNum = []



  checkbox.forEach((check, idx) => (
    check.addEventListener("click", () => {
      boxLi[idx].classList.toggle('box-list-style')

      if (check.checked) {
        const addOns =
        {
          title: spanBold[idx].innerText,
          info: spanLight[idx].innerText,
          price: spanPrice[idx].innerText,
        }
        listNum.push(spanPrice[idx].innerText)
        listItems.push(addOns)
        localStorage.setItem('addons', JSON.stringify(listItems));
        localStorage.setItem('addNum', JSON.stringify(listNum));
      }

      else {
        // loaclNum ? localStorage.removeItem("addNum") : null
        listNum.pop(spanPrice[idx].innerText)
      }
    })
  ))


  prevBtn.addEventListener("click", () => {
    btns[2].style.backgroundColor = ''
    btns[2].style.color = '#FFF'
    desktopBtns[2].style.backgroundColor = ''
    desktopBtns[2].style.color = ''
    formPageTwo()
  })



  nextBtn.addEventListener("click", () => {
    btns[2].style.backgroundColor = ''
    btns[2].style.color = '#FFF'
  desktopBtns[2].style.backgroundColor = ''
  desktopBtns[2].style.color = ''
    checkbox.forEach((check, idx) => {

      if (!check.checked) {
        loaclNum ? localStorage.removeItem("addNum") : null
        localAddons ? localStorage.removeItem("addons") : null
        // listItems.pop(addOns)
        listNum.pop(spanPrice[idx].innerText)
      }
    })
    formPageFour()
  })

}


function formPageFour() {

  btns[3].style.backgroundColor = '#bfe2fd'
  btns[3].style.color = '#02295a'
  desktopBtns[3].style.backgroundColor = '#bfe2fd'
  desktopBtns[3].style.color = '#02295a'

  const localPrice = localStorage.getItem("price")
  const plan = localStorage.getItem("plan")
  const addOnS = localStorage.getItem("addons")
  const parsedAddons = JSON.parse(addOnS)
  const parsedPrice = JSON.parse(localPrice)
  const parsedPlan = JSON.parse(plan)
  const loaclNum = localStorage.getItem("addNum")
  const parsedDataNum = JSON.parse(loaclNum)
  let uniqueArray

  function removeDuplicates() {
    if (parsedAddons.length > 2) {
      let jsonObject = parsedAddons.map(JSON.stringify)

      let uniqueSet = new Set(jsonObject);
      uniqueArray = Array.from(uniqueSet).map(JSON.parse);

      return uniqueArray
    } else {
      return parsedAddons
    }
  }
  if (addOnS) {
    removeDuplicates()
  }


  let sum = 0;
  let strLPrice = parsedPrice.split('mo').join("").split('/').join("").split('yr').join("").split('+').join("").split('$').join("")
  let toNum = Number(strLPrice)


  if (loaclNum) {
    let numberArr = parsedDataNum.map(Number)
    sumArray(numberArr);

  }


  function sumArray(array) {

    array.forEach(item => {
      sum += item;
    });
    return sum;
  }

  let total = sum + toNum


  formContainer.innerHTML = `
  <div class="content-container">
    <div class="info">
         <div class="info">
           <h1 class="info-heading">Finishing up</h1>
            <p class="info-para">
         Double-check everything looks OK before confirming.
     </p>
    </div>


<ul class="finishing-up-li">

<li class="plan-li">
<div class="span-cont" >
<p class="para-price">
${parsedPlan} 
 (<span>${parsedPrice.includes('mo') ? 'Monthly' : 'yearly'}</span>)
 </p>
<span class="span-change">Change</span>
</div>
<span class="para-span-price">$${parsedPrice}</span>
</li>

${addOnS ?
      parsedAddons.length > 2 ? uniqueArray.map(item => (
        (`  <li class='plan-li' > 
 <span class="li-span"> ${item.title}</span>
 <span class="li-span-price">+$${item.price}/${parsedPrice.includes('mo') ? 'mo' : 'yr'}</span>
 </li>`)

      )).join('<br\>') :

        parsedAddons.map(item => (
          (`  <li class='plan-li' > 
 <span class="li-span"> ${item.title}</span>
 <span class="li-span-price">+$${item.price}/${parsedPrice.includes('mo') ? 'mo' : 'yr'}</span>
 </li>`)

        )).join('<br\>')
      :
      ''
    }
  <li class='plan-li-last' > 
  <p class="para-total">
  Total 
   (<span>per ${parsedPrice.includes('mo') ? 'month' : 'year'}</span>)
   </p>

   <p class="para-total-bold">
   +$<span>${total}/${parsedPrice.includes('mo') ? 'mo' : 'yr'}</span>
    </p>
 </li>

</ul>


<div class="btn-container">
<button class="prev">Go Back</button>
<button type="submit" class="Confirm" id="submit">Confirm</button>
</div>

  </div>`

  const nextBtn = document.querySelector('.Confirm')
  const prevBtn = document.querySelector('.prev')
  const changeBtn = document.querySelector('.span-change')

  prevBtn.addEventListener("click", () => {
    btns[3].style.backgroundColor = ''
    btns[3].style.color = '#FFF'
    desktopBtns[3].style.backgroundColor = ''
    desktopBtns[3].style.color = ''
    formPageThree()
  })

  changeBtn.addEventListener("click", () => {
    formPageTwo()
  })


  nextBtn.addEventListener("click", () => {
    btns[3].style.backgroundColor = ''
    btns[3].style.color = '#FFF'
    desktopBtns[3].style.backgroundColor = ''
    desktopBtns[3].style.color = ''
    formPageFive()
  })

}





function formPageFive() {
  formContainer.innerHTML = `
  <div class="content-container">
  <div class="content">
  <img src="./assets/images/icon-thank-you.svg" alt="thank-you" />

  <div class="text-content">
  <h1>Thank you!</h1>
  <P>Thanks for confirming your subscription! We hope you have fun 
using our platform. If you ever need support, please feel free 
to email us at support@loremgaming.com.</P>
  </div>
  </div>
  </div>
  `

  setTimeout(formPageOne, 5000)
}