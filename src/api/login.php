<?php

	class Res{
	    public $status;
	    public $msg;
	    public $userid;
	}
	
	$phone = $_POST["phone"]; 
    $password = $_POST["password"]; 
     
     
    $conn = new mysqli("localhost", "root", "root", "mylife");
      

    $sql = "select * from myuser";
    $result = $conn->query($sql);

	$isSuccess = false;
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			if($row["phone"] == $phone && $row["passwords"] == $password){
	              $isSuccess = true;
	              session_start();
	              $_SESSION["phone"] = $row["phone"];
	              $res = new Res();
                  $res->status = 1;
                  $res->msg = "success";
                  $res->userid = $row["id"];
                  echo json_encode($res);

                  $isSuccess = true;
   			}    
		}

		if(!$isSuccess){
            $res = new Res();
            $res->status = 0;
            $res->msg = "fail";
            $res->userid = "";
            echo json_encode($res);

        }
	}
	

	
	
	
	
	$conn->close();
     
?>