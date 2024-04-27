# Resumo
Esse projeto foi desenvolvido para aplicar os conhecimentos sobre vulnerabilidades de XSS. 

### Setup do projeto
Clone o projeto
Em seguida levante o ambiente: docker-compose up --build

### Testando a aplicação
Simule a requisição abaixo:
Endpoint: http://localhost:3000/products
Verbo: POST
Payload(json):
    {
        "name": "<script>window.alert(document.cookie)</script>",
        "price": 100.20
    }

Acesse a página web:
http://localhost:8080

Nesse momento será exibido um alerta na tela expondo as informações, salvas no cookie do navegatdor, do usuário

