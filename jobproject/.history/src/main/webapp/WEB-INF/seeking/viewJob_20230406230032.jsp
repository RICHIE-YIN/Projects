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
    <a href="/seeking/viewalljobs">Back to all jobs</a>
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
            </div>
            <div class="form-group">
                <label for="applicationResumeFilePath">Upload Resume</label>
                <form:input type="file" path="applicationResumeFilePath" class="form-control-file" />
            </div>
            <button type="submit" class="btn btn-primary">Apply</button>
        </form:form>
        
    </body>
    </html>
