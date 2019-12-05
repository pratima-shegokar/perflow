package se.kth.sda6.perflow.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    void getUserByEmail() {
        User newUser = new User("user@dummy.com", "somepassword", "dummy name", "dummy");
        userService.register(newUser);
        User userByEmail = userService.findUserByEmail("user@dummy.com");
        assertEquals(newUser.getName(), userByEmail.getName());
        assertEquals(newUser.getEmail(), userByEmail.getEmail());
        assertEquals(newUser.getCompanyName(), userByEmail.getCompanyName());
    }

    @Test
    void returnNoneWhenNoMatchingUserFound() {
        User newUser = new User("newuser@dummy.com", "somepassword", "dummy name", "dummy");
        userService.register(newUser);
        Optional<User> userByEmail = userService.getUserByEmail("not@available.com");
        assertTrue(userByEmail.isEmpty());
    }

}