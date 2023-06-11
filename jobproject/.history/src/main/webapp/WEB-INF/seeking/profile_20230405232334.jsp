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
    <h1>${user.userName} </h1>
    <h2>${user.email}</h2>
    <h3>Summary</h3>
    <form action="/updateProfileSummary" method="POST">
        <div class="form-group">
            <label for="summary">Summary</label>
            <textarea name="summary" class="form-control" rows="5">${user.summary}</textarea>
            <button type="submit" class="btn btn-primary">Update Summary</button>
        </div>
    </form>
    <h3>Resume</h3>
    <form action="/seeking/uploadResume" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="resume">Upload Resume</label>
            <input type="file" name="resume" class="form-control-file" />
            <button type="submit" class="btn btn-primary">Upload</button>
        </div>
    </form>
    
</body>
</html>
