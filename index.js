var count=0;
function increment()
{
   count++;
   document.getElementById("count-el").innerHTML=count;
}
var savev="0";
function save()
{
    savev=savev+","+count;
    document.getElementById("show").innerHTML=savev;
}
function reset()
{
    location.reload();
}