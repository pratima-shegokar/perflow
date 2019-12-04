package se.kth.sda6.perflow.authenticationfacade;

import org.springframework.security.core.Authentication;

public interface IAuthenticationFacade {
        Authentication getAuthentication();
}
