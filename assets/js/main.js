
const Switch_mode = document.getElementById('switch');
const Inner_text = document.getElementById('inner-text');

mode.onclick = function(){
  document.body.classList.toggle('sun-theme');
  Switch_mode.classList.toggle('switch-active');
  Inner_text.classList.toggle('inner-text-active');
  if(document.body.classList.toggle('.sun-theme')){
    Inner_text.innerHTML = 'Light'
  }
  else{
    Inner_text.innerHTML = 'Dark'
  }
}
