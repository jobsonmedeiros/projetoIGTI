# Projeto IGTI

Criação de uma página web em colaboração, com as funcionalidades de CRUD.

## Objetivo Geral
- [ ] Criar uma página web com estilização do Bootstrap com as funcionalidades CRUD usando o NodeJS, utilizando o git e o github como versionadores de código.

## Objetivos Específicos
- [ ] Criar página principal
  - [ ] Criar código html 
  - [ ] Decidir o layout (semântica e grid), cores, estilo de SPA, e se será uma página responsiva
  - [ ] Decidir como o bootstrap será adicionado (via cdn ou localmente)
- [ ] Criar a página contato contendo os participantes, sua formação, cidade, estado e foto
- [ ] Criar as funcionalidades de crud via rotas usando o node

## Pré-requisitos

1. [Git](https://git-scm.com/downloads "Git-SCM")
2. [GitHub](https://github.com/ "GitHub")
3. [Node](https://nodejs.org/pt-br/download/ "NodeJS")
4. [Bootstrap versão 4.1.3](https://getbootstrap.com.br/docs/4.1/getting-started/download/ "Bootstrap @4.1.3")
5. [Jquery](https://jquery.com/ "JQuery")
6. [Popper.js](https://popper.js.org/ "PopperJS")
7. [Instalar o Ruby](ruby-lang.org "Ruby")
8. [Instalar o Sass](https://sass-lang.com/install "Sass")

## Comandos do Git

- `git clone https://github.com/jobsonmedeiros/projetoIGTI.git `-> Copia todos os componentes do repositório
- `git init`
- `git add . `-> Adiciona todos os componentes da pasta para área de _staging_
- `git add README.md` -> Adiciona um arquivo específico para área de _staging_, antecedendo o _commit_ (no caso exemplificado, o arquivo README.md). É importante lembrar que o nome do arquivo **sempre** deverá conter a sua extensão (Ex: '.js', '.md', '.css').
- `git status`-> Possibilita a visualização dos arquivos pendentes p/ commit
- `git commit ou git commit -m "mensagem de commit"` -> Para enviar o commit s/c mensagem referente às alterações
- `git branch -M "main"` -> Para alterar o nome da branch principal de _'master'_ para _'main'_
- `git remote add origin https://github.com/jobsonmedeiros/projetoIGTI.git` -> Cria a conexão entre o repositório central do Github e o local
- `git push -u origin main` -> Sincronizar com o Github pelo navegador e enviar o arquivo para o repositório

**Observação:** Para colar o link do repositório, pode-se utilizar a tecla `'insert'` ou `'ctrl' + 'shift' + 'v'.`

#### Para maiores informações a respeito dos comandos Git, clique <a href="https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/">aqui</a>.

## Participantes :octocat:

|N.   |COLABORADOR   |LOCALIDADE   |
| :------------ | :------------ | :------------ |
|1   |[Jobson M. Medeiros](https://github.com/jobsonmedeiros/)   |João Pessoa - PB  |
|2   |[Iarlei Souza](https://github.com/iarleisouza)             |São Paulo   - SP  |
|3   |[Emmanuel Martins](https://github.com/EmmanuelMartins21)   |   |
|4   |[Bruna Moura Correia](https://github.com/brunacorreia)   |Florianópolis - SC   |
|5   |[Mario Igor Barbosa](https://github.com/migorking)   |   |
|6   |[Isabela Campos](https://github.com/IsabelaCampos02)   |   |
|7   |[Gabriel Ryan](https://github.com/Bigoode)   |Juatuba - MG   |
|8   |[Max Sueel](https://github.com/MaxSueel)   |   |
|9   |[Helinton Alves](https://github.com/HelintonAlves/)   |   |
|10  |[Nikolas Capucci](https://github.com/Niikapucci)   |   |
|11  |[Cosmo Menezes](https://github.com/cosmo-menezes)   |   |
|12  |[Fredy Rolando Salazar Sangucho](https://github.com/fredsalas87)   |   |
|13  |[Fabia Cunha](https://github.com/fabiamcunha)   |Teresópolis - RJ   |
|14  |[José Vilson Bezerra de Albuquerque](https://github.com/VilsonAlbuquerque)   |   |

## Configurando o ambiente
A seguir, os comandos para instalação dos requisitos, via NodeJS

1. cd na pasta do projeto
2. `npm init`
3. `npm install bootstrap@4.1.3`
4. `npm install jquery`
5. `npm install popperjs`

É necessário instalar o Ruby. Depois de Instalado...

6. `npm install -g sass`

O Sass compila os arquivos css e js do Bootstrap e assim podemos utilizar a lib com nossa própria personalização. 

7. Com o Sass instalado, verifique se está sendo reconhecido.
   `sass --version`
   Caso não seja reconhecido, adicione ao PATH do sistema, editando as variáveis do ambiente. 

8. Se o Sass está funcionando, ele mostrará a versão. O comando seguinte determina o caminho da instalação e onde serão guardados os arquivos depois de compilados pelo Sass. Os ':' separam os dois caminhos:
   `sass --watch node_modules/bootstrap/scss:node_modules/bootstrap/compiler`

9. Verifique se a pasta compiler já existe. Não feche o prompt que roda o serviço sass, ou não funcionará. Para sair use ctrl+c. Com tudo ok, adicione no head de sua página o link pro css do Bootstrap: 
    `<link rel="stylesheet" href="node_modules/bootstrap/compiler/bootstrap.css" >`

10. Antes de fechar a tag body adicione os scripts:
    `<script src="node_modules/jquery/dist/jquery.js"></script>`
    `<script src="node_modules/popper.js/dist/popper.js"></script>`
    `<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>`

11. Agora com tudo linkado e o sass funcionando, vc verá as mudanças em tempo real usando as suas próprias classes css e arquivos js compilados do bootstrap. 

Bom trabalho ;D