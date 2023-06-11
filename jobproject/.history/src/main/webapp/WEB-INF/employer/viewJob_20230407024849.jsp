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
        <h1>Job Title: ${job.title}</h1>
        <p>Job Description: ${job.description}</p>
        <p>Location: ${job.location}</p>
        <p>Salary: $${job.salary}</p>
        <p>Education: ${job.education}</p>
        <p>Experience Level: ${job.experienceLevel}</p>
        <p>Job Type: ${job.jobType}</p>
        <p>Company Name: ${job.companyName}</p>
        <p>Posted Date: <fmt:formatDate value="${job.postedDate}" pattern="yyyy-MM-dd"/></p>

        <h2>Applicants</h2>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>User Profile</th>
            <th>Experiences</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${applications}" var="application" varStatus="status">
            <c:if test="${not empty applications}">
                <tr>
                    <td>${application.applicant.userName}</td>
                    <td>${application.applicant.email}</td>
                    <td>${application.applicationStatus}</td>
                    <td>
                        <strong>Summary:</strong> ${userProfiles[status.index].summary}<br>
                        <strong>Skills:</strong> ${userProfiles[status.index].skills}<br>
                        <strong>Education:</strong> ${userProfiles[status.index].education}
                    </td>
                    <td>
                        <c:forEach items="${allExperiences[status.index]}" var="experience">
                            <strong>Title:</strong> ${experience.title}<br>
                            <strong>Company:</strong> ${experience.company}<br>
                            <strong>Duration:</strong> ${experience.duration}<br>
                            <strong>Description:</strong> ${experience.description}<br>
                            <hr>
                        </c:forEach>
                    </td>
                    <td>
                        <form action="/application/${application.id}/updatestatus" method="post">
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
