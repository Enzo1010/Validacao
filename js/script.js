//function que valida o nome, uma validação ve se tem algo escrito e a outra ve se pelo menos tem duas palavras escritas que seria nome e sobrenome
function validarNome(nome) {
  var nomeError = document.getElementById('helpIdnm');

  if (nome.trim() === '') { //trim()Ela é usada para remover os espaços em branco no início e no final de uma string. W3school
    nomeError.innerHTML = 'Preencha o campo Nome.'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)

    alert('Voce se esqueceu de escrever seu nome completo!');
    return false;
  } else {
    if (nome.trim().split(' ').length < 2) {
      nomeError.innerHTML = 'Preencha o campo Nome com nome e sobrenome.';
      alert('O nome deve ser completo!');
      return false;
    } else {
      nomeError.innerHTML = ''; // Limpa mensagem de erro se estiver tudo correto
      return true;
    }
  }
}



//function que valida o emial codigo que foi visto na aulo do dia 29/05
function validarEmail(email) {
  var emailError = document.getElementById('helpIdem');

  if (email.trim() === '') {
    emailError.innerHTML = 'Preencha o campo E-mail.'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)
    alert('Preencha o campo E-mail.');
    return false;
  } else {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      emailError.innerHTML = 'E-mail Inválido'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)
      alert('E-mail inválido.');
      return false;
    } else {
      emailError.innerHTML = '';
      return true;
    }
  }
}


//function que valida a Idade, que apenas ve se a idade é maior ou apartir de 18 e o maximo é 120.
function validarIdade(idade) {
  if (isNaN(idade) || idade < 18 || idade > 120) {
    alert('A idade deve ser um número entre 18 e 120.');
    return false;
  } else {

    return true;
  }
}


//function que valida o cpf que foi postado no sigaa dia 15/08, unica coisa que implementei foi por uma mensagem no <small> que é aquele textinho deibaxo do campo, usando o innerHTML
function validaCPF(cpf) {
  var Soma = 0;
  var Resto;
  //remove caracteres que não forem números
  var strCPF = String(cpf).replace(/[^\d]/g, '');

  var cpfError = document.getElementById('helpIdcpf'); // Obtém o elemento para exibir a mensagem de erro

  if (strCPF.length !== 11) {
    cpfError.innerHTML = 'CPF deve conter 11 dígitos.';
    return false;
  }

  // verifica se todos os números são iguais, retorna falso
  if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].indexOf(strCPF) !== -1) {
    cpfError.innerHTML = 'CPF inválido.';
    return false;
  }

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))
    Resto = 0;

  if (Resto != parseInt(strCPF.substring(9, 10))) {
    cpfError.innerHTML = 'CPF inválido.';
    return false;
  }

  Soma = 0;

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))
    Resto = 0;

  if (Resto != parseInt(strCPF.substring(10, 11))) {
    cpfError.innerHTML = 'CPF inválido.'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)
    return false;
  }

  cpfError.innerHTML = ''; // Limpa mensagem de erro se estiver tudo correto
  return true;
}



//function que valida o RG, ue basicamente ve se tem 10 digitos
//aqui vai verificar se o rg tem 10 digitos, ver se tem algum dado preenchido e também ve se o caracatere é número usando o isNaN.
function validarRG(RG) {
  var RGError = document.getElementById('helpIdRG');

  if (RG.trim() === '' || RG.length !== 10 || isNaN(RG)) {
    RGError.innerHTML = 'Preencha o campo RG com um número válido de 10 dígitos.'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)
    alert('Preencha o campo RG com um número válido de 10 dígitos.');
    return false;
  } else {

    RGError.innerHTML = '';
    return true;
  }
}

//function da Data de Nascimento que transforma em dia mes ano a data
//Ela verifica se a data está preenchida, se possui o formato correto, se os valores numéricos são válidos para dia, mês e ano, se a data está dentro de limites razoáveis e se não está em um futuro próximo. 
function validarDataDeAniversario(aniver) {
  var helpIdaniver = document.getElementById('helpIdaniver');

  if (aniver.trim() === '') {
    helpIdaniver.innerHTML = 'Preencha o campo Data de Nascimento.';
    return false;
  }

  var data = new Date(aniver); // Converte a string em um objeto de data

  if (isNaN(data.getTime())) {
    helpIdaniver.innerHTML = 'Insira uma data de aniversário válida.';
    return false;
  }

  // Verificar se a data é válida (ou seja, não está no futuro, etc.)
  var dataAtual = new Date();
  if (data > dataAtual) {
    helpIdaniver.innerHTML = 'Insira uma data de aniversário válida.';
    return false;
  }

  helpIdaniver.innerHTML = '';
  return true;
}



//function que valida o número de telefone, que é obrigatorio usar o ddd para der certo
function validarTelefone(telefone) {
  var teleError = document.getElementById('helpIdtele');

  if (telefone.trim() === '' || telefone.length !== 11 || isNaN(telefone)) {
    teleError.innerHTML = 'Preencha o campo Telefone com um número válido.'; // Exibe mensagem de erro naquele textinho debaixo da caixa do nome (<small>)
    alert('Preencha o campo Telefone com um número válido.');
    return false;
  } else {
    teleError.innerHTML = '';
    return true;
  }
}




//function que verifica se todas as validações deram certo para aparecer a mensagem de sucesso, se caso alguma der o dado invalido vai mostrar a mensgaem de erro indicada na function
function validarEnvio() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var idade = parseInt(document.getElementById('idade').value, 10);
  var cpf = document.getElementById('cpf').value;
  var RG = document.getElementById('RG').value;
  var aniver = document.getElementById('aniver').value;
  var telefone = document.getElementById('telefone').value;

  if (validarNome(nome) && validarEmail(email) && validarIdade(idade) && validaCPF(cpf) && validarRG(RG) && validarDataDeAniversario(aniver) && validarTelefone(telefone)) {
    alert("Validação ok!")
    return true; // Todas as validações passaram, permitir envio do formulário
  } else {
    return false; // Alguma validação falhou, cancelar envio do formulário
  }
}

function validar(e) {
  if (!validarNome(nome) || !validarEmail(email) || !validarIdade(idade) || !validaCPF(cpf) || !validarRG(RG) || !validarDataDeAniversario(aniver) || !validarTelefone(telefone)) {
    e.preventDefault(); //CANCELA A SUBMISSAO DO FORM
  }
}

//botão de validar
var btnValidar = document.getElementById('validarbtn');
btnValidar.addEventListener('click', function (e) {
  e.preventDefault(); // Cancelar o comportamento padrão do botão
  validarEnvio(); // Chamar a função de validação
});


//botão de enviar
var btnEnviar = document.getElementById('Envia');
btnEnviar.addEventListener('click', function (e) {
  if (!validarEnvio()) {
    e.preventDefault(); // Cancelar o envio do formulário se as validações falharem
  }
});