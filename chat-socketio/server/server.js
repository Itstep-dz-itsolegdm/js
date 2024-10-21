import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const allSocketServer = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

allSocketServer.on("connection", (oneUserSocket) => {
  oneUserSocket.name = oneUserSocket.id;

  const newUser = {
    name: oneUserSocket.name,
    connectedAt: Date.now(),
  };
  allSocketServer.emit("new_user_connection", newUser);

  oneUserSocket.on("new_message", (data) => {
    const msg = {
      name: oneUserSocket.name,
      msg: data,
      createdAt: Date.now(),
    };
    allSocketServer.emit("new_message", msg);
  });

  oneUserSocket.on("new_name_user", (data) => {
    const oldNameUser = oneUserSocket.name;
    oneUserSocket.name = data;

    const msg = {
      oldNameUser,
      newNameUser: oneUserSocket.name,
      createdAt: Date.now(),
    };

    allSocketServer.emit("new_name_user", msg);
  });

  // Handle client disconnection
  oneUserSocket.on("disconnect", () => {
    console.log(`User disconnected: ${oneUserSocket.name}`);
  });
});

// Start the server
httpServer.listen(3030, () => {
  console.log("Socket server is running on http://localhost:3030");
});
