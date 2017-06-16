<?php
	
//	$name = $_POST['username'];
//  $psw = $_POST['password'];
	
	$name = _post('username');
	$psw = _post('password');
    
    function _post($str){ 
		$val = !empty($_POST[$str]) ? $_POST[$str] : null; 
		return $val; 
	} 
   
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = 'test'; 
     
    
    $con = mysqli_connect($servername,$username,$password,$dbname); 
    $bool = true;
    $sql = 'select * from sfbest';
    $res = $con->query($sql);
    
	if ($res->num_rows > 0) {
		while ($row = $res->fetch_assoc()) {
			 if($row['num'] == $name){
                $bool = false; //表示用户已注册
            }
		}
	}    
	
	if ($bool) {
		$sql = 'insert into sfbest (num,psw) values("'.$name.'","'.$psw.'")';
		if($con->query($sql)){
            echo "注册成功";
        }else{
            echo "注册失败";
        }
	} else {
		echo "用户已注册！";
	}
     
//	if(mysqli_connect_error($con)){
//		echo '链接失败';
//	}else{			
//		 $sql = 'insert into sfbest (num,psw) values("'.$name.'","'.$psw.'")';
//		 if($res){
//		 	echo "注册成功";
//		 }
//	}; 
	
	//echo "hello";
	
	$con->close();
   
?>