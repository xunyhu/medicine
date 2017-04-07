<?php

	$phone = isset($_POST["phone"])?$_POST["phone"]:0; 
    $password = isset($_POST["password"])?$_POST["password"]:0;

    $conn = new mysqli("127.0.0.1", "root", "root", "mylife") or die("连接失败!");

    $isExist = false; //是否已经存在相同用户名

    $sql1 = "select * from myuser";
    $result = $conn->query($sql1);
    if($result->num_rows > 0){ //mysql_num_rows() 函数返回结果集中行的数目。
        while($row = $result->fetch_assoc()){//mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
            if($row["phone"] == $phone){
                echo "该用户已存在!";
                $isExist = true;
            }
        }
    }


    if(!$isExist) {      
        $sql2 = "insert into myuser(phone,passwords) values( $phone, '$password')";
        if ($conn->query($sql2)) {
            echo "register success";
        } else {
            echo "$sql2";
        }
    }

    $conn->close();
?>