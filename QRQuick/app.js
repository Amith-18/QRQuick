


let api_url =   "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox  =   document.getElementById("img-box");
let qrImage  =   document.getElementById("qrImage");
let qrText  =   document.getElementById("qrText");

function generateQR(){

    if(qrText.value.length  > 0){
        qrImage.src =   `${api_url}${qrText.value}`;
        imgBox.classList.add("show-ing");
    }else{
        qrText.classList.add('error');
        qrText.src  =   '';
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }

};

