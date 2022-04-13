function validate(frm1){
    return valid(frm1);
}

function valid(frm1){
    var ps = frm1.postal.value;

    if(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(ps)){

        clearErr("postal","ps");

        return true;

    }

    else

    {

        errMsg= "The Postal code is in the format XXX XXX or XXXXXX";

        displayError("postal", "ps", errMsg);

        return false;

    }

}

function displayError(fieldId,errId, errMsg){



    var fieldObj = document.getElementById(fieldId);


    fieldObj.style.border="solid 1px red";



     fieldObj.focus();

    fieldObj.select();



    var errObj = document.getElementById(errId);
     errObj.innerHTML = errMsg;
     errObj.style.color = "red";
    errObj.style.fontSize = "12px";
}

     

 function clearErr(fieldId, errId){
    var fieldObj = document.getElementById(fieldId);
    fieldObj.style.border=""; 
    var errObj = document.getElementById(errId);
    errObj.innerHTML = "";
 }

 const h = document.querySelector('#sfs');
 const hir = document.querySelector('#hire');
 const ah = document.querySelector('#sps');
 const cs = document.querySelector('#cs');
 const btncon = document.querySelector('#Button2');
 const myform = document.querySelector('.MyForm');
 btncon.addEventListener('click',function(){
    myform.style.display ="block";
})
 
 const txt = document.createElement('input');

 h.addEventListener('click', function(){
    txt.style.display="block";
   txt.type = "number";
   txt.min = "15";
   hir.insertAdjacentElement("afterend",txt); 
 })
 cs.addEventListener('click',function(){
     
     txt.style.display ="none";
 })
 ah.addEventListener('click',function(){
     
     txt.style.display ="none";
 })
