<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employer Jobs</title>
    <!-- Add any CSS or JavaScript files that you need here -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Employer Dashboard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/employer/viewalljobs">View All Jobs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/employer/newjob">Create New Job</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          </nav>
          
        <h1 class="my-5">My Posted Jobs</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Posted Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${jobs}" var="job">
                    <tr>
                        <td><a href="/employer/viewjob/${job.id}">${job.title}</a></td>
                        <td><fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></td>
                        <td>
                            <c:if test="${isJobCreatorMap[job.id]}">
                                <!-- Display edit link -->
                                <a href="/employer/editjob/${job.id}">Edit Job Listing</a>
                            </c:if>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</body>
</html>
