let qrBox = document.querySelector("#img-box");
let qrImg = document.querySelector("#qr-image");
let qrText = document.querySelector("#qr-text");
let btn = document.querySelector("#btn");



function createQr(text){
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    
}

btn.addEventListener("click",()=>{
    let text=qrText.value;
    console.log(text);
    createQr(text);
})