package neomu.simsimhae.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import neomu.simsimhae.domain.entity.object.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	Page<Comment> findByPostIdAndParentCommentIdIsNull(Long postId, PageRequest pageable);

	
}
