console.log('toggle monitor');

const menuElements = document.querySelectorAll('.toggle-menu');
const icontoggle = document.querySelector('.icon-toggle')

const toggleMenu = () => {
    menuElements.forEach( elem  => 
      elem.classList.toggle('hidden'));
      icontoggle.classList.toggle('hidden')
  }
icontoggle.addEventListener('click', toggleMenu);
