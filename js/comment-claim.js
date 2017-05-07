$(document).ready(function () {
	 var block = document.getElementById("scroll");
	 block.scrollTop = block.scrollHeight;
	 $('#scroll').resize(()=>{
		 var block = document.getElementById("scroll");
	     block.scrollTop = block.scrollHeight;
	 });
}