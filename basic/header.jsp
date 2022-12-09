<%@page import="format.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/resources/css/basic.css">
</head>

<body>
    <!-- 헤더 -->
    <header>
        <div class="container just-between">
            <a href="/" class="logo">미쿠의 모험</a>
            <div class="d-flex nav">
                <ul>
                    <li><a href="/game.jsp">게임시작</a></li>
                    <li><a href="/board.jsp">게시판</a></li>
                </ul>
                <ul>
<%
				User user = (User) session.getAttribute("LoginOK");
				if(user == null) {
%>                
                    <li><a href="/login.jsp">로그인</a></li>
                    <li><a href="/join.jsp">회원가입</a></li>
<%				
				} else {
%>                    
					<li><a href="/logout">로그아웃</a></li>
					<li><a href="#"><%=user.getName()%>님 환영합니다.</a></li>
<% 
				}
%>                    
                </ul>
            </div>
        </div>
    </header>