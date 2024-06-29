const form = document.querySelector('form')
form.addEventListener('submit',function(e) 
{
    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')
   const end = document.querySelector('#end')

   if(height === ' ' || height<0 || isNaN(height))
    {
    
        results.innerHTML=`please enter a valid height ${height}` 
    }


   else if(weight === ' ' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`please enter a valid weight ${weight}`
    }

    else
    {
        const r = (weight / ((height*height)/10000)).toFixed(2)
        
        results.innerHTML =r
        switch (true) {
            case (r < 18.6):
                end.innerHTML = "Under Weight";
                break;
            case (r >= 18.6 && r <= 24.9):
                end.innerHTML = "Normal";
                break;
            case (r > 24.9):
                end.innerHTML = "Over Weight";
                break;
            default:
                end.innerHTML = "Invalid range"; // Optional, to handle unexpected values
        }
        
        // if (r < 18.6) {
        //     end.innerHTML = "Under Weight";
        // } else if (r >= 18.6 && r <= 24.9) {
        //     end.innerHTML = "Normal";
        // } else if (r > 24.9) {
        //     end.innerHTML = "Over Weight";
        // }
        
    }

})
// const form = document.querySelector('form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');
//     const end = document.querySelector('#end');

//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML = `Please enter a valid height: ${height}`;
//         end.innerHTML = ''; // Clear end result if there is an error
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please enter a valid weight: ${weight}`;
//         end.innerHTML = ''; // Clear end result if there is an error
//     } else {
//         const r = (weight / ((height * height) / 10000)).toFixed(2);

//         results.innerHTML = `Your BMI is: ${r}`;
        
//         switch (true) {
//             case (r < 18.6):
//                 end.innerHTML = "Under Weight";
//                 break;
//             case (r >= 18.6 && r <= 24.9):
//                 end.innerHTML = "Normal";
//                 break;
//             case (r > 24.9):
//                 end.innerHTML = "Over Weight";
//                 break;
//             default:
//                 end.innerHTML = "Invalid range"; // Optional, to handle unexpected values
//         }
//     }
// });
