"use strict";
// const baseURL = "https://task.samid.uz/v1/user/sign-up";
// $("#loginPage").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = $("#email").value.trim();
//   const password = $("#password").value.trim();
//   if (email.length === 0 || password.length === 0) {
//     alert("Please fill the form");
//   } else {
//     fetch(`${baseURL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data.code === 1) {
//           alert(data.message);
//           localStorage.setItem("token", data.data.token);
//           localStorage.setItem("username", data.data.username);
//           localStorage.setItem("email", data.data.email);
//           fetchrender();
//           console.log(data);
//         } else {
//           console.log(data);
//           alert(data.message);
//         }
//       });
//   }
// });


"use strict";

const baseURLIN = "https://task.samid.uz/v1/user/sign-in";
$("#loginPage").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = $("#email").value.trim();
  const password = $("#password").value.trim();
 
  const person = {
    username: username,
    password: password
  }
  
  if(email.length == 0 || password.length == 0){
    alert("Hech qandey ma'lumot yo'q");
  }else {
    fetch(`${baseURLIN}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
   })
   .then((e) => e.json())
   .then((e) => {
      if (e.code === 1) {
         alert(e.message);
         console.log(e);
         localStorage.setItem('token', e.data.token);
         localStorage.setItem('user', e.data.username);
 
     
         setTimeout(() => {
            window.location.replace("../index.html");
            
         }, 2000);
      } else {
         console.log(e);
         alert(e.errors.username);
      }

   });
}
});

