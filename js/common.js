$(function(){
    let b=location.pathname.lastIndexOf("/");
    let a=location.pathname.substr(b+1);
    $(`#footer a[href="${a}"]`).addClass("active1");
})