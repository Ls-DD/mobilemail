// 倒计时
time()
setInterval(function(){
    time();
},1000)
function time() {
    let furtureDate = new Date("2020/7/16 00:00:00");
    let nowDate = new Date();
    let chages = furtureDate - nowDate;
    // 计算天数
    let day = Math.floor(chages / (1000 * 60 * 60 * 24));
    let hour = Math.floor((chages - day * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor((chages - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor((chages - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60 - minute * 60 * 1000) /
        1000);
    // let second = Math.floor((chages - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60-minute*1000*60) /1000);
    
        
    days.innerHTML<10? days.innerHTML ="0"+ day:days.innerHTML = day;
    hours.innerHTML<10? hours.innerHTML = "0"+hour:hours.innerHTML = hour;
    minutes.innerHTML<10? minutes.innerHTML ="0"+ minute:minutes.innerHTML = minute;
    seconds.innerHTML<10? seconds.innerHTML = "0"+second:seconds.innerHTML = second;
}