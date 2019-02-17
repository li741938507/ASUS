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

var cli1=document.getElementsByClassName("cli_1")[0];
var cli2=document.getElementsByClassName("cli_2")[0];
var cli3=document.getElementsByClassName("cli_3")[0];
var cimg=document.getElementsByClassName("c_img")[0];
function showLi(y){
	if(y=="cli1"){
		cli1.style.borderTop="3px solid #000";
		cli2.style.borderTop="0px solid #000";
		cli3.style.borderTop="0px solid #000";
		cimg.style.background="url(imgs/1.jpg) no-repeat";
		}
	if(y=="cli2"){
		cli1.style.borderTop="0px solid #000";
		cli2.style.borderTop="3px solid #000";
		cli3.style.borderTop="0px solid #000";
		cimg.style.background="url(imgs/2.jpg) no-repeat";
		}
	if(y=="cli3"){
		cli1.style.borderTop="0px solid #000";
		cli2.style.borderTop="0px solid #000";
		cli3.style.borderTop="3px solid #000";
		cimg.style.background="url(imgs/3.jpg) no-repeat";
		}
	}