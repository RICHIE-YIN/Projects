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
    <h1>${user.userName} </h1>
    <h2>${user.email}</h2>
    <c:if test="${userProfile != null}">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Your Profile:</h3>
                <p>First Name: ${userProfile.firstName}</p>
                <p>Last Name: ${userProfile.lastName}</p>
                <p>Phone Number:${userProfile.phoneNumber}</p>
                <p>Address: ${userProfile.address}</p>
                <p>City: ${userProfile.city}</p>
                <p>State: ${userProfile.state}</p>
                <p>Country: ${userProfile.country}</p>
                <p>Summary: ${userProfile.summary}</p>
                <p>Skills: ${userProfile.skills}</p>
                <p>Languages: ${userProfile.languages}</p>
                <p>Availability: ${userProfile.availability}</p>
                <a href="/userprofile/edit/${userProfile.id}" class="btn btn-sm btn-info">Edit</a>
            </div>
        </div>
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
    <div class="card mt-4">
        <div class="card-header">
            <h4>Experiences</h4>
        </div>
        <ul class="list-group list-group-flush">
            <c:forEach var="experience" items="${experiences}">
                <li class="list-group-item">
                    <p>Job Name: ${experience.jobName}</p>
                    <p>Title: ${experience.title}</p>
                    <p>Description: ${experience.description}</p>
                    <p>Length of Employment: ${experience.lengthOfEmployment}</p>
                    <a href="/experience/edit/${experience.id}" class="btn btn-sm btn-info">Edit</a>
                    <form action="/experience/delete/${experience.id}" method="POST" class="d-inline">
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </li>
            </c:forEach>
        </ul>
    </div>
    <br>
    <br>
    <br>
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
        <input type="hidden" name="userProfileId" value="${userProfile.id}" />
        <button type="submit" class="btn btn-primary">Add Experience</button>
    </form:form>
    <!-- <h3>Resume</h3>
    <form action="/uploadResume" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="resume">Upload Resume</label>
            <input type="file" name="resume" class="form-control-file" />
            <button type="submit" class="btn btn-primary">Upload</button>
        </div> -->
    </form>
