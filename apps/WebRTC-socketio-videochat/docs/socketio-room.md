Sequence diagram for Socket.io Room flow

```
#sequencediagram.org
title Whispering Socket.io

participant Socket namespace
actor user[n]
actor Client
participant Server
database Redis

Client<-Server: emit(connect)
Client->Server: emit(join-room)

alt users == 0
Server->Redis: Find users for room
Redis->Redis: Create User
else users > 1
Server->Redis: Find users for room
Redis->Redis: Create User
Server<--Redis: Return all users
Client<-Server: emit(users-updated)
Client->Client: createPeer()

Client->Server: emit(send-signal) /user[0], Client.socketId, Client.signal/
Client->Server: emit(send-signal) /user[n], Client.socketId, Client.signal/

user[n]<-Server: emit(user-joined) /user[n], Client.socketId ,Client.signal

user[n]->Server: emit(return-signal) /user[n].signal, Client.socketId

Client<-Server: emit('receiving-returned-signal') /user[n].signal, user[n].socketId/

Client->Client: setPeers(peers)
end

Socket namespace<-Server: emit(disconnect) /socket.id/
Server->Redis: Remove socket.id
```
