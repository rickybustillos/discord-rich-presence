# Script para Discord Rich Presence

Para todos que utilizam Discord e queiram ter um status personalizado, o Discord Rich Presence permite que você crie sua própria aplicação, títulos, detalhes, imagens entre outras configurações que possibilitam a personalização do famoso "Está jogando *alguma coisa*.

## Recursos necessários
O script está programado em **JavaScript** e para fazer funcioná-lo é necessário ter instalado os seguintes recursos:
- NodeJS
- Gerenciador de pacotes NPM
- Nodemon (opcional)
	- Essa dependência permite que a instância do script reinicie automaticamente quando detectar alguma mudança no arquivo do script em execução.
- Aplicação existente em discord.com/developers/applications

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

![Jogando Adobe | Descrição: Adobe Photoshop | Tempo: 02:39 decorrido(s)](https://i.imgur.com/qM3D9Ko.png)

1. Acessar discord.com/developers/applications
2. Selecionar sua aplicação (no meu caso Adobe)
3. Abrir página "Rich Presence"
4. Adicionar suas próprias imagens que você quer que apareça no discord

O mesmo nome da imagem que você salvar nesta página você deverá escrever nos atributos

    largeImageKey: "imagemGrande"
    smallImageKey: "imagemPequena"
