
let socket=io()

socket.on('connect',()=>{
    document.getElementById('socketid').innerText=socket.id
})

function colorTheBox(color){
    document.querySelector('.'+color).style.backgroundColor=color
    setTimeout(()=>{
        document.querySelector('.'+color).style.backgroundColor=null
    },1000)
}

document.getElementById('colorit').onclick=function(){
    const color=document.getElementById('selectedcolor').value
    socket.emit('colorit',{color})
}

socket.on('colorit',(data)=>{
    colorTheBox(data.color)
})