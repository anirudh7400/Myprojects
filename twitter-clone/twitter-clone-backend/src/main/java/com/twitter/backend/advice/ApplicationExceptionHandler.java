package com.twitter.backend.advice;

import com.twitter.backend.exception.EmailNotFoundException;
import com.twitter.backend.exception.SameUserAlreadyExist;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(EmailNotFoundException.class)
    public Map<String,String> handleBusinessException1(EmailNotFoundException ex){
        Map<String,String> errMap = new HashMap<>();
        errMap.put("errorMessage" , ex.getMessage());
        return errMap;
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(SameUserAlreadyExist.class)
    public Map<String,String> handleBusinessException2(SameUserAlreadyExist ex){
        Map<String,String> errMap = new HashMap<>();
        errMap.put("errorMessage" , ex.getMessage());
        return errMap;
    }

}
