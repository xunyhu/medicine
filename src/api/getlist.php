<?php
	//echo "hello!";
	ini_set("error_reporting","E_ALL & ~E_NOTICE");
	
	function connect() {
		$locahost = "localhost";
		$username = "root";
		$password = "root";
		$dbname = "mylife";
		
		$con = mysqli_connect($servername,$username,$password,$dbname); 
		
		if (mysqli_connect_error($con)) {
			echo "链接数据库失败".mysqli_connect_error();
			return null;
		}
		
		return $con;		
	}
	
	function query($sql) {
		$conn = connect();
		$result = mysqli_query($conn,$sql);
		//定义一个数组
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
	
	$page = $_GET["page"];
	$pageNum = ($page-1)*16;
	$sql = "select * from list limit $pageNum,16";
	$result = query($sql);
	echo json_encode($result);
	
?>