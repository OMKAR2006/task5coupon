function loadcoupon(){
    document.getElementById('coupon').style.display="block"
    document.getElementById('categ').style.opacity="0.3";
    document.getElementById('offer').style.opacity="0.3";
    document.getElementById('offer1').style.opacity="0.3";
   
}

function closecoupon() {

    document.getElementById('coupon').style.display="none";
    document.getElementById('categ').style.opacity="1";
    document.getElementById('offer').style.opacity="1";

    document.getElementById('offer1').style.opacity="1";
}