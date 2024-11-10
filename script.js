let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:9.6px;
    top: 9.6px;
  `;
  eyeR.style.cssText = `
  right:9.6px;
  top:9.6px;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 45px;
        top:134px;
        left:120px;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 45px;
        top: 134px;
        right: 120px;
        transform: rotate(0deg)
    `;
};
//When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 12px;
    top: 18px;  
  `;
  eyeR.style.cssText = `
    right: 12px;
    top:18px;
  `;
  normalHandStyle();
});
//When clicked on password input
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
        height: 105px;
        top: 62px;
        left: 188px;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 105px;
    top: 62px;
    right: 188px;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});