package neomu.simsimhae.domain.vo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DateInfo {

	@Column(name = "create_date")
	private LocalDateTime createAt;
	
	@Column(name = "update_date")
	private LocalDateTime updateAt;
	
	public DateInfo(LocalDateTime createAt, LocalDateTime updateAt) {
		this.createAt = createAt;
		this.updateAt = updateAt;
	}

	public DateInfo(LocalDateTime createAt) {
		this(createAt, null);
	}	
	
}
