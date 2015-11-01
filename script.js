var filterLetters = /[A-Za-z]/g;
var errorMessage1 = "Fill in the fields.<br>";
var errorMessage2 = "Enter the email correctly<br>"
var errorMessage3 = "Type a message<br>";
var isEmail = false;
var email;
var tabs = [];

function check() {
	
	//Step 1
	if(parseInt(document.getElementById("tab").value) == 1){
		
		document.getElementById("age").value = parseInt(document.getElementById("age").value.replace(filterLetters,''));
		if (isNaN(parseInt(document.getElementById("age").value)) || document.getElementById("age").value < 1 || document.getElementById("age").value > 120) {
			document.getElementById("age").value = 0;
		}
	}
	
	//Step 2
	
	//Step 3
}

function nextTab() {
	if(parseInt(document.getElementById("tab").value) == 1){
		
		if (isNaN(parseInt(document.getElementById("age").value)) || document.getElementById("age").value < 1 || document.getElementById("age").value > 120 || document.getElementById("name").value == '') {
			document.getElementById("notice").innerHTML = errorMessage1;
		}else{
			document.getElementById("notice").innerHTML = '';
			
			document.getElementById("btn_tab1").style.display = "none";
			tabs = document.getElementsByClassName("tabs");
			
			tabs[0].style.display = "none";
			
			document.getElementById("btn_tab2").style.display = "block";
			tabs[1].style.display = "block";
			
			document.getElementById("progress").value = 25;
			
			document.getElementById("tab").value  = parseInt(document.getElementById("tab").value) + 1;
		}
		
}else if (parseInt(document.getElementById("tab").value) == 2) {
		document.getElementById("notice").innerHTML = '';
		
		email = document.getElementById("email").value;
		isEmail = (email.indexOf("@") >= 1)?true:false;
		
		if(!isEmail){
			document.getElementById("notice").innerHTML += errorMessage2;
			
		}else if(document.getElementById("site").value == ''){
			document.getElementById("notice").innerHTML += errorMessage1;
			
		}else{
			document.getElementById("notice").innerHTML = '';
			
			document.getElementById("btn_tab2").style.display = "none";
			tabs = document.getElementsByClassName("tabs");
			
			tabs[1].style.display = "none";
			
			document.getElementById("btn_tab3").style.display = "block";
			tabs[2].style.display = "block";
			
			document.getElementById("progress").value = 75;
			
			document.getElementById("tab").value  = parseInt(document.getElementById("tab").value) + 1;
		}
		
}else if (parseInt(document.getElementById("tab").value) == 3) {
		if(document.getElementById("message").value == ""){
			document.getElementById("notice").innerHTML = errorMessage3;
		}else{
			document.getElementById("btn_tab3").style.display = "none";
			tabs = document.getElementsByClassName("tabs");
			
			tabs[2].style.display = "none";
			
			document.getElementById("btn_tab4").style.display = "block";
			tabs[3].style.display = "block";
			
			document.getElementById("progress").value = 100;
			
			document.getElementById("tab").value  = parseInt(document.getElementById("tab").value) + 1;
			
			document.getElementById("result").innerHTML = "Name: "+ document.getElementById("name").value + "<br><br> Age: " + document.getElementById("age").value + "<br><br> Site: " + document.getElementById("site").value + "<br><br> Email: " + document.getElementById("email").value + "<br><br> Message: <br>" + document.getElementById("message").value; 
			
		}
}
}