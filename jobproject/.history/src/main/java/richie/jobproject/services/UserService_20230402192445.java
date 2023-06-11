package richie.jobproject.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import richie.jobproject.models.LoginUser;
import richie.jobproject.models.User;
import richie.jobproject.repositories.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
    	// TO-DO - Reject values or register if no errors:
        // Reject if email is taken (present in database)
        if(userRegistered(newUser.getEmail())) {
            result.rejectValue("email", "EmailRegister", "Email already exists");
            return null;
        }
        // Reject if password doesn't match confirmation
        if(!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Confirm", "Passwords do not match");
            return null;
        }
        // Return null if result has errors
        if(result.hasErrors()) {
            return null; //aside from email and password
        }
        // Hash and set password, save user to database
        String hashedpw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashedpw);
        return userRepository.save(newUser);
    }




    public User login(LoginUser newLoginObject, BindingResult result) {
        // TO-DO: Additional validations!
        // TO-DO - Reject values:
        
    	// Find user in the DB by email
        // Reject if NOT present
        if(!userRegistered(newLoginObject.getEmail())) {
            result.rejectValue("email", "EmailLogin", "Invalid credentials");
            return null;
        }
        
        // Reject if BCrypt password match fails
        User user = findUserByEmail(newLoginObject.getEmail());
        if(!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Password", "Invalid credentials");
            return null;
        }
        // Return null if result has errors
        if(result.hasErrors()) {
            return null; //aside from email and password
        }
        // Otherwise, return the user object
        return user;
    }

    private boolean userRegistered(String email) { //checks if the email exists
        Optional<User> user = userRepository.findByEmail(email);
        return user.isPresent(); //if registed it will return true if not it will return false
    }

    private User findUserByEmail(String email) { //checks if there is a user associated with the email
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }
}
