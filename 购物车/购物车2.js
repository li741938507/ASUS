var dd1=document.getElementById("delete-div1");
var dd2=document.getElementById("delete-div2");
var allPrice=document.getElementsByClassName("allPrice")[0];
var jf=document.getElementsByClassName("jifen");
var xj=document.getElementsByClassName("xiaoji");
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var checkbox=document.getElementsByClassName("checkbox-div");
var checkon=document.getElementsByClassName("check-on");
var cn = document.getElementsByClassName("chooseNum")[0];
function showDelete1(){
	dd1.style.display="block";
}
function hideDelete1(){
	dd1.style.display="none";
}
function deleteDiv1(){
        div1.style.display = "none";
        dd1.style.display = "none";
        if(allPrice.innerHTML!=0) {
            allPrice.innerHTML = parseInt(allPrice.innerHTML) - parseInt(xj[0].innerHTML);
        }
        checkon[1].style.display="none";
}
function showDelete2(){
    dd2.style.display="block";
}
function hideDelete2(){
    dd2.style.display="none";
}
function deleteDiv2(){
    div2.style.display = "none";
    dd2.style.display = "none";
    if(allPrice.innerHTML!=0) {
        allPrice.innerHTML = parseInt(allPrice.innerHTML) - parseInt(xj[1].innerHTML);
    }
    checkon[2].style.display="none";
}
var tishi1=document.getElementById("tishi1");
function showTishi1(){
    tishi1.style.display="block";
}
function hideTishi1(){
    tishi1.style.display="none";
}
var tishi2=document.getElementById("tishi2");
function showTishi2(){
    tishi2.style.display="block";
}
function hideTishi2(){
    tishi2.style.display="none";
}


function numAdd(a){
    var inp=document.getElementsByClassName("inp")[a-1];
    var gn=document.getElementsByClassName("goods-num")[a-1];
    var gni=document.getElementsByClassName("goods-number")[a-1];
    inp.value=parseInt(inp.value)+1;
    jf[a-1].innerHTML=7499*inp.value;
    xj[a-1].innerHTML=7499*inp.value;
    if(2<=parseInt(inp.value)<=5){
    gn.style.display="block";
    gni.innerHTML=parseInt(gni.innerHTML)-1;
        if(parseInt(gni.innerHTML)<0){
            gni.innerHTML=0;
        }
    }
    if(parseInt(inp.value)>=6){
        inp.value=5;
        showTishi2();
    }
    var allnum=document.getElementsByClassName("allNum")[0];
    var ip1=document.getElementsByClassName("inp")[0];
    var ip2=document.getElementsByClassName("inp")[1];
    allnum.innerHTML=parseInt(ip1.value)+parseInt(ip2.value);
    if(checkon[1].style.display == "block"&&checkon[2].style.display != "block"){
        allPrice.innerHTML = parseInt(xj[0].innerHTML);
    }else if(checkon[1].style.display != "block"&&checkon[2].style.display == "block"){
        allPrice.innerHTML = parseInt(xj[1].innerHTML);
    }else if(checkon[1].style.display == "block"&&checkon[2].style.display == "block"){
        allPrice.innerHTML = parseInt(xj[0].innerHTML)+parseInt(xj[1].innerHTML);
    }
        }
function numDelete(a){
    var inp=document.getElementsByClassName("inp")[a-1];
    var gn=document.getElementsByClassName("goods-num")[a-1];
    var gni=document.getElementsByClassName("goods-number")[a-1];
    inp.value=parseInt(inp.value)-1;
    if(parseInt(inp.value)<=0){
        inp.value=1;
        showTishi1();
    }

    jf[a-1].innerHTML=7499*inp.value;
    xj[a-1].innerHTML=7499*inp.value;
    gni.innerHTML=parseInt(gni.innerHTML)+1;
    if(parseInt(gni.innerHTML)>=5){
        gni.innerHTML=4;
    }
    var allnum=document.getElementsByClassName("allNum")[0];
    var ip1=document.getElementsByClassName("inp")[0];
    var ip2=document.getElementsByClassName("inp")[1];
    allnum.innerHTML=parseInt(ip1.value)+parseInt(ip2.value);
    if(checkon[1].style.display == "block"&&checkon[2].style.display != "block"){
        allPrice.innerHTML = parseInt(xj[0].innerHTML);
    }else if(checkon[1].style.display != "block"&&checkon[2].style.display == "block"){
        allPrice.innerHTML = parseInt(xj[1].innerHTML);
    }else if(checkon[1].style.display == "block"&&checkon[2].style.display == "block"){
        allPrice.innerHTML = parseInt(xj[0].innerHTML)+parseInt(xj[1].innerHTML);
    }
}
function showAll() {
    if (checkbox[0].style.display = "block") {
        checkbox[0].style.display = "none";
        checkon[0].style.display = "block";
        for (var i = 1; i < checkon.length; i++) {
            checkbox[i].style.display = "none";
            checkon[i].style.display = "block";
        }
    }
    cn.innerHTML=2;
    allPrice.innerHTML = parseInt(xj[0].innerHTML)+ parseInt(xj[1].innerHTML);
}
function hideAll() {
    checkon[0].style.display ="none";
    checkbox[0].style.display ="block";
    for (var a = 1; a < checkon.length; a++) {
        checkbox[a].style.display = "block";
        checkon[a].style.display = "none";
    }
    cn.innerHTML=0;
    allPrice.innerHTML =0;
}

function showDj(i) {
    checkbox[i].style.display = "none";
    checkon[i].style.display = "block";
    if(cn.innerHTML==1){
        cn.innerHTML=2;
    }else{
        cn.innerHTML=1;
    }
    allPrice.innerHTML = parseInt(xj[i-1].innerHTML);
    if( checkon[1].style.display == "block"&&checkon[2].style.display == "block"){
        allPrice.innerHTML= parseInt(xj[0].innerHTML)+ parseInt(xj[1].innerHTML);
    }
}

function hideDj(i) {
    checkbox[i].style.display = "block";
    checkon[i].style.display = "none";
    if(cn.innerHTML==2){
        cn.innerHTML=1;
    }else{
        cn.innerHTML=0;
    }
    allPrice.innerHTML=parseInt(allPrice.innerHTML)-parseInt(xj[i-1].innerHTML);
    if( checkon[1].style.display != "block"&&checkon[2].style.display!= "block"){
        allPrice.innerHTML=0;
    }
}