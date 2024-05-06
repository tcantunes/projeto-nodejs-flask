# Projeto rodando

https://github.com/tcantunes/projeto-nodejs-flask/assets/103459242/ceac304b-c22e-45dc-9239-bf5636189456

## Iniciando o projeto

Crie um arquivo `.env` dentro da pasta nodejs, temos nossas variáveis de ambiente lá. O banco de dados que usamos é o mongodb, entâo inclua na variavel:

```
DB_HOST= seu host do mongodb
DB_PASSWORD= sua senha do seu banco mongodb
```

## Rodando o projeto

### Flask

Entre na pasta flask e rode o comando:

```
python app.py
```

Caso não tenha as bibliotecas necessárias, rode os comandos abaixo e depois o comando a cima:

```
pip install Flask
```

```
pip install SQLAlchemy
```

```
pip install Flask-SQLAlchemy
```

```
pip install mysqlclient
```

### Node.js

Após colocar o flask para rodar, entraremos na pasta nodejs e rodaremos o projeto node.js:

Para instalar todas as nossas bibliotecas, rode o comando:

```
npm install
```

Após instalar nossas libs, rode o projeto:

```
npm run dev
```

Pronto, o node.js e o flask estão conectados. 

Abra no seu browser de preferência o login.html do nosso projeto node.js e faça login com um dos nossos usuários cadastrados:

```
email: 1234@gmail.com
senha: 12345
```


