<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Job</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
    <a href="/employer">back to home</a>
    <h1>Add a Job</h1>
    <form:form action="/employer/newjob" method="POST" modelAttribute="job">
        <div class="form-group">
            <label for="title">Job Title</label>
            <form:input path="title" class="form-control"/>
            <form:errors path="title"/>
        </div>
        <div class="form-group">
            <label for="description">Job Description</label>
            <form:textarea path="description" class="form-control" rows="5"></form:textarea>
            <form:errors path="description"/>
        </div>
        <button type="submit" class="btn btn-primary">Add Job</button>
    </form:form>
</body>
</html>
