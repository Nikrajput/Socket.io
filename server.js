const express=require('express')
const http=require('http')
const socketio=require('socket.io')
const app=express()

const server=http.createServer(app)
const io=socketio(server)

app.use('/',express.static('./public'))

io.on('connection',(socket)=>{

    socket.on('colorit',(data)=>{
        io.emit('colorit',data)
    })
})

server.listen(5879,function(){
    console.log("Server started on http://localhost:5879")
})