<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Job Seeker Profile</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
    <a href="/seeking">Back to job seeker dashboard</a>
    <h1>${user.userName}</h1>
    <h2>${user.email}</h2>
    <h3>Summary</h3>
    <p>${user.summary}</p>
    <a href="/seeking/edit-summary">Edit Summary</a>
    <h3>Resume</h3>
    <a href="${user.resumeFilePath}">Download Resume</a>
    <a href="/seeking/upload-resume">Upload Resume</a>
</body>
</html>
