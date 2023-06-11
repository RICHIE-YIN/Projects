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
                                    <select name="status">
                                        <option value="PENDING">PENDING</option>
                                        <option value="GO">GO</option>
                                        <option value="NO_GO">NO GO</option>
                                    </select>
                                    <button type="submit">Update Status</button>
                                </form>
                            </td>
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
</body>
</html>
