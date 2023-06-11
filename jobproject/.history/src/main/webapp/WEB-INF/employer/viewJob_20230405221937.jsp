<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>


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

                            <td>
                                <form:form action="application/${application.id}/updatestatus" method="post">
                                    <form:select path="status">
                                        <form:option value="PENDING" <c:if test="${application.status == 'PENDING'}">selected</c:if>>PENDING</form:option>
                                        <form:option value="GO" <c:if test="${application.status == 'GO'}">selected</c:if>>GO</form:option>
                                        <form:option value="NO_GO" <c:if test="${application.status == 'NO_GO'}">selected</c:if>>NO GO</form:option>
                                    </form:select>
                                    <button type="submit">Update Status</button>
                                </form:form>
                            </td>
                        </tr>
                    </c:if>
                </c:forEach>
                
            </tbody>
        </table>
    </div>
</body>
</html>
