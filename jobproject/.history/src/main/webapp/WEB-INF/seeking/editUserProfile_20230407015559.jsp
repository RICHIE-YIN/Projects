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
        <form:input path="lastName" placeholder="Last Name" value="${userProfile.lastName}" />
        <br>
        <form:input type="number" path="phoneNumber" placeholder="Phone Number" value="${userProfile.phoneNumber}" />
        <br>
        <form:input path="address" placeholder="Address" value="${userProfile.address}" />
        <br>
        <form:input path="city" placeholder="City" value="${userProfile.city}" />
        <br>
        <form:input path="state" placeholder="State" value="${userProfile.state}" />
        <br>
        <form:input path="country" placeholder="Country" value="${userProfile.country}" />
        <br>
        <form:input path="summary" placeholder="Summary" value="${userProfile.summary}" />
        <br>
        <form:input path="skills" placeholder="Skills" value="${userProfile.skills}" />
        <br>
        <form:input path="languages" placeholder="Languages" value="${userProfile.languages}" />
        <br>
        <form:input path="availability" placeholder="Availability" value="${userProfile.availability}" />
        <br>
        <input type="hidden" name="userId" value="${user.id}" />
        <button type="submit" class="btn btn-primary">Save</button>
    </form:form>
    
</body>
</html>
