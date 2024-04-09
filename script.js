
      var btn = document.getElementById('nop'); 

      btn.addEventListener('click', function(){
        btn.style.left = `${Math.random() * (window.innerWidth - btn.offsetWidth)}px`;
        btn.style.top = `${Math.random() * (window.innerHeight - btn.offsetHeight)}px`;
      })
         
  