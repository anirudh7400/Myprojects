package com.twitter.backend.services;

import com.twitter.backend.exception.EmailNotFoundException;
import com.twitter.backend.exception.SameUserAlreadyExist;
import com.twitter.backend.model.User;
import com.twitter.backend.model.UserData;
import com.twitter.backend.model.UserTweet;
import com.twitter.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(UserData userData) throws SameUserAlreadyExist{

        User user = User.build(0, userData.getUserName(), userData.getEmail(),  userData.getPassword(),
        new ArrayList<>());

        User tempUser = userRepository.findByEmail(userData.getEmail());
        if(tempUser == null){
            user.setPassword(bCryptPasswordEncoder.encode(userData.getPassword()));
            userRepository.save(user);
        }

        else{
            throw new SameUserAlreadyExist("email already taken !!!");
        }
        return user;
    }

    public User findUser(String email, String password) throws EmailNotFoundException {
        User user =  userRepository.findByEmail(email);

        if(user != null && bCryptPasswordEncoder.matches(password, user.getPassword())){
            return user;
        }
        else{
            throw new EmailNotFoundException("email not found !!");
        }
    }

    public User updateUser(String email, UserTweet userTweet){

        User user = userRepository.findByEmail(email);
        user.getTweet().add(userTweet.getTweet());

        userRepository.save(user);
        return user;
    }

    public User findUserDetails(String email){
        User user = userRepository.findByEmail(email);

        return user;
    }

    public User deleteTweet(String email, UserTweet userTweet){

        User user = userRepository.findByEmail(email);

        List<String> temp = user.getTweet();

        if(temp.contains(userTweet.getTweet())){
            temp.remove(userTweet.getTweet());
        }
        user.setTweet(new ArrayList<>(temp));
        userRepository.save(user);

        return user;
    }

}
