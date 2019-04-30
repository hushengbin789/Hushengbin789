<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据

	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$usersex = $_POST['sex'];

	
	//2、处理
	//1)、建立连接（连接数据库）（搭桥）
	$conn = mysql_connect('localhost','root','root');
	if (!$conn)
   	 {		
		die('Could not connect: ' . mysql_error());
	}else{
		
		//2)、选择数据库（目的地）
		mysql_select_db("mydb1902",$conn);


		//3)、执行数据库的SQL语句（增删改查）
		$sqlstr = "insert into usertable(username,userpass,usersex) values('$username','$userpass','$usersex')";
		$result = mysql_query($sqlstr,$conn);

		//4)、关闭数据库
		mysql_close($conn);
	}	
	//3、响应
	// echo $result;
	if($result=='1'){
		echo "注册成功，<a href='login.html'>请登录</a>";
	}else{
		echo "注册失败，<a href='reg.html'>请重新注册</a>";
	}

?>