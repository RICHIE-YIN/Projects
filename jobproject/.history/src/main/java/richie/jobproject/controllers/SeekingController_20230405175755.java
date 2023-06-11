package richie.jobproject.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import richie.jobproject.models.Job;
import richie.jobproject.models.JobApplication;
import richie.jobproject.models.User;
import richie.jobproject.services.JobApplicationService;
import richie.jobproject.services.JobService;
import richie.jobproject.services.UserService;

@Controller
public class SeekingController {
    @Autowired
    private UserService userService;
    
    @Autowired
    private JobService jobService;
    
    @Autowired
    private JobApplicationService jobApplicationService;
}
