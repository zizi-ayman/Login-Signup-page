function send(){
    createElement(document.getElementById('fnamefield'),"First Name","cannot be empty");
    createElement(document.getElementById('lnamefield'),"Last Name","cannot be empty");
    createElement(document.getElementById('emailfield'),"Email Address","cannot be empty");
    if(validateEmail(document.getElementById('emailfield').value) === null && document.getElementById('emailfield').nextSibling.tagName !== 'P'){
        addElement(document.getElementById('emailfield'),"Email Address","Look like this not an email");
    }
    createElement(document.getElementById('passwordfield'),"Password","cannot be empty");
}
function createElement(node, name, rest){
    if(node.value.length < 2 || (node.nextSibling.tagName !== 'P' && name === node.value)){
        addElement(node, name, rest);
    }else{
        if(node.value.length > 2 && name !== node.value){
            rmElement(node);
        }
    }
}
function addElement(node, name, rest){
    let newNode = document.createElement("p");
    newNode.style.textAlign ="end";
    newNode.style.margin = '0% 6%';
    newNode.style.color = 'hsl(0, 100%, 74%)';
    newNode.style.fontSize= ".75rem";
    node.style.borderColor = 'hsl(0, 100%, 74%)';
    node.style.backgroundImage= "url('..//img/icon-error.svg')";
    node.style.backgroundRepeat = "no-repeat";
    node.style.backgroundPosition= "right center";
    newNode.appendChild(document.createTextNode(name+" "+rest));
    node.parentNode.insertBefore(newNode, node.nextSibling);
}
function rmElement(node){
    if(node.nextSibling.tagName === 'P')
    node.nextSibling.remove();
    node.style.borderColor = 'hsl(246, 25%, 77%)';
    node.style.backgroundImage= "none";
}
function focusFun(input){
    input.value = input.value.trim();
    if(input.getAttribute("value") === input.value)
        input.value = "";
}
function blurfun(input){
    input.value = input.value.trim();
    if(input.value === "")
        input.value = input.getAttribute("value");
}
function validateEmail(email){
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

/*-------------          Login.html          ------------*/

let session = '<?php echo $_SESSION["info"]?>';
if(session === 'false'){
    node = document.getElementById('passwordfield');
    let newNode = document.createElement("p");
    newNode.style.textAlign ="center";
    newNode.style.margin = '0% 6%';
    newNode.style.color = 'hsl(0, 100%, 74%)';
    newNode.appendChild(document.createTextNode("You have entered an invalid username or password!"));
    node.parentNode.insertBefore(newNode, node.nextSibling);
}