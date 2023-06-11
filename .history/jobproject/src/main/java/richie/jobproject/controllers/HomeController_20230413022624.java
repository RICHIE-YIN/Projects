package richie.jobproject.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import richie.jobproject.models.LoginUser;
import richie.jobproject.models.User;
import richie.jobproject.services.UserService;

@Controller
public class HomeController {

    // Add once service is implemented:
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String index(Model model) {

        // Bind empty User and LoginUser objects to the JSP
        // to capture the form input
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "user/index.jsp";
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
    
        // TO-DO Later -- call a register method in the service
        // to do some extra validations and create a new user!
        System.out.println(newUser);
        User user = userService.register(newUser, result);
        if(result.hasErrors()) {
            // Be sure to send in the empty LoginUser before
            // re-rendering the page.
            model.addAttribute("newLogin", new LoginUser());
            
            return "user/index.jsp";
        }
    
        // No errors!
        // TO-DO Later: Store their ID from the DB in session,
        // in other words, log them in.
        session.setAttribute("userId", user.getId());
        // session.setAttribute("userName", user.getUserName());
        session.setAttribute("user", user);
        return "redirect:/home";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
            BindingResult result, Model model, HttpSession session) {
    
        // Add once service is implemented:
        User user = userService.login(newLogin, result);

        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "user/index.jsp";
        }

        // No errors!
        // TO-DO Later: Store their ID from the DB in session,
        // in other words, log them in.
        session.setAttribute("userId", user.getId());
        // session.setAttribute("userName", user.getUserName());
        session.setAttribute("user", user);

        return "redirect:/home";
    }

    @GetMapping("/home")
    public String home(HttpSession session) {
        if(session.getAttribute("userId") == null) {
            return "redirect:/logout";
        }
    
        User user = (User) session.getAttribute("user");
        String userType = user.getUserType();
    
        if (userType.equalsIgnoreCase("employer")) {
            return "employer/home.jsp";
        } else if (userType.equalsIgnoreCase("job_seeker")) {
            return "seeking/home.jsp";
        } else {
            return "redirect:/logout";
        }
    }
    

    //logout
    @GetMapping("/logout")
    public String logout(HttpSession session) { //passes in session
        session.invalidate(); //takes whatever is in session and clears it out
        return "redirect:/";
    }
}
