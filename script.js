function getFormvalue() {
    //Write your code here
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	let statement = `${fname} ${lname}`;
	
	alert(statement); 
}
