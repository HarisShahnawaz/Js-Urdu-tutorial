# Projects Related to DOM

## project links

# solution code of project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey')
    {
      body.style.background = e.target.id
    }
    else if(e.target.id === 'blue')
    {
      body.style.background = e.target.id
    }
    else if(e.target.id === 'yellow')
    {
      body.style.background = e.target.id
    }
    else if(e.target.id === 'white')
    {
      body.style.background = e.target.id
    }
    else if(e.target.id === 'purple')
    {
      body.style.background = e.target.id
    }
  })
});


```

## project 2 solution

``` javascript
const form = document.querySelector("form")
// this usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')
  
  if(height === '' || height < 0 || isNaN(height) ){
    results.innerHTML = `please give us a valid height ${height}`
  }
  else if(weight === '' ||weight < 0 || isNaN(weight) ){
    results.innerHTML = `please give us a valid weight ${weight}`
  }
  else{
    const bmi = (weight /  ((height*height)/10000)).toFixed(2)
  // show result
  results.innerHTML = `<span>${bmi}</span>`
  if(bmi<=18.6){
    results.innerHTML=`<span>Under weigth :${bmi}</span>`;
    }else if(bmi>18.6 && bmi<24.9){
        results.textContent=`Normal Weight:${bmi}`;
    }else{
        results.textContent=`Over Weight : ${bmi}`
    }
}
}) 

```


