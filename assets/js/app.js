var coders = document.getElementById("coders");
var chile4 = document.getElementById("chile4");
var lima5 = document.getElementById("lima5");
var lima6 = document.getElementById("lima6");

function filtrar(){
      if (coders.value == "chile-4ta"){
         chile4.style.display="inline-block";
         lima5.style.display="none";
         lima6.style.display="none";
               }

       if (coders.value == "lima-5ta"){
         lima5.style.display="inline-block";
         chile4.style.display="none";
         lima6.style.display="none";
        }

        if (coders.value == "lima-6ta"){
          lima6.style.display="inline-block";
          chile4.style.display="none";
          lima5.style.display="none";
         }
}


window.addEventListener("load", function(){
      coders.addEventListener("change", function(event){
            event.preventDefault();
            filtrar();
      });

});
