# Aplicação Minha Biblioteca

- Atividade avaliativa para cadeira de programação backend da Unisinos.
- Desenvolver aplicação de biblioteca com 3 funcionalidades

**Funcionalidades:**

- [x] Listar Livros
- [x] Listar Clientes
- [x] Listar Locações
- [x] Cadastro de Livros
- [x] Cadastro de clientes
- [x] Cadastrar Locações de livros
- [X] Recuperar Lista de Clientes no Registro de locação
- [X] Recuperar Lista de Livros no Registro de locação
- [x] Deletar Livros
- [x] Deletar Clientes
- [] Deletar Locações

### Tecnologias e ferramentas

- [X] HTML
- [X] CSS
- [X] JavaScript
- [X] PHP
- [X] MySQL
- [X] Xampp

### Como obter , visualizar e testar ?

Faça download do [XAMPP](https://www.apachefriends.org/pt_br/index.html).

- Após o download do xampp, baixe este pacote, abra o aplicativo do xampp e clique em executar Apache e MySQL.
- Em seguida, abra a pasta do xampp que está na raiz do disco Rígido - Provável caminho `C:\xampp\htdocs`
- Dentro da pasta htdocs, descompacte esse arquivo. Ele possui o nome minhabiblioteca, então, ele estará disponível em `http://localhost:8080/minhabiblioteca/`.
- Nesse ponto, a aplicação estará em execução, mas não estará exibindo dados, para isso acesse `http://localhost:8080/phpmyadmin/index.php` 
e crie um novo banco de dados, importanto o arquivo .sql contido na pasta `database`. Para a aplicação exibir os dados, seu banco de dados precisa possuir o mesmo nome `minha_biblioteca`, para exibir os dados, caso opte por usar outro nome, não esqueça de alterar no documento `.php` paa evitar erros.
- Pronto, é isso ai!