package neomu.simsimhae.domain.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public class CommentDto {

	private Long commentId;
	private String commentContent;
	private LocalDateTime createAt;
	private String account;
	private LocalDateTime updateAt;	
	private List<CommentDto> childComments;
	
	// insert
	public CommentDto(String commentContent, String account) {
		this.commentContent = commentContent;
		this.createAt = LocalDateTime.now();
		this.account = account;
	}
	
	
}
