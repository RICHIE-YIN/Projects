<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Job Details</title>
    <!-- Add any CSS or JavaScript files that you need here -->
</head>
<body>
    <div class="container">
        <h1>${job.title}</h1>
        <p>${job.description}</p>
        <p>Posted Date: <fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></p>

        <h2>Applicants</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${applications}" var="application">
                    <c:if test="${not empty applications}">
                        <tr>
                            <td>${application.applicant.userName}</td>
                            <td>${application.applicant.email}</td>
                            <td>${application.applicationStatus}</td>
                            <td>
                                <form action="application/${id}/updatestatus" method="post">
                                    <select name="status">
                                        <option value="PENDING">PENDING</option>
                                        <option value="GO">GO</option>
                                        <option value="NO_GO">NO GO</option>
                                    </select>
                                    <button type="submit">Update Status</button>
                                </form>
                            </td>
                        </tr>
                    </c:if>
                </c:forEach>
                
                
            </tbody>
        </table>
    </div>
</body>
</html>
