package neomu.simsimhae.controller.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import neomu.simsimhae.exception.CustomException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/member")
public class MemberApiController {

	
	@GetMapping("/test")
	public void test() {
		throw new CustomException("hello");
	}
}
