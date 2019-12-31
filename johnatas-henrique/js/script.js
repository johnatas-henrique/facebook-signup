/* global Pikaday Validator*/
/* Variáveis globais */
const botaoEnviar = document.querySelector('#enviar');
const containerRadios = document.querySelector('.gender-block');
const arrRadios = document.querySelectorAll('.gender-input');
const divGenero = document.querySelector('#show-genero');
const divEmail = document.querySelector('#show-email');
const divNome = document.querySelector('#show-nome');
const divSobrenome = document.querySelector('#show-sobrenome');
const divPikaday = document.querySelector('#show-pikaday');
const divUndefined = document.querySelector('#show-undefined');
const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const inputFoneOuEmail = document.querySelector('#fone-ou-email');
const inputSenha = document.querySelector('#senha');
const inputDtNasc = document.querySelector('#dtnasc');
const containerNome = document.querySelector('#container-nome');
const containerSobrenome = document.querySelector('#container-sobrenome');
const containerEmailEFone = document.querySelector('#fone-email');
const containerPikaday = document.querySelector('#pikaday');
const selectPronome = document.querySelector('.select-pronome');
const formRegister = document.querySelector('#form-register');
const nomeReg = /^[a-zA-Z\u00C0-\u017F\s]+$/;
const arrDivErros = [divGenero, divNome, divSobrenome, divPikaday, divEmail,];
const cpInputForm = [inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc,];
const cpInputName = ['Nome', 'Sobrenome', 'Celular ou email', 'Nova senha', 'Data nascimento',];
let emailErro = '';
let contadorEmail = 0;
let pikadayErro = '';
let contadorPikaday = 0;
let nomeErro = '';
let contadorNome = 0;
let sobrenomeErro = '';
let contadorSobrenome = 0;
let contadorGenero = 1;
let valorGenero = 0;
let senhaErro = '';
let contadorSenha = 0;
let contadorValida = 0;
let respostaGeral = 0;
let alertaErro = '';
let alertaOk = '';
for (let i = 0; i < arrDivErros.length; i += 1)
{

}
/* Pikaday JS - Requisito 17 */
const pikadayCC = new Pikaday({
  field: document.getElementById('dtnasc'),
  firstDay: 1,
  minDate: new Date(1899, 12, 1),
  maxDate: new Date(2020, 12, 31),
  yearRange: [1900, 2020],
  format: 'DD/MM/YYYY',
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Novo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  },
});
/* Validações com a Lib js-form-validator */


const validatorCC = new Validator(formRegister, function (err, res) {
  let answer = res;
  if (respostaGeral !== 0) {
    answer = false;
  } else if (valorGenero === 3 && selectPronome.value === '') {
    answer = false;
  }
  return answer;
});
/* Validando radio button */

function checkGenero() {
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      divGenero.classList.add('esconder');
      break;
    } else {
      divGenero.classList.remove('esconder');
    }
  }
}

function alterGenero(item) {
  item.addEventListener('blur', checkGenero);
  item.addEventListener('change', checkGenero);
}
arrRadios.forEach(alterGenero);
botaoEnviar.addEventListener('click', checkGenero);
/* Validação nome sem números */

function validaNome(event) {
  nomeErro = '';
  if (event.target.value !== '') {
    if (event.target.value.match(nomeReg)) {
      divNome.classList.add('esconder');
      contadorNome = 0;
      return true;
    }
    nomeErro = '\nO campo Nome é inválido';
    contadorNome = 1;
    divNome.classList.remove('esconder');
    return false;
  }
  return false;
}
inputNome.addEventListener('keyup', validaNome);
/* Validação sobrenome sem números */

function validaSobrenome(event) {
  sobrenomeErro = '';
  if (event.target.value !== '') {
    if (event.target.value.match(nomeReg)) {
      divSobrenome.classList.add('esconder');
      contadorSobrenome = 0;
      return true;
    }
    sobrenomeErro = '\nO campo Sobrenome é inválido';
    contadorSobrenome = 1;
    divSobrenome.classList.remove('esconder');
    return false;
  }
  return false;
}
inputSobrenome.addEventListener('keyup', validaSobrenome);
/* Validação fone e email na caixa */

function funcaoEmailEFone() {
  emailErro = '';
  const emailReg = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  const foneReg = /^[0-9]{2}9?[0-9]{8}$/;
  if (inputFoneOuEmail.value !== '') {
    if (inputFoneOuEmail.value.match(emailReg) || inputFoneOuEmail.value.match(foneReg)) {
      divEmail.classList.add('esconder');
      contadorEmail = 0;
      return true;
    }
    emailErro = '\nO campo Celular ou email é inválido';
    contadorEmail = 1;
    divEmail.classList.remove('esconder');
    return false;
  }
  return false;
}
inputFoneOuEmail.addEventListener('keyup', funcaoEmailEFone);
/* Validação data maior que o dia de hoje */

