    let signalR = require("@aspnet/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://172.16.3.163:8085/MessageHub")
    .build();
connection.start().then(() => console.log("连接成功"));
module.exports = connection;

