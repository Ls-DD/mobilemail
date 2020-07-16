// 实现锚点跳转缓动
$(".main_left li").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    let index=$(this).index();
    let a=$(".list").eq(index).prop("id");
    jump("#"+a);
    
})
function jump(sel) {
    $(".main_right").animate({ scrollTop: $(sel).offset().top }, 800);
}
$("#search").focus(function () { 
   location.href="search.html"
});