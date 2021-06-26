function show()
{
    var dis=document.getElementById("popscreen");
    var video=document.getElementById("video");
    video.currentTime=0;
    video.pause();
    dis.classList.toggle("show-trailer");
}
var el=document.getElementById("watch-trailer");
el.addEventListener("click",show,false);
var close=document.getElementById("btn");
close.addEventListener("click",show,false);