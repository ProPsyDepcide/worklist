const inputName = document.createElement('input');
const inputPassword = document.createElement('input');
const info1 = document.createElement('div')
const info2 = document.createElement('div')
const reg = document.createElement('button')
const log = document.createElement('button')
// --------------------------------------------------------------------------------------
inputName.setAttribute('type', 'text');
info1.setAttribute('type', 'div');
info2.setAttribute('type', 'div');
reg.setAttribute('type', 'submit');
log.setAttribute('type', 'submit');
inputPassword.setAttribute('type', 'text');
inputPassword.style.flexDirection = 'column'
inputPassword.style.display = 'flex'
inputPassword.style.margin = '1%'
inputName.style.margin = '1%'
info1.style.marginLeft = '4%'
info2.style.marginLeft = '4%'
info2.style.marginBottom = '1%'
reg.style.marginLeft = '1%'
log.style.marginLeft = '1%'
// --------------------------------------------------------------------------------------
document.body.append(inputName);
document.body.append(info1);
document.body.append(inputPassword);
document.body.append(info2);
document.body.append(reg);
document.body.append(log);
// --------------------------------------------------------------------------------------
reg.innerHTML = 'зарегестрироваться'
log.innerHTML = 'войти'
info1.innerHTML = 'введите имя'
info2.innerHTML = 'введите пароль'
inputName.innerHTML = 'перове поле'
inputPassword.innerHTML = 'второе поле'

//=======================================================================================
const regExName = /^[a-zA-ZА-Яа-я\s]{3,}$/
const regExPassword = /^[a-zA-ZА-Яа-я-0-9\s]{3,}$/

inputName.style.outline = 'none'
inputPassword.style.outline = 'none'

inputName.addEventListener('keyup',()=> {
    if(regExName.test(inputName.value)){
        inputName.style.borderColor = 'green'
    }else{
        inputName.style.borderColor = 'red'
    }
  })

  inputPassword.addEventListener('keyup',()=> {
    if(regExPassword.test(inputPassword.value)){
        inputPassword.style.borderColor = 'green'
    }else{
        inputPassword.style.borderColor = 'red'
    }
  })
//=======================================================================================
reg.addEventListener('click',(e)=> {
    e.preventDefault()
  
    if(regExPassword.test(inputPassword.value) && regExPassword.test(inputName.value)){
        inputPassword.value = ''
        inputName.value = ''
        localStorage.setItem('nick', inputName);
        localStorage.setItem('password', inputPassword);
         window.location.href = 'site.html';

    }else{
        alert('ошибка в регистрации')
    }
  })

  

