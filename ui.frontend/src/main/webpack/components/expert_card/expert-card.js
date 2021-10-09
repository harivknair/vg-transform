$(function() {
    if( window.innerWidth > 768 && $('.expert-card__img-wrap-left').length > 0 && $('.expert-card__content-wrap-btn').length >0) {       
        $(".expert-card__img-wrap-left").css("margin-top", ($('.expert-card__content-wrap-btn').height()/2));
    }
 })