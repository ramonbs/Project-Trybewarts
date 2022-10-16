// Ramon G B S Requisito 3

const buttonEnter = document.querySelector('.button');

const verifyTryber = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};

buttonEnter.addEventListener('click', verifyTryber);

// --------------------------------------------------

const checkbox = document.getElementById('agreement');
const buttonCheck = document.getElementById('submit-btn');
buttonCheck.disabled = true;

// pedro E. Requesito 18
function verifyCheck() {
  const checkboxVerify = document.getElementById('agreement').value;
  console.log(checkboxVerify);
  if (buttonCheck.disabled === true) {
    buttonCheck.disabled = false;
  } else {
    buttonCheck.disabled = true;
  }
}

checkbox.addEventListener('click', verifyCheck);

// --------------------------------------------------

// pedro E. Requesito 20 - bonus
const spanCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
textarea.addEventListener('input', () => {
  const counter = 500 - textarea.value.length;
  spanCounter.innerText = counter;
});

// Ramon G B S Requisito 21 - bonus
const submitButton = document.querySelector('#submit-btn');

const formCreator = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'form-data');
  document.body.appendChild(form);
  return form;
};
formCreator();

const rescueInformation = () => {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelector('#textarea').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const allValue = [name, lastName, email, house, family, content, rate];
  return allValue;
};

const formConstructorFirst = () => {
  const allValue = rescueInformation();
  const form = document.querySelector('#form-data');
  form.innerHTML = `<p>Nome: ${allValue[0]} ${allValue[1]}</p><p>Email: ${allValue[2]}</p>`;
  const formArray = [];
  for (let i = 0; i < 6; i += 1) {
    if (document.querySelectorAll('.subject')[i].checked) {
      formArray.push(document.querySelectorAll('.subject')[i].value);
    }
  }
  form.innerHTML += `<p>Casa: ${allValue[3]}</p>`;
  form.innerHTML += `<p>Família: ${allValue[4]}</p>`;
  form.innerHTML += `<p>Matérias: ${formArray.toString().replaceAll(',', ', ')}</p>`;
  form.innerHTML += `<p>Avaliação: ${allValue[6]}</p>`;
  form.innerHTML += `<p>Observações: ${allValue[5]}</p>`;
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const main = document.querySelector('main');
  main.style.display = 'none';
  rescueInformation();
  formConstructorFirst();
});
