function show()
{
    var dis=document.getElementById("popscreen");
    dis.classList.toggle("show-trailer");
    var iframe =document.getElementById("video");
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
}
var el=document.getElementById("watch-trailer");
el.addEventListener("click",show,false);
var close=document.getElementById("btn");
close.addEventListener("click",show,false);
