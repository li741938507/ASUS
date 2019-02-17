function show(id){
	var d1=document.getElementById("d1");
	var d2=document.getElementById("d2");
	var d3=document.getElementById("d3");
	var d4=document.getElementById("d4");
	var l1=document.getElementById("l_1");
	var l2=document.getElementById("l_2");
	var l3=document.getElementById("l_3");
	var l4=document.getElementById("l_4");
	if(id=="d1"){
		d1.style.display="block";
		d2.style.display="none";
		d3.style.display="none";
		d4.style.display="none";
		l1.style.background="#00A8FF";
		l2.style.background="#fff";
		l3.style.background="#fff";
		l4.style.background="#fff";
		}
	if(id=="d2"){
		d2.style.display="block";
		d1.style.display="none";
		d3.style.display="none";
		d4.style.display="none";
		l2.style.background="#00A8FF";
		l1.style.background="#fff";
		l3.style.background="#fff";
		l4.style.background="#fff";
		}
	if(id=="d3"){
		d3.style.display="block";
		d2.style.display="none";
		d1.style.display="none";
		d4.style.display="none";
		l3.style.background="#00A8FF";
		l2.style.background="#fff";
		l1.style.background="#fff";
		l4.style.background="#fff";
		}
	if(id=="d4"){
		d4.style.display="block";
		d2.style.display="none";
		d3.style.display="none";
		d1.style.display="none";
		l4.style.background="#00A8FF";
		l2.style.background="#fff";
		l3.style.background="#fff";
		l1.style.background="#fff";
		}
}

function show2(){
	var divs=document.getElementsByClassName("div_s")[0];
	if(divs.style.display=="block"){
		divs.style.display="none";
		}else{
			divs.style.display="block";
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