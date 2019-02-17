var hidepart=document.getElementById("hidepart");
var pimg=document.getElementsByClassName("p_img")[0];
function showPart(){
    if(hidepart.style.display=="block"){
        hidepart.style.display="none";
        pimg.style.cssText="background:url(imgs/jiantou1.png) no-repeat;background-size:cover;";
    }else{
        hidepart.style.display="block";
        pimg.style.cssText="background:url(imgs/jiantou2.png) no-repeat;background-size:cover;";
    }
}
function $(a){
    return document.getElementById(a);
}
var h1=$("h_1");
var h2=$("h_2");
var h3=$("h_3");
var h4=$("h_4");
var h5=$("h_5");
var li1=$("li1");
var li2=$("li2");
var li3=$("li3");
var li4=$("li4");
var li5=$("li5");

var h31=$("h3_1");
var h32=$("h3_2");
var h33=$("h3_3");
var h34=$("h3_4");
var li31=$("li31");
var li32=$("li32");
var li33=$("li33");
var li34=$("li34");
var li35=$("li35");
function navShow(id){

    if(id=="h1"){
        h1.style.display="block";
        h2.style.display="none";
        h3.style.display="none";
        h4.style.display="none";
        h5.style.display="none";
        li2.style.background="#fff";
        li1.style.background="#565656";
        li3.style.background="#fff";
        li4.style.background="#fff";
        li5.style.background="#fff";
    }
    if(id=="h2"){
        h2.style.display="block";
        h1.style.display="none";
        h3.style.display="none";
        h4.style.display="none";
        h5.style.display="none";
        li2.style.background="#565656";
        li1.style.background="#fff";
        li3.style.background="#fff";
        li4.style.background="#fff";
        li5.style.background="#fff";
    }
    if(id=="h3"){
        h3.style.display="block";
        h2.style.display="none";
        h1.style.display="none";
        h4.style.display="none";
        h5.style.display="none";
        li2.style.background="#fff";
        li1.style.background="#fff";
        li3.style.background="#565656";
        li4.style.background="#fff";
        li5.style.background="#fff";
    }
    if(id=="h4"){
        h4.style.display="block";
        h2.style.display="none";
        h3.style.display="none";
        h1.style.display="none";
        h5.style.display="none";
        li2.style.background="#fff";
        li1.style.background="#fff";
        li3.style.background="#fff";
        li4.style.background="#565656";
        li5.style.background="#fff";
    }
    if(id=="h5"){
        h4.style.display="none";
        h2.style.display="none";
        h3.style.display="none";
        h1.style.display="none";
        h5.style.display="block";
        li2.style.background="#fff";
        li1.style.background="#fff";
        li3.style.background="#fff";
        li4.style.background="#fff";
        li5.style.background="#565656";
    }
}

function navShow2(id){

    if(id=="h31"){
        h31.style.display="block";
        h32.style.display="none";
        h33.style.display="none";
        h34.style.display="none";
        li32.style.background="#fff";
        li31.style.background="#565656";
        li33.style.background="#fff";
        li34.style.background="#fff";
    }
    if(id=="h32"){
        h32.style.display="block";
        h31.style.display="none";
        h33.style.display="none";
        h34.style.display="none";
        li32.style.background="#565656";
        li31.style.background="#fff";
        li33.style.background="#fff";
        li34.style.background="#fff";
    }
    if(id=="h33"){
        h33.style.display="block";
        h32.style.display="none";
        h31.style.display="none";
        h34.style.display="none";
        li32.style.background="#fff";
        li31.style.background="#fff";
        li33.style.background="#565656";
        li34.style.background="#fff";
    }
    if(id=="h34"){
        h34.style.display="block";
        h32.style.display="none";
        h33.style.display="none";
        h31.style.display="none";
        li32.style.background="#fff";
        li31.style.background="#fff";
        li33.style.background="#fff";
        li34.style.background="#565656";
    }
    if(id=="h35"){
        h34.style.display="none";
        h32.style.display="none";
        h33.style.display="none";
        h31.style.display="none";
        li32.style.background="#fff";
        li31.style.background="#fff";
        li33.style.background="#fff";
        li34.style.background="#fff";
    }
}


var timer=null;
var x;
function showHide(x){

    document.getElementById(x).style.display="block";
    clearTimeout(timer);
}
function hideHide(x){
    timer=setTimeout(function(){
        document.getElementById(x).style.display="none";
    },10);
}
function iMouseOver(x){
    clearTimeout(timer);
    document.getElementById(x).style.display="block";
}
function iMouseOut(x){
    document.getElementById(x).style.display="none";
}


var c1=$("content1");
var c2=$("content2");
var c3=$("content3");
var l1=document.getElementsByClassName("li01")[0];
console.log(l1);

var l2=document.getElementsByClassName("li2")[0];
console.log(l2);
var l3=document.getElementsByClassName("li3")[0];
console.log(l3);
var s1=document.getElementsByClassName("span1")[0];
var s2=document.getElementsByClassName("span2")[0];
var s3=document.getElementsByClassName("span3")[0];
function showContent(a){
	if(a=="c1"){
		c1.style.display="block";
		c2.style.display="none";
		c3.style.display="none";
		l1.style.background="#fff";
		l2.style.background="#4F4F4F";
		l3.style.background="#4F4F4F";
		s1.style.color="#999";
		s2.style.color="#fff";
		s3.style.color="#fff";
		}
	if(a=="c2"){
		c1.style.display="none";
		c2.style.display="block";
		c3.style.display="none";
		l1.style.background="#4F4F4F";
		l2.style.background="#fff";
		l3.style.background="#4F4F4F";
		s1.style.color="#fff";
		s2.style.color="#999";
		s3.style.color="#fff";
		l2.style.boxShadow="0px 2px 10px rgba(0,0,0,0.1)";
		}
	if(a=="c3"){
		c1.style.display="none";
		c2.style.display="none";
		c3.style.display="block";
		l1.style.background="#4F4F4F";
		l2.style.background="#4F4F4F";
		l3.style.background="#fff";
		s1.style.color="#fff";
		s2.style.color="#fff";
		s3.style.color="#999";
		l3.style.boxShadow="2px -2px 10px rgba(0,0,0,0.1)";
		}
	}