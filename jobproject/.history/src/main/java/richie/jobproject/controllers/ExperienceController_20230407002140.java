package richie.jobproject.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

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
    public String create(Experience experience, @RequestParam Long userProfileId) {
        UserProfile userProfile = userProfileService.getUserProfileById(userProfileId).orElse(null);
        if (userProfile != null) {
            experience.setUserProfile(userProfile);
            experienceService.createExperience(experience);
        }
        return "redirect:/";
    }

    @GetMapping("/{id}")
    public String read(@PathVariable Long id, Model model) {
        Optional<Experience> experience = experienceService.getExperienceById(id);
        experience.ifPresent(exp -> model.addAttribute("experience", exp));
        return "experience";
    }

    @PostMapping("/update")
    public String update(Experience experience) {
        experienceService.updateExperience(experience);
        return "redirect:/";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        experienceService.deleteExperience(id);
        return "redirect:/";
    }
}
