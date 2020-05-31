const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector("div");

const showMessage = (e) => {

    passwords.forEach((password, index) => {

        if (input.value.toLowerCase() == password.toLowerCase()) {

            div.textContent = messages[index];

        }
        
        console.log(password);
        console.log(index);

    });
    
    passwords.forEach((pass, ind) =>{
        
        let lot = pass.split("");
        
        console.log(lot + ind)
        
    });

}

input.addEventListener("input", showMessage)
