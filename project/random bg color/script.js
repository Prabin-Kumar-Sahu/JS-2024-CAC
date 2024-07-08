
document.addEventListener("DOMContentLoaded" , function(){

    const randomcolor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * 16);
            color += hex[random];
        }
        return color;
    };
    
    
const str = document.getElementById("btn1")
const stop = document.getElementById("btn2")
let interValid ;

const startfun = function()
{
   interValid=  setInterval(function()
{
    document.body.style.backgroundColor =randomcolor()
    console.log(randomcolor());
},1000)
}
const stopfun = function()
{
    
    clearInterval(interValid)
    interValid = null
}

str.addEventListener("click" , startfun)
stop.addEventListener("click" , stopfun)

})