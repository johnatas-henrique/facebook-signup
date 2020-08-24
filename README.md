# Boas vindas ao repositório do projeto Facebook Signup!

## Meus comentários

Com esse projeto, aprendi muito sobre alinhamento de **elementos** na página, utilizando o **Flexbox** e a trabalhar com **regex** para validações. 

Esse projeto tem uma história legal, foi feito durante os dias 30 e 31 de Dezembro de 2019, eu estava tão imerso no aprendizado que nem me dei conta das datas!

---

## Requisitos do projeto

Você deve criar uma cópia o mais próxima possível do site oficial do Facebook (versão de dezembro de 2019), completando os requisitos abaixo:

### 1 - Posicionamento de elementos utilizando _CSS Flexbox_.

### 2 - Uma barra azul na parte superior da página do **Facebook**.

### 3 - O logotipo do **Facebook** no canto superior esquerdo.

### 4 - Um campo de entrada de texto no canto superior direito para receber o email ou o telefone do usuário.

### 5 - Um título com o texto 'Email ou telefone' acima do campo de entrada de texto para email ou telefone.

### 6 - Um campo de entrada de texto para digitar a senha do usuário, posicionado no canto superior direito. O campo também deve estar posicionado à direita do campo de entrada de texto para email ou telefone.

### 7 - Um botão com o texto 'Entrar', à direita do campo de entrada de texto para senha.

### 8 - Um texto 'O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.' abaixo da barra superior azul do **Facebook**, no canto esquerdo.

### 9 - Uma imagem, que ficará abaixo do item 8. Essa imagem deve conter o mapa do mundo e as conexões entre as pessoas.

### 10 - Um texto 'Abra uma conta' posicionado abaixo da caixa de texto de email/telefone.

### 11 - Um texto 'É rápido e fácil.' posicionado abaixo do texto 'Abra uma conta'.

### 12 - Um campo de entrada de texto para o nome do usuário. Posicione esse campo abaixo do texto 'É rápido e fácil.'.

### 13 - Um campo de entrada de texto para o sobrenome do usuário. Posicione esse campo à direita do campo nome.

### 14 - Um campo de entrada de texto para o celular ou email. Posicione esse campo abaixo do sobrenome do usuário.

### 15 - Um campo de entrada de texto para a nova senha do usuário. Posicione esse campo abaixo do celular/email.

### 16 - Um texto 'Data de nascimento' abaixo do campo de entrada de texto de nova senha.

### 17 - Um campo para selecionar a data de nascimento.

  Pontos importantes:
    * Diferentemente do Facebook, esse campo deve ser composto de um único _input_, e você deverá utilizar alguma biblioteca para transformá-lo em um _datepicker_.
    * Defina o `placeholder` com o valor "dd/mm/aaaa".

### 18 - Um texto 'Gênero' abaixo dos campos de data.

### 19 - Três `radio buttons` com os nomes 'Feminino', 'Masculino' e 'Personalizado'.

### 20 - Um botão com o texto 'Cadastre-se' e id `"facebook-register"`.

  Pontos importantes:
    * Esse botão deve pegar os dados dos itens 12 até 19 e validá-los.
    * Caso tudo esteja certo, exiba um `alert` com todos os dados no seguinte formato:
      Por exemplo:
        Se a pessoa que usa digitar o nome "João" e selecionar "Personalizado", o conteúdo da mensagem no `alert` deve ser 'João - Personalizado'.
    * Caso alguma validação dê errado, exiba um `alert` com a mensagem 'Dados inválidos'.
