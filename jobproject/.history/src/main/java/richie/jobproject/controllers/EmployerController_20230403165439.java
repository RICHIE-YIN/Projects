package richie.jobproject.controllers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;

import richie.jobproject.models.Job;
import richie.jobproject.models.JobApplication;
import richie.jobproject.models.User;
import richie.jobproject.services.JobApplicationService;
import richie.jobproject.services.JobService;
import richie.jobproject.services.UserService;

@Controller
// @RequestMapping("/employer")
public class EmployerController {

    @Autowired
    private UserService userService;

    @Autowired
    private JobService jobService;

    @Autowired
    private JobApplicationService jobApplicationService;

    @GetMapping("/employer/viewalljobs")
public String viewAllJobs(Model model, HttpSession session) {
    Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/";
    }
    User user = userService.findById(userId);
    if (!user.getUserType().equals("employer")) {
        return "redirect:/";
    }
    List<Job> jobs = jobService.findAllByEmployer(user);
    model.addAttribute("jobs", jobs);
    return "employer/viewAllJobs.jsp";
}

    @GetMapping("/employer/newjob")
    public String newJobForm(@ModelAttribute("job") Job job, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("employer")) {
            return "redirect:/";
        }
        model.addAttribute("user", user);
        return "employer/newJob.jsp";
    }

    @PostMapping("/newjob")
    public String createJob(@Valid Job job, BindingResult result, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("EMPLOYER")) {
            return "redirect:/";
        }
        if (result.hasErrors()) {
            return "employer/newJob.jsp";
        }
        job.setEmployer(user);
        
        // Convert LocalDate to Date
        LocalDate localDate = LocalDate.now();
        Date postedDate = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        job.setPostedDate(postedDate);
    
        jobService.createJob(job);
        return "redirect:/employer/viewalljobs";
    }
    

    @GetMapping("/employer/editjob/{id}")
    public String editJobForm(@PathVariable("id") Long id, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("EMPLOYER")) {
            return "redirect:/";
        }
        Job job = jobService.findById(id);
        if (!job.getEmployer().getId().equals(userId)) {
            return "redirect:/employer";
        }
        model.addAttribute("job", job);
        return "employer/editJob.jsp";
    }

    @PostMapping("/editjob/{id}")
    public String updateJob(@PathVariable("id") Long id, @Valid Job job, BindingResult result, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("EMPLOYER")) {
            return "redirect:/";
        }
        if (result.hasErrors()) {
            return "employer/editJob.jsp";
        }
        Job existingJob = jobService.findById(id);
        existingJob.setTitle(job.getTitle());
        existingJob.setDescription(job.getDescription());
        jobService.updateJob(existingJob);
        return "redirect:/employer";
    }

    @PostMapping("/deletejob/{id}")
    public String deleteJob(@PathVariable("id") Long id, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("EMPLOYER")) {
            return "redirect:/";
        }
        Job job = jobService.findById(id);
        if (job.getEmployer().getId().equals(userId)) {
            jobService.deleteJobById(id);
        }
        return "redirect:/employer";
    }

    @PostMapping("/application/{id}/updatestatus")
public String updateApplicationStatus(@PathVariable("id") Long id, @RequestParam("status") String status, HttpSession session) {
    Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/";
    }
    User user = userService.findById(userId);
    if (!user.getUserType().equals("EMPLOYER")) {
        return "redirect:/";
    }
    JobApplication application = jobApplicationService.findById(id);
    if (application != null && application.getJob().getEmployer().getId().equals(userId)) {
        jobApplicationService.updateStatus(id, status);
    }
    return "redirect:/employer/viewjob/" + application.getJob().getId();
}

}

