OBSERVAÇÃO

O código funcionou perfeitamente em WEB, porém, não consegui conectar no meu celular para realizar o teste mobile (dizia para confirmar que meu celular e meu PC estavam na mesma rede e não permitia realizar ações na API).

Tendo isso em mente, para executar o código basta.

x-x-x-x Inicializar API x-x-x-x
>cd Fullstack-Back
>cd mongoapi
>dotnet run (ou dotnet watch run)

A connection-string do MongoDB é: mongodb://localhost:27017

A Database e a coleção a API é capaz de criar.

x-x-x-x Inicilizar React Native x-x-x-x

Um erro que ocorreu no meu PC, foi que o expo start não funcionou, não sei chega a haver alguma diferença, mas apenas testei com o npm start.

Dito isto basta executar os seguintes comandos:

>cd atividade-react
>npm install
>npm start (ou expo start caso funcione no seu)


Com isso, você deve ser capaz de:

1° Ter acesso ao formulário para criação de atividade;

2° Ter acesso à lista de atividades e a possibilidade de excluí-las.

Fim do README.

Aluno: Gabriel Alves de Freitas / 3º Periodo noite PCR SENAC