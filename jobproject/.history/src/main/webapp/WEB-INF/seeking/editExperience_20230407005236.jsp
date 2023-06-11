<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit Experience</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
    <a href="/userProfile">Back to User Profile</a>
    <h1>Edit Experience</h1>
    <form:form action="/experience/edit/${experience.id}" method="POST" modelAttribute="experience">
        <form:input path="jobName" placeholder="Job Name" value="${experience.jobName}" />
        <br>
        <form:input path="title" placeholder="Job Title" value="${experience.title}" />
        <br>
        <form:input path="description" placeholder="Job Description" value="${experience.description}" />
        <br>
        <form:input path="lengthOfEmployment" placeholder="Length of Employment" value="${experience.lengthOfEmployment}" />
        <br>
        <input type="hidden" name="userProfileId" value="${userProfile.id}" />
        <button type="submit" class="btn btn-primary">Save</button>
    </form:form>
    
</body>
</html>
