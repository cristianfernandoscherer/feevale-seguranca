# Resumo
Esse projeto utiliza a API pública, disponibilizada pelo GOV.BR, para fornecer informações sobre os deputados atuantes no Brasil. O projeto possui 2 verticais: 
1. Fonte de informações<br>
Fornecer informações sobre os deputados(listagem dos deputados, dados sobre um deputado específico e gastos por deputado).
2. Denúncia<br>
Outra funcionalidade do sistema é permitir que, usuários logados, façam denúncias/peçam explicações sobre contas específicas gastas por um deputado. Esses registros serão salvos em um database para análise posterior.

### Endpoints

Consultando listagem dos deputados:<br>
http://localhost:3000/api/deputados

Consultando informações de um deputado específico:<br>
http://localhost:3000/api/deputados/:id_deputado

Consultando despesas de um deputado específico:<br>
http://localhost:3000/api/despesas/:id_deputado

<br>

### Fonte dos dados públicos
http://localhost:3000/api/despesas/:id_deputado




