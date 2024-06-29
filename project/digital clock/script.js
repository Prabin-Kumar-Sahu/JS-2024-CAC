// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')
setInterval(function()
{
    const date = new Date()
   clock.innerHTML =date.toLocaleTimeString()
},1000)
