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
    <c:if test="${not userProfile == null}">
        <h3>Your Profile:</h3>
        ${userProfile.firstName}
        ${userProfile.lastName}
        ${userProfile.phoneNumber}
        ${userProfile.address}
        ${userProfile.city}
        ${userProfile.state}
        ${userProfile.country}
        ${userProfile.summary}
        ${userProfile.skills}
        ${userProfile.languages}
        ${userProfile.availability}
    </c:if>
    <c:if test="${userProfile == null}">
        <h3>Create UserProfile</h3>
        <form:form action="/userprofile/create" method="POST" modelAttribute="newUserProfile">
            <form:input path="firstName" placeholder="First Name" />
            <br>
            <form:input path="lastName" placeholder="Last Name" />
            <br>
            <form:input type="number" path="phoneNumber" placeholder="Phone Number" />
            <br>
            <form:input path="address" placeholder="Address" />
            <br>
            <form:input path="city" placeholder="City" />
            <br>
            <form:input path="state" placeholder="State" />
            <br>
            <form:input path="country" placeholder="Country" />
            <br>
            <form:input path="summary" placeholder="Summary" />
            <br>
            <form:input path="skills" placeholder="Skills" />
            <br>
            <form:input path="languages" placeholder="Languages" />
            <br>
            <form:input path="availability" placeholder="Availability" />
            <br>
            <input type="hidden" name="userId" value="${user.id}" />
            <button type="submit" class="btn btn-primary">Create</button>
        </form:form>
    </c:if>
    <h3>Experiences</h3>
    <c:forEach var="experience" items="${experiences}">
        <p>Job Name: ${experience.jobName}</p>
        <!-- Add Experience display fields here -->
    </c:forEach>
    <h3>Add Experience</h3>
    <form:form action="/experience/create" method="POST" modelAttribute="newExperience">
        <form:input path="jobName" placeholder="Job Name" />
        <br>
        <form:input path="title" placeholder="Job Title" />
        <br>
        <form:input path="description" placeholder="Job Description" />
        <br>
        <form:input path="lengthOfEmployment" placeholder="Length of Employment" />
        <br>
        <button type="submit" class="btn btn-primary">Add Experience</button>
    </form:form>
    <h3>Resume</h3>
    <form action="/uploadResume" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="resume">Upload Resume</label>
            <input type="file" name="resume" class="form-control-file" />
            <button type="submit" class="btn btn-primary">Upload</button>
        </div>
    </form>
