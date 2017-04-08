<?php
	session_start();

   	if(isset($_SESSION['phone'])){
   	     $res = "'".(string)$_SESSION['phone']."'";
   		 echo "{'state':true,'nowUser':".$res."}";
   	}else {
   		echo "{'state':false}";
   		exit;
   	}
?>