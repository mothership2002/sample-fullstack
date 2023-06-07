package neomu.simsimhae.domain.vo;

import javax.persistence.Embeddable;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberInfo {

	private String email;
	private String phoneNumber;

	public MemberInfo(String email, String phoneNumber) {
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
}
