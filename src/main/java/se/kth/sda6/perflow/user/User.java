package se.kth.sda6.perflow.user;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;


    @Length(min=5, max=100, message = "Password length most be between 5-100 characters")
    @Column(name = "password")
    @NotEmpty(message = "Password must not be empty")
    private String password;

    @Length(min=3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "name")
    @NotEmpty(message = "Please enter your name")
    private String name;

    @Length(min=3, max=100, message = "Company name must be between 3-100 characters")
    @Column(name = "company_name")
    @NotEmpty(message = "Please provide company name")
    private String companyName;

    // Hibernate needs a default constructor to function
    public User() {}

    public User(String email, String password, String name, String companyName) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.companyName = companyName;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
