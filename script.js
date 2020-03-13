
      const menuButton=document.getElementById('menu-button');
      const navigation=document.getElementById('navigation');

      menuButton.addEventListener('click',event =>{
          menuButton.classList.toggle('active');
          navigation.classList.toggle('open');
          event.stopPropagation();
      });
      document.addEventListener('click',() =>{
          menuButton.classList.remove('active');
          navigation.classList.remove('open');
      });
     