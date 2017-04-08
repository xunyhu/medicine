<?php
	session_start();
	
	if(isset($_SESSION['phone'])){
		unset($_SESSION['phone']);
	}
?>