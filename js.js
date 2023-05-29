
//LOgin
document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.querySelector("[data-target='#dropdown--menu-2']");
    var dropdownMenu = document.querySelector("#dropdown--menu-2");
  
    dropdownButton.addEventListener("click", function() {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", function(event) {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  });