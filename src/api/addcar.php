<?php
	$user = $_POST["user"];
	$goods = $_POST["goodsid"];

	$conn = mysqli_connect('localhost','root','root','mylife');

	$sql = "insert into mycarlist(userid,goodsid) values('$user','$goods')";

	if ($conn -> query($sql)) {
		echo "success";
	} else {
		echo "fail";
	}

	$conn -> close();
?>