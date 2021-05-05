// Importação da biblioteca discord-rpc e instanciamento do client
const RPC = require("discord-rpc");
const rpc = new RPC.Client({
  transport: "ipc"
});

// Nome da descrição do "jogo" que você está jogando
var programa = "photoshop";

// Todos os atributos string 
rpc.on("ready", () => {
  rpc.setActivity({
    details: "Adobe " + programa.charAt(0).toUpperCase() + programa.slice(1),
    state: "  ",
    startTimestamp: new Date(),
    largeImageKey: programa,
    largeImageText: "Adobe " + programa.charAt(0).toUpperCase() + programa.slice(1),
    smallImageKey: "cc",
    smallImageText: "Creative Cloud"
  });

  console.log("Rich presence está ativo");
});

// No atributo cliendId deve ser colocado o Id da aplicação fornecida em discord.com/developers/applications
rpc.login({
  clientId: "839329145263620157"
});