# Projects Related to DOM

## project links

```javascript
console.log(Haris)

```

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click' , function(e){
  consoe.log(e)
  consoe.log(e.target)
  })
});
