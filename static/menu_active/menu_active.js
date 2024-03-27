document.querySelector('button').addEventListener('click', () => { 
  document.querySelector('.menu_mobile').classList.add('active'); 
  document.querySelector('.close-menu').classList.add('close-menu-active'); 
  document.querySelector('.blur').classList.remove('close') 
}) 
 
document.querySelector('.close-menu').addEventListener('click', () => { 
  document.querySelector('.menu_mobile').classList.remove('active'); 
  document.querySelector('.close-menu').classList.remove('close-menu-active'); 
  setTimeout(function(){ 
    document.querySelector('.blur').classList.add('close'); 
  }, 1500); 
}) 

document.querySelector('.blur').addEventListener('click', () => { 
document.querySelector('.menu_mobile').classList.remove('active'); 
document.querySelector('.close-menu').classList.remove('close-menu-active'); 
setTimeout(function(){ 
  document.querySelector('.blur').classList.add('close'); 
}, 1500); 
}) 

document.querySelector('.log-btn').addEventListener('click', () => { 
document.querySelector('.modal-blur').classList.remove('close') 
}) 

document.querySelector('.modal-blur').addEventListener('click', () => { 
document.querySelector('.modal-blur').classList.add('close') 
}) 

document.querySelector('.modal_window').addEventListener('click', (event) => { 
event.stopPropagation() 
}) 

document.querySelector('.close-modal').addEventListener('click', () => { 
document.querySelector('.modal-blur').classList.add('close')
})