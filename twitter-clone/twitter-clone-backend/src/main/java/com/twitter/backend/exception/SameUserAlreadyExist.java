package com.twitter.backend.exception;

public class SameUserAlreadyExist extends Throwable {

    public SameUserAlreadyExist(String message){
        super(message);
    }
}
