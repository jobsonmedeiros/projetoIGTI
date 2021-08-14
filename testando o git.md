Tutorial Git Para Iniciantes

Os comandos serão marcados com ">>". Para testá-los basta copiar e colar em seu terminal. Não copie ">>";

1 - Abra o cmd (prompt de comando). Win+R, digite 'cmd' e dê enter.

2 - Dê um cd pro destop
> cd desktop

3 - Crie uma pasta(diretório) onde ficarão seus arquivos versionados
> mkdir meu_dir_versionado

4 - dê um cd no diretório criado
> cd meu_dir_versionado

5 - Agora vamos tornar esse diretório versionado pelo git, inicializando um repositório vazio. Esse comando criará uma pasta oculta (.git) que o versionador usará para suporte do versionamento.
> git init

6 - O comando "status" mostra arquivos/alterações que ainda não estão sendo versionados(trackeados/rastreados) pelo git. Sempre o use.
> git status

7 - O comando "echo" do terminal imprime na tela o que você passar.
> echo testando a impressão na tela

8 - Você pode enviar o texto para impressão em arquivo. Se ele não existe será criado. Após 'echo' vem o texto que deseja inserir. Os '>>' separam o que será gravado do nome do arquivo.
> echo Guardando em arquivo de testo o que estou escrevendo aqui no prompt >> texto1.txt

9 - Verifique o arquivo que foi criado e o seu conteúdo. Agora aparece o nome do arquivo de forma diferente. Em vermelho no windows, com um X no mac... ele está como untracked. Significa que ainda não está sendo monitorado pelo versionamento.
> git status 

10 - Vamos adicionar o arquivo para que o git o inclua no versionamento, acompanhando mudanças nele. É obrigatório sempre informar nomes dos arquivos com suas respectivas extensões. O comando 'git add .' ou 'git add *' inclui todos os arquivos no diretório para serem trackeados de uma vez.
> git add texto1.txt

11 - Observe o estado.Ainda continua como untracked. O comando add diz ao git que no próximo commit esse arquivo deve ser adicionado para versionamento. Como não fizemos nenhum commit ainda ele não mudou de estado. Untracked nos diz que qualquer alteração que foi feita no arquivo ainda não está sendo versionada (controlada pelo git).
> git status

12 - Vamos fazer nosso primeiro commit. No comando abaixo a flag '-m' serve pra adicionarmos um comentário entre aspas que fica salvo somente para este commit. É uma boa prática frases curtas e concisas, iniciando com verbos no imperativo.
> git commit -m "Adicionado o arquivo texto1.txt"

13 - Observe o estado. Agora não está com a marcação vermelha ou com X. Aparece "new file" - novo arquivo. No VSCode o 'U' significa untracked e 'A' significa que o arquivo já foi adicionado.
> git status

14 - 