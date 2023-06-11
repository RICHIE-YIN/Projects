<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>login and reg</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
    ${userId}
    <div class="container">
    <h1  class="align-content-center">Login and Registration</h1>
        <div class="row">
            <div class="col-lg-6">
                <h2>Register</h2>
                <form:form action="/register" method="post" modelAttribute="newUser" class="mb-4">
                    <div class="form-group">
                        <form:label path="userName">Username</form:label>
                        <form:input class="form-control" path="userName"/>
                        <form:errors path="userName"/>
                    </div>
                    <div class="form-group">
                        <form:label path="email">Email</form:label>
                        <form:input class="form-control" path="email"/>
                        <form:errors path="email"/>
                    </div>
                    <div class="form-group" aria-labelledby="passwordHelpBlock">
                        <form:label path="password">Password</form:label>
                        <form:input class="form-control" path="password" />
                        <form:errors path="password"/>
                    </div>
                    <div class="form-group">
                        <form:label path="confirm">Confirm Password</form:label>
                        <form:input class="form-control" path="confirm"/>
                        <form:errors path="confirm"/>
                    </div>
                    <div class="form-group">
                        <form:label path="userType">User Type</form:label>
                        <form:select class="form-control" path="userType">
                            <form:option value="employer">Employer</form:option>
                            <form:option value="job_seeker">Looking for a job</form:option>
                        </form:select>
                    </div>
                    <input type="submit" value="Register" class="btn btn-primary">
                </form:form>
            </div>
            <div class="col-lg-6">
                <h2>Login</h2>
                <form:form action="/login" method="post" modelAttribute="newLogin">
                    <div class="form-group">
                        <form:label path="email">Email</form:label>
                        <form:input class="form-control" path="email"/>
                        <form:errors path="email"/>
                    </div>
                    <div class="form-group">
                        <form:label path="password">Password</form:label>
                        <form:input class="form-control" path="password"/>
                        <form:errors path="password"/>
                    </div>
                    <input type="submit" value="Login" class="btn btn-primary">
                </form:form>
            </div>
        </div>
    </div>
</body>
</html>