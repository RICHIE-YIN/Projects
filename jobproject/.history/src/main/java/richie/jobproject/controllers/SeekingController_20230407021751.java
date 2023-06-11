package richie.jobproject.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

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
public class SeekingController {
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

    @GetMapping("/seeking/profile")
    public String profile(HttpSession session, Model model) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        User user = userService.findById(userId);
        if (!user.getUserType().equals("job_seeker")) {
            return "redirect:/";
        }
        UserProfile userProfile = userProfileService.findByUserId(userId);
        if (userProfile != null) {
            List<Experience> experiences = experienceService.findByUserProfileId(userProfile.getId());
            model.addAttribute("experiences", experiences);
        }
        model.addAttribute("user", user);
        model.addAttribute("userProfile", userProfile);
        model.addAttribute("newUserProfile", new UserProfile());
        model.addAttribute("newExperience", new Experience());
        return "seeking/profile.jsp";
    }
    
    

    @GetMapping("/seeking/viewalljobs")
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
        model.addAttribute("applications", jobApplicationService.findAllByApplicant(user));
        return "seeking/viewAllJobs.jsp";
    }
    
    @GetMapping("/seeking/viewjob/{id}")
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

    // @PostMapping("/apply/{id}")
    // public String applyForJob(@PathVariable("id") Long jobId, @Valid @ModelAttribute("jobApplication") JobApplication jobApplication, BindingResult result, HttpSession session) {
    //     Long userId = (Long) session.getAttribute("userId");
    //     if (userId == null) {
    //         return "redirect:/";
    //     }
    //     User user = userService.findById(userId);
    //     if (!user.getUserType().equals("job_seeker")) {
    //         return "redirect:/";
    //     }
    //     if (result.hasErrors()) {
    //         return "seeking/viewJob.jsp";
    //     }
    //     Job job = jobService.findById(jobId);
    //     jobApplication.setApplicant(user);
    //     jobApplication.setJob(job);
    //     jobApplication.setAppliedDate(new Date());
    //     jobApplicationService.createJobApplication(jobApplication);
    //     return "redirect:/seeking/viewalljobs";
    // }

    @PostMapping("/seeking/apply/{id}")
    public String applyForJob(@PathVariable("id") Long jobId, @Valid @ModelAttribute("jobApplication") JobApplication jobApplication, BindingResult result, HttpSession session, @RequestParam("applicationResumeFilePath") MultipartFile file) {
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

        // Set UserProfile and experiences to the job application
        UserProfile userProfile = userProfileService.findByUserId(userId);
        jobApplication.setUserProfile(userProfile);

        // Handle the resume file upload
        if (!file.isEmpty()) {
            String uniqueFileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String folderPath = "resumes/";

            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(folderPath + uniqueFileName);
                Files.write(path, bytes);

                // Update the job application's resume file path in the database
                jobApplication.setApplicationResumeFilePath(folderPath + uniqueFileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        jobApplicationService.createJobApplication(jobApplication);
        return "redirect:/seeking/viewalljobs";
    }

    @PostMapping("/uploadResume")
    public String handleFileUpload(@RequestParam("resume") MultipartFile file, HttpSession session) {
        if (file.isEmpty()) {
            // Handle the case where the file is empty or not selected
            return "redirect:/seeking/profile";
        }

        // Get the user from the session
        Long userId = (Long) session.getAttribute("userId");
        User user = userService.findById(userId);

        // Generate a unique file name by appending a timestamp to the original file name
        String uniqueFileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        // Define the folder where the file should be saved
        String folderPath = "resumes/";

        // Save the file to the folder
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(folderPath + uniqueFileName);
            Files.write(path, bytes);

            // Update the user's resume file path in the database
            user.setResumeFilePath(folderPath + uniqueFileName);
            userService.updateUser(user);
        } catch (IOException e) {
            // Handle the exception if the file cannot be saved
            e.printStackTrace();
        }

        return "redirect:/seeking/profile";
    }



}
