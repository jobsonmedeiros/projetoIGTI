const express = require("express") // (1) importa o express e o atribui à constante express
const app = express() // (2) clona todo o módulo express e o atribui à constante app
// Essas duas variáveis são usadas para carregar o projeto

// (4) Agora que já iniciamos o servidor vamos indicar uma pasta que queremos abrir
// (5) Barra pra indicar que é página raiz
app.get("/", function(req, res){
    // aqui dentro da função vamos colocar tudo o que esta página vai receber
    res.send("Página Sobre")
    // Agora podemos acessar localhost:8080 no navegador
}) 
// (3) Agora vamos iniciar um servidor
app.listen(8080)