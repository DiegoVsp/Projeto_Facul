let menu = document.querySelector('.conteudo')
let btn = document.querySelector('.toggle');
let Open = false;

function toggle() {
  if (!Open) {
    menu.classList.add('ativo')
    btn.classList.add('open')
    Open = true;
  } else {
    menu.classList.remove('ativo')
    btn.classList.remove('open')
    Open = false;
  }
}