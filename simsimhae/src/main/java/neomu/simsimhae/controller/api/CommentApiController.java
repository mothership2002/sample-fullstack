package neomu.simsimhae.controller.api;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import neomu.simsimhae.common.CommonResponse;
import neomu.simsimhae.domain.dto.CommentDto;
import neomu.simsimhae.service.CommentService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/comment")
public class CommentApiController {

	private final CommentService commentService;

	@GetMapping("/{postId}/list")
	public CommonResponse<List<CommentDto> > selectCommentList(@PathVariable Long postId,
														@RequestParam(name = "page", defaultValue = "0") int page,
														@RequestParam(name = "size", defaultValue = "5") int size) {
		List<CommentDto> commentDtoList =  commentService.selectCommentListByPostId(postId, page, size);
		
		return new CommonResponse<List<CommentDto> >("message", LocalDateTime.now(), commentDtoList);
	}
}
