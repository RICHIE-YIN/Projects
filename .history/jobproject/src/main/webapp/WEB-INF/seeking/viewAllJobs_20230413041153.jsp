<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>View All Jobs</title>
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
    <h1>View All Jobs</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Company</th>
                <th scope="col">Job Title</th>
                <th scope="col">Job Type</th>
                <th scope="col">Salary</th>
                <th scope="col">Application Status</th>
                <th scope="col">Posted Date</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${jobs}" var="job">
                <tr>
                    <td>${job.companyName}</td>
                    <td>${job.title}</td>
                    <td>${job.jobType}</td>
                    <td>${job.salary}</td>
                    <td>
                        <c:set var="applicationStatus" value="Not Applied" />
                        <c:forEach items="${applications}" var="application">
                            <c:if test="${application.job.id == job.id}">
                                <c:set var="applicationStatus" value="${application.applicationStatus}" />
                            </c:if>
                        </c:forEach>
                        ${applicationStatus}
                    </td>
                    <td><fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></td>
                    <td><a href="/seeking/viewjob/${job.id}">View Job</a></td>
                </tr>
            </c:forEach>
        </tbody>
        
    </table>
</body>
</html>
