<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据

	$username = $_POST['username'];
	$userpass = $_POST['userpass'];

	
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
		$sqlstr = "select * from  usertable where username='$username' and userpass='$userpass'";
		$result = mysql_query($sqlstr,$conn);//$result:是结果集，其实就是表格

		//4)、关闭数据库
		mysql_close($conn);
	}	
	//3、响应
	
	//根据结果集的行数，来判断是否登录成功！
	$rows = mysql_num_rows($result);
	if($rows==1){
		echo "登录成功，去<a href='index.html'>首页</a>吧";
	}else{
		echo "登录失败，<a href='login.html'>请重新登录</a>";
	}
?>