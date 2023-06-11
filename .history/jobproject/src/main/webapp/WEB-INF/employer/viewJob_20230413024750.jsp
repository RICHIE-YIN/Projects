<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Job Details</title>
    <!-- Add Bootstrap CSS -->

    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <!-- Add any other CSS or JavaScript files that you need here -->
</head>
<body>
    <div class="container mt-5">
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
        <table class="table table-striped table-bordered">
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
                            <td>${application.applicant.userProfile.firstName} ${application.applicant.userProfile.lastName}</td>
                            <td>${application.applicant.email}</td>
                            <td>${application.applicationStatus}</td>
                            <td>
                                <form action="/application/${application.id}/updatestatus" method="post">
                                    <select name="status" class="form-control">
                                        <option value="PENDING">PENDING</option>
                                        <option value="WILL_CONTACT">Will be in touch!</option>
                                        <option value="DECLINE">Decline</option>
                                    </select>
                                    <button type="submit" class="btn btn-primary mt-2">Update Status</button>
                                </form>
                            </td>
                        </tr>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <h4>User Profile</h4>
                            <p>Phone Number: ${application.applicant.userProfile.phoneNumber}</p>
                            <p>Address: ${application.applicant.userProfile.address}, ${application.applicant.userProfile.city}, ${application.applicant.userProfile.state}, ${application.applicant.userProfile.country}</p>
                            <p>Summary: ${application.applicant.userProfile.summary}</p>
                            <p>Skills: ${application.applicant.userProfile.skills}</p>
                            <p>Languages: ${application.applicant.userProfile.languages}</p>
                            <p>Availability: ${application.applicant.userProfile.availability}</p>
                            <p>Resume: <a href="/download/resume/${application.applicationResumeFilePath.substring(application.applicationResumeFilePath.lastIndexOf('/') + 1)}" target="_blank">Download Resume</a></p>
                            <h4>Experiences</h4>
                            <c:forEach items="${application.applicant.userProfile.experiences}" var="experience">
                                <div>
                                    <h5>${experience.jobName}</h5>
                                    <p>Title: ${experience.title}</p>
                                    <p>Description: ${experience.description}</p>
                                    <p>Length of Employment: ${experience.lengthOfEmployment}</p>
                                </div>
                            </c:forEach>
                        </td>
                    </tr>
                </c:if>
            </c:forEach>
        </tbody>
    </table>
</div>
<!-- Add jQuery and Bootstrap JavaScript files -->
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
</body>
</html>
