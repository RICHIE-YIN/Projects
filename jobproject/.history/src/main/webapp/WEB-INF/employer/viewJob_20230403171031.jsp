<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
                    <tr>
                        <td>${application.user.firstName} ${application.user.lastName}</td>
                        <td>${application.user.email}</td>
                        <td>${application.status}</td>
                        <td>
                            <form action="${pageContext.request.contextPath}/application/${application.id}/updatestatus" method="post">
                                <select name="status">
                                    <option value="PENDING" <c:if test="${application.status == 'PENDING'}">selected</c:if>>PENDING</option>
                                    <option value="GO" <c:if test="${application.status == 'GO'}">selected</c:if>>GO</option>
                                    <option value="NO_GO" <c:if test="${application.status == 'NO_GO'}">selected</c:if>>NO GO</option>
                                </select>
                                <button type="submit">Update Status</button>
                            </form>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
</body>
</html>
