<?php
	ini_set("error_reporting","E_ALL & ~E_NOTICE");

	function  relevance(){
		$host = "localhost";
		$dbuser = "root";
		$dbpassw = "root";
		$dbname = "mylife";

		$con = mysqli_connect($host,$dbuser,$dbpassw,$dbname);

		if (mysqli_connect_error($con)){
			echo "链接数据库失败".mysqli_connect_error();
			return null;
		}
		return $con;
	}

	function query($sql){
		$conn =  relevance();
		$result = mysqli_query($conn,$sql);
		$jsonData = array();

		if ($result) {
			while ($obj = mysqli_fetch_object($result)) {				
					$jsonData[] = $obj;				
			}			
			mysqli_free_result($result);
		}
		mysqli_close($conn);
		return $jsonData;		
	}

	$num = $_GET["num"];
	$sql = "select * from list where id=$num";
	$result = query($sql);
	echo json_encode($result);
?>