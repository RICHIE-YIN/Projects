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
                            <c:forEach items="${jobs}" var="job">
                                <!-- Display job details -->
                                <c:if test="${isJobCreatorMap[job.id]}">
                                    <!-- Display options for job creators -->
                                </c:if>
                            </c:forEach>
                            
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
