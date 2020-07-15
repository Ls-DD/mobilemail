// 点击搜索按钮获取用户输入并存入本地存储
$("#searchthis").click(function(){
    // 获取用户输入的值
    let userput={
        "history":Trim($(".searchbox>input").val(),"g")
    }
    // 获取本地存储,如果为空就创建一个空数组
    let taskList=JSON.parse(localStorage.getItem("taskList"))||[];
    let teg=/^[\s]*$/;
    let flag=teg.test(userput.history);
    let flag1=false;
    for(let i=0;i<taskList.length;i++){
        if (userput.history===taskList[i].history) {
            flag1=true;
            return; 
        }
    }
    if(flag===false&&flag1===false){
        // 将用户输入的值存入本地存储
        taskList.push(userput);
         // 更新本地存储
        localStorage.setItem("taskList",JSON.stringify(taskList));
    $(".searchbox>input").val("")
    }else{
        alert("输入不能为空");
    }
    rander();
    show();
    
})
rander();
// 渲染函数
function rander(){
    // 获取本地存储
    let taskList=JSON.parse(localStorage.getItem("taskList"));
    let string="";
    if(taskList!=null){
          for(let i=0;i<taskList.length;i++){
            string=string+`<li>
            <a href="#">${taskList[i].history}</a>
            <span class="det" data-type=${i}>x</span>
            </li>`
          }
    }else{
        string=""
        
    }
    $(".lookList").html(string);
}
// 点击叉叉图标删除该记录
$(".lookList").on("click","span",function(){
    let index=$(this).data("type");
    // 获取本地存储
    let taskList=JSON.parse(localStorage.getItem("taskList"));
    taskList.splice(index,1);
    // 更新本地存储
    localStorage.setItem("taskList",JSON.stringify(taskList));
    rander();
    show();
})
// 点击垃圾桶，删除全部记录
$(".delete").click(function(){
    let taskList=JSON.parse(localStorage.getItem("taskList"));
    localStorage.removeItem("taskList");
    $("#history").hide();
    rander();
    show();
})
show()
function show(){
    let taskList=JSON.parse(localStorage.getItem("taskList"));
    if(taskList===null||taskList.length===0){
        $("#histroy").hide();
    }else{
        $("#histroy").show();
    }
}
$('.searchbox>input').bind('input propertychange', function() {
    // 添加键值
    document.onkeydown = cdk;
    function cdk() {
        // 键值等于13搜索点击事件执行
        if (event.keyCode == 13) {
            $("#searchthis").click()
        }
    }
});
function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g")
        result = result.replace(/\s/g, "");
    return result;
}
