let header = $('.myHeader');
let btn = $('#btn');
let audio = $('#audio');
let img1 = $('#img1');
let img2 = $('#img2');
let img3 = $('#img3');
let img4 = $('#img4');
function $(s) {
  return document.querySelector(s);
}

alert('Click the Sun and Moon icon to switch between Dark and Light mode!');

let user_input = "";
let response = '';

while (user_input == "" || user_input == null) {
  user_input = prompt('Please enter your Name:');
}
let name = user_input[0].toUpperCase() + user_input.substring(1);

btn.addEventListener('click', toggle);

function toggle() {
  if (document.body.style.backgroundColor === 'white') {
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = '1s';
    btn.classList.replace('bi-moon-fill', 'bi-brightness-high-fill');
    btn.style.color = 'white';
    btn.style.transition = '2s';
    header.innerHTML = `I Miss You ${name}`;
    header.style.color = 'white';
    header.style.transition = '2s'
    audio.play();
    setTimeout( function ( ) { alert( `Hi ${name}, balik kana please miss kana ng mga anak natin` ); }, 2000 );
    setTimeout( function ( ) { alert( `miss na kita sobra` ); }, 2020 );
    
    let response = '';
    setTimeout( function ( ) { 
      response = confirm('na mimiss mo din ba ako? click OK if Yes and cancel if No')
      if (response == true) {
      header.innerHTML = 'sabi mo YES so panindigan mo yan haha';
      header.style.fontSize = '24px';
      header.style.transition = '0.5s';
      btn.style.display = 'none';
      img1.style.display = 'inline-block';
      img4.style.display = 'inline-block';
      img1.style.width = '40%';
      img1.style.height = '30%';
      img2.style.width = '40%';
      img2.style.height = '30%';
      
      }else{
        img2.style.display = 'inline-block';
        img3.style.display = 'inline-block';
        header.innerHTML = 'medj na hurt ako dun ah';
        header.style.fontSize = '24px';
        header.style.transition = '0.5s';
        btn.style.display = 'none';
      }; }, 2040 );
    
    
  }else{
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = '1s';
    btn.classList.replace('bi-brightness-high-fill', 'bi-moon-fill');
    btn.style.color = 'black';
    btn.style.transition = '2s';
    header.innerHTML = 'Light Mode';
    header.style.color = 'black';
    header.style.transition = '2s'
  }
}