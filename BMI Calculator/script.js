const form =document.querySelector('form')
//const height =parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
e.preventDefault()
const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)

const results =document.querySelector('#results')
if(height === '' ||height <0||isNaN(height)){
results.innerHTML="please give a valid height";
}
else if(weight === '' |weight <0||isNaN(weight)){
  results.innerHTML="please give a valid height";
  }
  else{
   const bmi= (weight/((height*weight)/100000)).toFixed(2)

  
//show the result
results.innerHTML=`<span>${bmi}</span>`
  }
})