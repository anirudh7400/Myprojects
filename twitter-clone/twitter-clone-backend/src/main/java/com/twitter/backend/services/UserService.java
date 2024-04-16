package com.twitter.backend.services;

import com.twitter.backend.exception.EmailNotFoundException;
import com.twitter.backend.exception.SameUserAlreadyExist;
import com.twitter.backend.model.User;
import com.twitter.backend.model.UserData;
import com.twitter.backend.model.UserTweet;

import java.util.ArrayList;

public interface UserService {

    public User createUser(UserData userData) throws SameUserAlreadyExist;

    public User findUser(String email, String password) throws EmailNotFoundException;

    public User updateUser(String email, UserTweet userTweet);
    public User deleteTweet(String email, UserTweet userTweet);

}
