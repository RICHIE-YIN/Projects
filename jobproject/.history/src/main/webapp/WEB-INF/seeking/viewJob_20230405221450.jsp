<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>View Job</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
    <a href="/seeking/viewalljobs">Back to all jobs</a>
    <h1>${job.title}</h1>
    <h2>Posted Date: <fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></h2>
    <h3>Description</h3>
    <p>${job.description}</p>
        <h3>Requirements</h3>
    
        <h3>Apply for this job</h3>
        <form:form action="/apply/${job.id}" method="POST" enctype="multipart/form-data" modelAttribute="jobApplication">
            <input type="hidden" name="jobId" value="${job.id}" />
            <div class="form-group">
                <label for="coverLetter">Cover Letter</label>
                <form:textarea path="coverLetter" class="form-control" rows="5" />
            </div>
            <div class="form-group">
                <label for="resume">Upload Resume</label>
                <form:input type="file" path="resume" class="form-control-file" />
            </div>
            <button type="submit" class="btn btn-primary">Apply</button>
        </form:form>
        
    </body>
    </html>
