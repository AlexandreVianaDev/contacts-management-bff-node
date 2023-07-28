# 🛠️ Abrir e rodar o projeto

**Passos para rodar a aplicação:**

- instalar PostgreSQL
- criar um Banco de Dados no PostgreSQL para testar a aplicação
- instalar node 18.5.0 ou versão compatível
- clonar este repositório
- abrir o terminal na pasta clonada no seu computador
- executar o comando de instalação de dependencias: npm install
- abrir a aplicação na IDE de sua escolha, criar um arquivo .env usando o .env.example como exemplo e preencher corretamente as variáveis de ambiente
- executar o comando para inicializar a API e o Banco de Dados: npm run dev
- agora basta ir parte do FrontEnd e executar as funcionalidades

GitHub do FrontEnd: https://github.com/AlexandreVianaDev/contacts-management-ffb-react

## ✔️ Documentação API

# Rotas sem autorização (token)

## Criar usuário
**POST /users**

Corpo da Requisição:
{
	"name": "nome",
	"email": "nome@mail.com",
	"phone": "00000000000",
	"password": "Aa!1bbbb"
}

## Login
**POST /login**

Corpo da Requisição:
{
	"email": "email@mail.com",
	"password": "Aa!1bbbb"
}

# Rotas que requerem autorização (token)

## Autologin
**GET /login**
Basta enviar o Bearer Token que ele vai te devolver as informações do usuário

## Listar usuários
**GET /users**
Basta enviar o Bearer Token que ele vai te devolver a lista de todos os usuários

## Atualizar usuário
**POST /users/:id**

Corpo da Requisição:
{
	"name": "nome",
	"email": "nome@mail.com",
	"phone": "00000000000",
	"password": "Aa!1bbbb"
}

## Deletar usuário
**DELETE /users/:id**
Basta enviar o Bearer Token que ele vai deletar o usuário

## Buscar contatos do usuário
**GET /contacts**
Basta enviar o Bearer Token que ele vai te devolver a lista de todos os contatos do usuário logado

## Criar contato
**POST /contacts**

Corpo da Requisição:
{
	"name": "nome",
	"email": "nome@mail.com",
	"phone": "00000000000",
}

## Atualizar contato
**POST /contacts/:id**

Corpo da Requisição:
{
	"name": "nome",
	"email": "nome@mail.com",
	"phone": "00000000000",
}

## Deletar contato
**DELETE /contacts/:id**
Basta enviar o Bearer Token que ele vai deletar o contato
