package neomu.simsimhae.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import neomu.simsimhae.domain.dto.CommentDto;
import neomu.simsimhae.domain.entity.object.Comment;
import neomu.simsimhae.repository.CommentRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {
	
	private final CommentRepository commentRepository;
	
	public List<CommentDto> selectCommentListByPostId(Long postId, int page, int size) {	
		PageRequest pageable = PageRequest.of(page, size, Sort.by("id").ascending());
		Page<Comment> findByPostId = commentRepository.findByPostIdAndParentCommentIdIsNull(postId, pageable);
		
		List<CommentDto> result = findByPostId.getContent().stream()
				.map(e -> new CommentDto(e.getId(), e.getContent(), e.getDateInfo().getCreateAt(), e.getMember().getAccount(), e.getDateInfo().getUpdateAt(), null))
				.collect(Collectors.toCollection(ArrayList::new));
		return result;
	}

}
