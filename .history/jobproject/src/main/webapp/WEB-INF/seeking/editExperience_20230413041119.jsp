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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Seeker Dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="/seeking/viewalljobs">View All Jobs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/seeking/profile">Profile</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
            </li>
        </ul>
        </div>
    </nav>
    <h1>Edit Experience</h1>
    <form:form action="/experience/edit/${experience.id}" method="POST" modelAttribute="experience">
        <label for="jobName">Job Name:</label>
        <form:input path="jobName" placeholder="Job Name" value="${experience.jobName}" />
        <br>
        <label for="title">Title:</label>
        <form:input path="title" placeholder="Job Title" value="${experience.title}" />
        <br>
        <label for="description">Description:</label>
        <form:input path="description" placeholder="Job Description" value="${experience.description}" />
        <br>
        <label for="lengthOfEmployment">Length of employement:</label>
        <form:input path="lengthOfEmployment" placeholder="Length of Employment" value="${experience.lengthOfEmployment}" />
        <br>
        <input type="hidden" name="userProfileId" value="${userProfile.id}" />
        <button type="submit" class="btn btn-primary">Save</button>
    </form:form>
    
</body>
</html>
