<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employer Jobs</title>
    <!-- Add Bootstrap CSS -->
    
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- Add any other CSS or JavaScript files that you need here -->
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">My Posted Jobs</h1>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Posted Date</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${jobs}" var="job">
                    <tr>
                        <td><a href="/employer/viewjob/${job.id}">${job.title}</a></td>
                        <td><fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
    <!-- Add Bootstrap and jQuery JavaScript files -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
