--SQL :struct query language ，结构化查询语言，操作数据库的语言

--建库

create database mydb1902

--建表

create table books(
   bookid char(10) not null,
   bookname varchar(50) not null,
   bookAuthor varchar(30)
)

--给表里插入数据
insert into books(bookid,bookname,bookAuthor)
values('0101010101','三国演义','罗贯中')

insert into books(bookid,bookname,bookAuthor)
values('0101010102','水浒传','施耐庵')

--查询
select * from books where bookAuthor='罗贯中'


--删除

delete from books where bookAuthor='罗贯中' 

--修改

update books 
   set bookname='西游记' 
 where bookAuthor='施耐庵'
