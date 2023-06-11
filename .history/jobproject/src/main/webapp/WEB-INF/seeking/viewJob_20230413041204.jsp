<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

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
    <h1>Job Title: ${job.title}</h1>
    <p>Job Description: ${job.description}</p>
    <p>Location: ${job.location}</p>
    <p>Salary: $${job.salary}</p>
    <p>Education: ${job.education}</p>
    <p>Experience Level: ${job.experienceLevel}</p>
    <p>Job Type: ${job.jobType}</p>
    <p>Company Name: ${job.companyName}</p>
    <p>Posted Date: <fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></p>
    
        <h3>Apply for this job</h3>
        <form:form action="/seeking/apply/${job.id}" method="POST" enctype="multipart/form-data" modelAttribute="jobApplication">
            <input type="hidden" name="jobId" value="${job.id}" />
            <div class="form-group">
                <label for="coverLetter">Cover Letter</label>
                <form:textarea path="coverLetter" class="form-control" rows="5" />
                <form:errors path="coverLetter" cssClass="text-danger" />
            </div>
            <div class="form-group">
                <label for="applicationResumeFilePath">Upload Resume</label>
                <input type="file" name="applicationResumeFilePath" class="form-control-file" />
                <form:errors path="applicationResumeFilePath" cssClass="text-danger" />
            </div>
            <button type="submit" class="btn btn-primary">Apply</button>
        </form:form>
        
    </body>
    </html>
