package neomu.simsimhae.common;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommonResponse<T> {

	private String message;
	private LocalDateTime responseTime;
	private T data;
}
