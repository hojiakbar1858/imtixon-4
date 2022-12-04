
"use strict"

(function () {

    let userName = localStorage.getItem("username");
    let token = localStorage.getItem("token");
  
    $('.div_text').innerHTML = `${userName}`;
  
    if (!token) {
      location.replace('./login.html');
    }
  
  }())

