package richie.jobproject.controllers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.io.FileNotFoundException;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import richie.jobproject.models.Experience;
import richie.jobproject.models.Job;
import richie.jobproject.models.JobApplication;
import richie.jobproject.models.User;
import richie.jobproject.models.UserProfile;
import richie.jobproject.services.ExperienceService;
import richie.jobproject.services.JobApplicationService;
import richie.jobproject.services.JobService;
import richie.jobproject.services.UserProfileService;
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

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private ExperienceService experienceService;

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
        if (!user.getUserType().equals("employer")) {
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
        if (!user.getUserType().equals("employer")) {
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
        if (!user.getUserType().equals("employer")) {
            return "redirect:/";
        }
        if (result.hasErrors()) {
            return "employer/editJob.jsp";
        }
        Job existingJob = jobService.findById(id);
        existingJob.setTitle(job.getTitle());
        existingJob.setDescription(job.getDescription());
        existingJob.setSalary(job.getSalary());
        existingJob.setLocation(job.getLocation());
        existingJob.setEducation(job.getEducation());
        existingJob.setExperienceLevel(job.getExperienceLevel());
        existingJob.setJobType(job.getJobType());
        existingJob.setCompanyName(job.getCompanyName());
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
        if (!user.getUserType().equals("employer")) {
            return "redirect:/";
        }
        Job job = jobService.findById(id);
        if (job.getEmployer().getId().equals(userId)) {
            jobService.deleteJobById(id);
        }
        return "redirect:/employer";
    }

    @GetMapping("/employer/viewjob/{id}")
    public String viewJob(@PathVariable("id") Long id, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        Job job = jobService.findById(id);
        List<JobApplication> applications = jobApplicationService.findAllByJobId(id);
        model.addAttribute("job", job);
        model.addAttribute("applications", applications);
    
        // Include user profiles and experiences in the model
        List<UserProfile> userProfiles = new ArrayList<>();
        List<List<Experience>> allExperiences = new ArrayList<>();
        for (JobApplication application : applications) {
            UserProfile userProfile = userProfileService.findByUserId(application.getApplicant().getId());
            userProfiles.add(userProfile);
            List<Experience> experiences = experienceService.findAllByUserProfileId(userProfile.getId());
            allExperiences.add(experiences);
        }
        boolean isJobCreator = job.getEmployer().getId().equals(userId);
        model.addAttribute("isJobCreator", isJobCreator);
        model.addAttribute("userProfiles", userProfiles);
        model.addAttribute("allExperiences", allExperiences);
    
        return "employer/viewJob.jsp";
    }
    

    @PostMapping("/application/{id}/updatestatus")
    public String updateApplicationStatus(@PathVariable("id") Long id, @RequestParam("status") String status, HttpSession session, Model model) {
        System.out.println("Entering updateApplicationStatus"); // Add this line
        System.out.println("Updating application status for ID: " + id + " with status: " + status); // Add this line
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("employer")) {
            return "redirect:/";
        }
        JobApplication application = jobApplicationService.findById(id);
        if (application != null && application.getJob().getEmployer().getId().equals(userId)) {
            jobApplicationService.updateStatus(id, status);
        }
    
        return "redirect:/employer/viewjob/" + application.getJob().getId();
    }
    
    @GetMapping("/download/resume/{fileName:.+}")
    public ResponseEntity<Resource> downloadResume(@PathVariable String fileName, HttpServletRequest request) {
        try {
            // Load file as Resource
            Path filePath = Paths.get("resumes", fileName);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                // Determine content type
                String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                // Return file as a response
                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                throw new FileNotFoundException("File not found: " + fileName);
            }
        } catch (Exception ex) {
            throw new RuntimeException("Error while downloading the resume: " + ex.getMessage());
        }
    }


}

