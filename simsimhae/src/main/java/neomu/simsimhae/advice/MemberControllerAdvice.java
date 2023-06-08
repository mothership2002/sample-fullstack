package neomu.simsimhae.advice;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import neomu.simsimhae.common.CommonResponse;
import neomu.simsimhae.controller.api.MemberApiController;
import neomu.simsimhae.exception.CustomException;

@RestControllerAdvice(assignableTypes = MemberApiController.class)
public class MemberControllerAdvice {

	@ExceptionHandler(CustomException.class)
	public CommonResponse<HttpStatus> handlingCustomException(Exception ex) {
		return new CommonResponse<HttpStatus>(ex.getMessage(), LocalDateTime.now(), HttpStatus.BAD_REQUEST);
	}
	
	
}
