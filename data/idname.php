<?php
	session_start();
	
	if(isset($_SESSION['num'])){
   	       $res = "'".(string)$_SESSION['num']."'";
   		 echo "{'state':true,'clientName':".$res."}";
   	}else {
   		echo "{'state':false}";
   		exit;
   	}
?>