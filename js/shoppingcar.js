// 点击全选选中所有
$("#checkall").click(function(){
    let bool=$(this).prop("checked");
    $("#shop>ul input[type=checkbox]").prop("checked",bool);
    count();
})
// 如果有一个商品未选中则取消全选
$("#shop>ul input[type=checkbox]").click(function(){
    let a=$("#shop>ul input[type=checkbox]").length;
    let b=$("#shop>ul input[type=checkbox]:checked").length;
    if(a===b){
        $("#checkall").prop("checked",true);
    }else{
        $("#checkall").prop("checked",false);
    }

    count();
})

// 实现增减个数
$(".sub").click(function(){
    let num=$(this).siblings(".num").html();
    if(num<=1){
        alert("不能再少了");
    }else{
        num--;
    }
    $(this).siblings(".num").html(num);
    count();
})
$(".add").click(function(){
    let num=$(this).siblings(".num").html();
    num++;
    $(this).siblings(".num").html(num);
    count();
})



// 计算个数和价格
function count(){
    let allnum=0;
    let totalprice=0;
    // 计算选中总个数
    $("#shop>ul input[type=checkbox]").each(function(){
        if($(this).prop("checked")===true){
            let price=parseFloat($(this).closest("li").siblings().find(".price").html().substr(1));
            let count=parseInt($(this).closest("li").siblings().find(".num").html());
            console.log(price,count,typeof(price),typeof(count));
            allnum=allnum+count;
            totalprice=totalprice+price*count; 
        }
    })
    $(".countall").html(allnum);
    $(".allprice").html(totalprice);
   
}

