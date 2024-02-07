
// Header Scroll
let nav = document.querySelector(".navbar");
//fonction anonyme qui est exécutée chaque fois que la page est défilée
window.onscroll = function () {
  //Cela vérifie si la position de défilement verticale de la page (document.documentElement.scrollTop) est supérieure à 20 pixels
    if(document.documentElement.scrollTop > 0){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 


    document.addEventListener('DOMContentLoaded', function () {
        // Function to handle form submission
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevents the default form submission

            // Retrieve input values
            var nom = document.getElementById('nom').value;
            var prenom = document.getElementById('prenom').value;
            var email = document.getElementById('email').value;
            
            if (nom=='') {
                alert('Please write down your name');
            }
            else if (prenom=='') {
                alert('Please write down first name');
            }else{
                // Display an alert with the input values
            alert('Hello ' + nom + ' ' + prenom + ',\nYour message has been sent.\nYou will get my answer soon,thanks.');
            }
                
        }

        // Attach the form submission handler to the form
        var form = document.querySelector('.newsletter form');
        form.addEventListener('submit', handleFormSubmit);
    });

    document.getElementById("downloadBtn").addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1knfKUvAvBZJFeRrLlvkMhnSY0iFxSwtU";
        link.download = "Tebti__CV.pdf";
        link.click();
      });