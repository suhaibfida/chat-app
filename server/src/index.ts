import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
interface User {
  socket: WebSocket;
  room: string;
}
let allsockets: User[] = [];
let user = 1;
wss.on("connection", (socket) => {
  console.log("userconnected " + user);
  user = user + 1;
  socket.on("message", (message) => {
    const parsedmessage = JSON.parse(message as unknown as string);
    if (parsedmessage.type === "join") {
      allsockets.push({
        socket,
        room: parsedmessage.payload.roomId,
      });
    }
    if (parsedmessage.type === "chat") {
      const checkCurrentUserRoom = allsockets.find((x) => x.socket == socket);
      if (!checkCurrentUserRoom) {
        console.log("user not found");
        return;
      }
      const currentUserRoom = checkCurrentUserRoom.room;
      allsockets.forEach((s) => {
        if (s.room == currentUserRoom) {
          s.socket.send(message.toString());
        }
      });
    }
  });
});
