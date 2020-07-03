$(document).ready(function(){
	setTimeout(check_block, 500);
});

//Possibility for extending to check every x ms and refresh site. Disabled due to 
//unreliable detection of adblocker
function check_block(){
	if($(".social").height() === 0) {
		$('#notify-block').slideDown(250, callback=function() {
			/*setInterval(check_unblock, 1000)*/});
	}
}

/*function check_unblock(){
	if (isAdBlockActive===false) {
		location.reload();
	}
 }
*/