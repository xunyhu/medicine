<?php
	$username = $_POST["username"]; //从客户端获取的用户名
    $password = $_POST["password"]; //从客户端获取的密码
     
     
    $conn = new mysqli("localhost", "root", "root", "test");
      

    $sql = "select * from sfbest";
    $result = $conn->query($sql);
      
//  if ($result->num_rows > 0) {
//	    // 输出每行数据
//	    while($row = $result->fetch_assoc()) {
//	        echo "<br/>num: ". $row["num"]. "psw: ". $row["psw"];
//	    }
//	} else {
//	    echo "0 个结果";
//	}

	 $isSuccess = false;
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			if($row["num"] == $username && $row["psw"] == $password){
                $isSuccess = true;
               // echo $row["num"];
                  session_start();
                  $_SESSION["num"] = $row["num"];
                  //echo $_SESSION["num"];
   			}    
		}
	}
	
	if($isSuccess){
		echo "登陆成功";
	}else{
		echo "登陆失败";
	}
	
	
	
	
	$conn->close();
     
?>