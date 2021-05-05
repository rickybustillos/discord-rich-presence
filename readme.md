# Script para Discord Rich Presence

Para todos que utilizam Discord e queiram ter um status personalizado, o Discord Rich Presence permite que você crie sua própria aplicação, títulos, detalhes, imagens entre outras configurações que possibilitam a personalização do famoso "Está jogando *alguma coisa*.

## Recursos necessários
O script está programado em **JavaScript** e para fazer funcioná-lo é necessário ter instalado os seguintes recursos:
- NodeJS
- Gerenciador de pacotes NPM
- Nodemon (opcional)
	- Essa dependência permite que a instância do script reinicie automaticamente quando detectar alguma mudança no arquivo do script em execução.
- Aplicação existente em discord.com/developers/applications

Foi utilizada a biblioteca Discord.js para o desenvolvimento do bot.

## Instalação
### Na pasta do projeto e instale as dependências:
A segunda opção (nodemon) é *opcional*
1. `npm install discord-rpc`
2. `npm install nodemon -g`

### Para iniciar o script
1. `node script.js`
ou
2. `nodemon script.js`

## Configuração da Aplicação

O resultado final do meu script fica da seguinte forma:
![Jogando Adobe | Descrição: Adobe Photoshop | Tempo: 02:39 decorrido(s)](https://lh3.google.com/u/0/d/1AdBSc55WNBOd1Kd6DItj8-3PJteSEEa_=w1600-h798-iv1)

1. Acessar discord.com/developers/applications
2. Selecionar sua aplicação (no meu caso Adobe)
![Aplicação Adobe](https://lh3.google.com/u/0/d/1JtdkhCtcpkjHYUKjNQWprK5pDxYpivRw=w1204-h798-iv1)
3. Abrir página "Rich Presence"
![Botão Rich Presence no menu lateral](https://lh3.google.com/u/0/d/1odHn4yCatsMz_rT7KO6T0xHzMkymPcbh=w1204-h798-iv2)
4. Adicionar seus próprios Assets ou imagens que você quer que apareça no discord
![enter image description here](https://lh3.google.com/u/0/d/10weCZMWMQABUyLy3j3CwxiS01JyzC3pO=w1204-h798-iv1)

O mesmo nome da imagem que você salvar nesta página você deverá escrever nos atributos

    largeImageKey: "imagemGrande"
    smallImageKey: "imagemPequena"
