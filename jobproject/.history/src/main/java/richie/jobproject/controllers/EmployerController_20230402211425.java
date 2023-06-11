package richie.jobproject.controllers;

import java.time.LocalDate;

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
import richie.jobproject.models.User;
import richie.jobproject.services.JobService;
import richie.jobproject.services.UserService;

@Controller
@RequestMapping("/employer")
public class EmployerController {

    @Autowired
    private UserService userService;

    @Autowired
    private JobService jobService;

    @GetMapping("/employer/newjob")
    public String newJobForm(@ModelAttribute("job") Job job, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("EMPLOYER")) {
            return "redirect:/";
        }
        model.addAttribute("user", user);
        return "employer/addJob";
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
            return "employer/addJob";
        }
        job.setEmployer(user);
        job.setPostedDate(LocalDate.now());
        jobService.createJob(job);
        return "redirect:/employer";
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
}

