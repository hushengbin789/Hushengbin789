<?php
	
	//1、建立连接（连接数据库）（搭桥）
	$conn = mysql_connect('localhost','root','root');
	if (!$conn)
   	 {		
		die('Could not connect: ' . mysql_error());
	}else{
		
		//2、选择数据库（目的地）
		mysql_select_db("mydb1902",$conn);


		//3、执行数据库的SQL语句（增删改查）
		$sqlstr = "insert into usertable(username,userpass,usersex) values('jiangzemin','123456','男')";
		mysql_query($sqlstr,$conn);

		//4、关闭数据库
		mysql_close($conn);

	}	


?>