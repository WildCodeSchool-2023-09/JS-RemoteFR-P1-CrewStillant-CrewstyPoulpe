
 
document.addEventListener("change", function(event) {
  const menuList = document.querySelector(".menu-list");
    if (event.target.matches("#menuToggle")) {
      if (event.target.checked) {
        //console.log("Menu Opened");
        menuList.style.display = "flex";
      } 
       else {
        //console.log("Menu Closed");
        menuList.style.display = "none";
      }
      
    } 
  
  });