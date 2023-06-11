package richie.jobproject.controllers;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import richie.jobproject.models.Experience;
import richie.jobproject.models.UserProfile;
import richie.jobproject.services.ExperienceService;
import richie.jobproject.services.UserProfileService;

@Controller
@RequestMapping("/experience")
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @Autowired
    private UserProfileService userProfileService;

    @PostMapping("/create")
    public String create(Experience experience, @RequestParam Long userProfileId, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }

        UserProfile userProfile = userProfileService.getUserProfileById(userProfileId).orElse(null);
        if (userProfile != null) {
            experience.setUserProfile(userProfile);
            experienceService.createExperience(experience);
        }
        return "redirect:/seeking/profile";
    }

    @GetMapping("/edit/{id}")
    public String showEditExperienceForm(@PathVariable Long id, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }

        Optional<Experience> experience = experienceService.getExperienceById(id);
        if (experience.isPresent()) {
            model.addAttribute("experience", experience.get());
            return "seeking/editExperience.jsp";
        }
        return "redirect:/";
    }

    @PostMapping("/edit/{id}")
public String update(@PathVariable Long id, Experience updatedExperience, HttpSession session) {
    Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/";
    }

    Optional<Experience> existingExperience = experienceService.getExperienceById(id);
    if (existingExperience.isPresent()) {
        Experience experience = existingExperience.get();
        experience.setJobName(updatedExperience.getJobName());
        experience.setTitle(updatedExperience.getTitle());
        experience.setDescription(updatedExperience.getDescription());
        experience.setLengthOfEmployment(updatedExperience.getLengthOfEmployment());
        experienceService.updateExperience(experience);
    }
    return "redirect:/seeking/profile";
}

    @GetMapping("/{id}")
    public String read(@PathVariable Long id, Model model, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }

        Optional<Experience> experience = experienceService.getExperienceById(id);
        experience.ifPresent(exp -> model.addAttribute("experience", exp));
        return "experience";
    }

    @PostMapping("/update")
    public String update(Experience experience, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }

        experienceService.updateExperience(experience);
        return "redirect:/seeking/profile";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/";
        }
        
        experienceService.deleteExperience(id);
        return "redirect:/seeking/profile";
    }
}
