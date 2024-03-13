const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "session",
  }),
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message_create", (message) => {
 

    // welcome message
  if (message.body.toLowerCase() === "/hello") {
    return message.reply(`"👋 Welcome to our WhatsApp Bot! 🤖

We're thrilled to have you here! 🎉 Our bot is here to assist you with any questions, provide information, and help you navigate our services effortlessly.

To get started, simply type 'menu' for a list of available options, or type 'help' if you need assistance at any point.
        
Feel free to explore and don't hesitate to reach out if you need any assistance. Happy chatting! 😊"`);
  }


  
  //   ask questions
if(message.body.toLowerCase().includes("/question")){
    const q = message.body.slice(11,message.body.length)
    
}





});

client.initialize();
