<?php
	session_start();
	
	if(isset($_SESSION['num'])){
		unset($_SESSION['num']);
		//header("Location: index.html");
	}
?>