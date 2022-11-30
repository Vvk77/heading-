const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");






  

  function heading1  () {
    outputEl.innerHTML = inputEl.value;
    outputEl.style.fontSize = "2em";
    outputEl.style.fontWeight = " bolder";
  
  };
  
  function heading2 () {
      outputEl.innerHTML = inputEl.value;
      outputEl.style.fontSize = "1.5em";
      outputEl.style.fontWeight = " bolder";;
    };
  
    function heading3 () {
      outputEl.innerHTML = inputEl.value;
      outputEl.style.fontSize = "1.17em";
      outputEl.style.fontWeight = " bolder";;
    
    };
  
  
  
  
  h1.addEventListener("click",heading1);
  h2.addEventListener("click",heading2);
  h3.addEventListener("click",heading3);


        
    
  
  



