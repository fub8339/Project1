
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



      function validateForm(){
          var quantity = document.forms["myForm"]["Quantity"];
          var senderName = document.forms["myForm"]["senderNameInput"];
          var recipientName = document.forms["myForm"]["RecipientNameInput"];
          var senderEamil = document.forms["myForm"]["SenderEmailInput"];
          var recipientEmail = document.forms["myForm"]["RecipientEmailInput"];
          var message = document.getElementById('message');


          if(quantity.value == ""){
              quantity.focus();
              alert("Must fill out quantity");
              return false;
          }
          else if(senderName.value==""){
            senderName.focus();
            alert("Must fill out sender name");
            return false;
          }
          else if(recipientName.value==""){
              recipientName.focus();
              alert("Must fill out recipient name");
              return false;
          }
          else if(senderEamil.value==""){
              senderEamil.focus();
              alert("Must fill out sender email");
              return false;
          }
          else if(recipientEmail.value==""){
                recipientEmail.focus();
                alert("Must fill out recipient email");
                return false;
          }
          else if(message.value == ""){
                message.focus();
                alert("Must fill out message");
                return false;
          }
          else{
            alert("Gift Card Has add to your shopping cart!");
            return true;
            
          }
          
      }




    
     