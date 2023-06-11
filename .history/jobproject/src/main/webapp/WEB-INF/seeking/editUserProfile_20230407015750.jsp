<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit User Profile</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
    <a href="/userProfile">Back to User Profile</a>
    <h1>Edit User Profile</h1>
    <form:form action="/userprofile/edit/${userProfile.id}" method="POST" modelAttribute="userProfile">
        <label for="firstName">First Name:</label>
        <form:input path="firstName" placeholder="First Name" value="${userProfile.firstName}" />
        <br>
        <label for="lastName">Last Name:</label>
        <form:input path="lastName" placeholder="Last Name" value="${userProfile.lastName}" />
        <br>
        <label for="number">Phone Number:</label>
        <form:input type="number" path="phoneNumber" placeholder="Phone Number" value="${userProfile.phoneNumber}" />
        <br>
        <label for="address">Address:</label>
        <form:input path="address" placeholder="Address" value="${userProfile.address}" />
        <br>
        <label for="city">City:</label>
        <form:input path="city" placeholder="City" value="${userProfile.city}" />
        <br>
        <label for="state">State:</label>
        <form:input path="state" placeholder="State" value="${userProfile.state}" />
        <br>
        <label for="country">Country:</label>
        <form:input path="country" placeholder="Country" value="${userProfile.country}" />
        <br>
        <label for="summary">Summary:</label>
        <form:input path="summary" placeholder="Summary" value="${userProfile.summary}" />
        <br>
        <label for="skills">Skills:</label>
        <form:input path="skills" placeholder="Skills" value="${userProfile.skills}" />
        <br>
        <label for="languages">Languages:</label>
        <form:input path="languages" placeholder="Languages" value="${userProfile.languages}" />
        <br>
        <label for="availability">Availability:</label>
        <form:input path="availability" placeholder="Availability" value="${userProfile.availability}" />
        <br>
        <input type="hidden" name="userId" value="${user.id}" />
        <button type="submit" class="btn btn-primary">Save</button>
    </form:form>
    
</body>
</html>