function funcaoPikadayMaior() {
  pikadayErro = '';
  const dtAtual = Date.now();
  const dtCaixa = Date.parse(pikadayCC.toString('MM/DD/YYYY'));
  if (dtCaixa < dtAtual) {
    divPikaday.classList.add('esconder');
    contadorPikaday = 0;
    return true;
  }
  pikadayErro = '\nO campo Data Nascimento é inválido';
  contadorPikaday = 1;
  divPikaday.classList.remove('esconder');
  return false;
}
inputDtNasc.addEventListener('blur', funcaoPikadayMaior);
/* Validação de senha (acima de 6 caracteres) */
function senhaMaisCaracteres() {
  contadorSenha = 0;
  if (inputSenha.value !== '') {
    if (inputSenha.value.length > 5) {
      senhaErro = '';
      contadorSenha = 0;
      return true;
    }
    senhaErro = '\nO campo Senha é inválido';
    contadorSenha = 1;
    return false;
  }
  return false;
}
inputSenha.addEventListener('keyup', senhaMaisCaracteres);
/* Escondendo/Mostrando Div dependendo do gênero escolhido */
function mostraChildUndefined() {
  const valorRadio = document.querySelector('input[name=genero]:checked');
  const valor = parseInt(valorRadio.value, 10);
  if (valor === 3) {
    divUndefined.classList.remove('esconder');
  } else {
    divUndefined.classList.add('esconder');
  }
}

function changeRadio(item) {
  item.addEventListener('change', mostraChildUndefined);
}
arrRadios.forEach(changeRadio);
/* Verificar campos vazios e remover placeholder personalizado */
function verificaVazioLimpaPlaceholder(event) {
  const nomeCampo = event.target.name;
  const escondeLabel = document.querySelector(`label[for=${nomeCampo}]`);
  if (event.target.value === '') {
    escondeLabel.classList.remove('esconder');
  } else {
    escondeLabel.classList.add('esconder');
  }
}

function escutaCampos(item) {
  item.addEventListener('keyup', verificaVazioLimpaPlaceholder);
  item.addEventListener('change', verificaVazioLimpaPlaceholder);
}
cpInputForm.forEach(escutaCampos);
/* Criar Alerts */
function verificaCamposInputVazios() {
  alertaErro = 'Falhas no cadastro, por favor confira os erros abaixo:';
  alertaOk = 'Cadastro preenchido com sucesso, informações abaixo:';
  contadorValida = 0;
  for (let i = 0; i < cpInputForm.length; i += 1) {
    if (cpInputForm[i].value === '') {
      const nomeCampo = cpInputForm[i].name;
      const labelCampo = document.querySelector(`label[for=${nomeCampo}]`);
      contadorValida += 1;
      alertaErro += `\nO campo ${labelCampo.innerText} está vazio.`;
    } else {
      alertaOk += `\n${cpInputName[i]}: ${cpInputForm[i].value}`;
    }
  }
}
botaoEnviar.addEventListener('click', verificaCamposInputVazios);

function verificaRadiosVazias() {
  contadorGenero = 1;
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      const escolhidoIdRadio = arrRadios[i].id;
      const escolhidoGenero = document.querySelector(`label[for=${escolhidoIdRadio}]`);
      contadorGenero = 0;
      valorGenero = arrRadios[i].value;
      valorGenero = parseInt(valorGenero, 10);
      alertaOk += `\nGênero: ${escolhidoGenero.innerText}`;
    }
  }
  if (contadorGenero === 1) {
    alertaErro += '\nO campo Gênero está vazio.';
  }
}
botaoEnviar.addEventListener('click', verificaRadiosVazias);

function verificaRespostaGeral() {
  const arrResposta = [contadorEmail, contadorGenero, contadorNome, contadorPikaday,
    contadorSenha, contadorSobrenome, contadorValida,];
  respostaGeral = 0;
  for (let i = 0; i < arrResposta.length; i += 1) {
    if (arrResposta[i] === 1) {
      respostaGeral += 1;
    }
  }
}

botaoEnviar.addEventListener('click', verificaRespostaGeral);

function mostraAlerta() {
  if (validatorCC.validate() === true && respostaGeral === 0) {
    alert(alertaOk);
  } else {
    alertaErro += `${nomeErro}${sobrenomeErro}${emailErro}${senhaErro}${pikadayErro}`;
    alert(alertaErro);
  }
}
botaoEnviar.addEventListener('click', mostraAlerta);
