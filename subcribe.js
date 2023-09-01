var count=0;
function subcribeButton(){
    count++;
    console.log(count);
    if(count==1){
        document.getElementById("message").innerHTML="Subcibed"
        document.getElementById("icon").style.display="flex"
        document.getElementById("dropdown").style.display="flex"
    }
}