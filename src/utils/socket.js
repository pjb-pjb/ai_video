    let signalR = require("@aspnet/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.6.10:9091/MessageHub")
    .build();
connection.start().then(() => console.log("连接成功"));
module.exports = connection;

