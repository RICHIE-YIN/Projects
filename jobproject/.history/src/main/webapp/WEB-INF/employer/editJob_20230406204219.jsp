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
    <a href="/employer">back to employer dashboard</a>
    <h1>Add a Job</h1>
    <form:form action="/newjob" method="POST" modelAttribute="job">
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
        <div class="form-group">
            <label for="location">Location</label>
            <form:input path="location" class="form-control"/>
            <form:errors path="location"/>
        </div>
        <div class="form-group">
            <label for="salary">Salary</label>
            <form:input path="salary" class="form-control"/>
            <form:errors path="salary"/>
        </div>
        <div class="form-group">
            <label for="education">Education</label>
            <select name="education" class="form-control">
                <option value="">Select Education</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Ph.D.">Ph.D.</option>
            </select>
        </div>
        <div class="form-group">
            <label for="experienceLevel">Experience Level</label>
            <select name="experienceLevel" class="form-control">
                <option value="">Select Experience Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Experienced">Experienced</option>
                <option value="Senior">Senior</option>
                <option value="Executive">Executive</option>
            </select>
        </div>
        <div class="form-group">
            <label for="jobType">Job Type</label>
            <select name="jobType" class="form-control">
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
            </select>
        </div>
        <div class="form-group">
            <label for="companyName">Company Name</label>
            <form:input path="companyName" class="form-control"/>
            <form:errors path="companyName"/>
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
    </form:form>
</body>
</html>
