<?php
	
	class Goods{
        public $goodsId;
        public $goodsName;
        public $goodsPrice;
        public $goodsImg;
    }


    $userid = $_GET["userid"];

    $conn = new mysqli("127.0.0.1", "root", "root", "mylife") or die("connect error");

    $sql = "select * from mylist inner join mycarlist on mylist.id=mycarlist.goodsid where mycarlist.userid='$userid'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $arr = array();
        while($row = $result->fetch_assoc()){
            $goods = new Goods();
            $goods->goodsId = $row["id"];
            $goods->goodsName = $row["description"];
            $goods->goodsPrice = $row["price"];
            $goods->goodsImg = $row["img"];
            array_push($arr, $goods);
        }

        //返回json字符串
        echo json_encode($arr);
    }
    else {
        echo "没有商品";
    }

    $conn->close();

?>