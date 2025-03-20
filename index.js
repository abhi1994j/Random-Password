const passwordField = document.getElementById("password");
      console.log(passwordField.type);
      const copyBtn = document.getElementById("copyBtn");
      const genarateBtn = document.getElementById("generateBtn");
      const showHidebtn = document.getElementById("showHide");
      const show = document.querySelector(".show");
      const hide = document.querySelector(".hide");
      let flag = true;
      let length = 12;
      const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
      const lowerCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.toLowerCase();
      const number = `1234567890`;
      const symbol = `!@#$%^&*()_+_=;'.,/:\"<>?~|`;
      const allPatteren = upperCase + lowerCase + number + symbol;
      console.log(allPatteren);

      function createPassword() {
        // console.log("hello");
        let password = ``;
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
        while (length > password.length) {
          password +=
            allPatteren[Math.floor(Math.random() * allPatteren.length)];
        }
        console.log(password);
        passwordField.value = password;
        console.log(passwordField.value);
      }

      async function copyPassword() {
        try {
          await navigator.clipboard.writeText(passwordField.value);
          const copied = await navigator.clipboard.readText();
          console.log("Password copied to clipboard!", copied);
          alert(`Password copied to clipboard! ✅ ${copied}`);
        } catch (err) {
          console.log(err);
        }
      }

      function showPassword() {
        // method -1
        // if (flag) {
        //   hide.style.display = "none";
        //   show.style.display = "block";
        //   flag = false;
        //   passwordField.type = "text";
        // } else {
        //   hide.style.display = "block";
        //   show.style.display = "none";
        //   flag = true;
        //   passwordField.type = "password";
        // }
        
        // method-2
        show.classList.toggle("hidden");
        hide.classList.toggle("hidden");
        passwordField.type =passwordField.type === "password" ? "text" : "password";
      }

      genarateBtn.addEventListener("click", createPassword);
      copyBtn.addEventListener("click", copyPassword);
      showHidebtn.addEventListener("click", showPassword);