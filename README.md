# Resumo
Esse projeto foi desenvolvido para aplicar os conhecimentos sobre vulnerabilidades de XSS. 

### Setup do projeto
Clone o projeto<br>
Em seguida levante o ambiente: docker-compose up --build

### Testando a aplicação
<h4>Simule a requisição abaixo:</h4>
<ul>
<li>Endpoint: http://localhost:3000/products</li>
<li>Verbo: POST</li>
<li>Payload(json):<br>
    {<br>
        "name": "<script>window.alert(document.cookie)</script>",<br>
        "price": 100.20<br>
    }<br>
</li>
</ul>
<h4>Acesse a página web:</h4>
http://localhost:8080
<br>
<br>
Nesse momento será exibido um alerta na tela expondo as informações, salvas no cookie do navegatdor, do usuário

