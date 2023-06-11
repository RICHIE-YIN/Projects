package richie.jobproject.controllers;

import java.util.Date;

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

    @GetMapping("/profile")
    public String profile(HttpSession session, Model model) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("job_seeker")) {
            return "redirect:/";
        }
        model.addAttribute("user", user);
        return "seeking/profile.jsp";
    }

    @GetMapping("/viewalljobs")
    public String viewAllJobs(HttpSession session, Model model) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("job_seeker")) {
            return "redirect:/";
        }
        model.addAttribute("user", user);
        model.addAttribute("jobs", jobService.findAllJobs());
        return "seeking/viewAllJobs.jsp";
    }
    
    @GetMapping("/viewjob/{id}")
    public String viewJob(@PathVariable("id") Long jobId, HttpSession session, Model model) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("job_seeker")) {
            return "redirect:/";
        }
        Job job = jobService.findById(jobId);
        model.addAttribute("user", user);
        model.addAttribute("job", job);
        model.addAttribute("jobApplication", new JobApplication());
        return "seeking/viewJob.jsp";
    }

    @PostMapping("/apply/{id}")
    public String applyForJob(@PathVariable("id") Long jobId, @Valid @ModelAttribute("jobApplication") JobApplication jobApplication, BindingResult result, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("job_seeker")) {
            return "redirect:/";
        }
        if (result.hasErrors()) {
            return "seeking/viewJob.jsp";
        }
        Job job = jobService.findById(jobId);
        jobApplication.setApplicant(user);
        jobApplication.setJob(job);
        jobApplication.setAppliedDate(new Date());
        jobApplicationService.createJobApplication(jobApplication);
        return "redirect:/seeking/viewalljobs";
    }



}
