const col = document.querySelectorAll('.button')
const body = document.querySelector('body')
col.forEach(function(btn)
{
    
    btn.addEventListener('click',function(e)
{
    console.log(e)
    console.log(e.target)

    // switch(id)
    // {
    //     case 1:e.target.id==="grey"
    //     body.style.backgroundColor='grey'
    //     break;
    //     case 2:e.target.id==="orange" 
    //     body.style.backgroundColor='orange'
    //     break;
    //     case 3:e.target.id==="blue" 
    //     body.style.backgroundColor='blue'
    //     break;
    //     case 4:e.target.id==="yellow "
    //     body.style.backgroundColor='yellow'
        
    // }
    if(e.target.id ==="grey")
        {
            body.style.backgroundColor="grey"
        }
    if(e.target.id ==="red")
        {
            body.style.backgroundColor="red"
        }
    if(e.target.id ==="blue")
        {
            body.style.backgroundColor="blue"
        }
    if(e.target.id ==="yellow")
        {
            body.style.backgroundColor="yellow"
        }
})
})