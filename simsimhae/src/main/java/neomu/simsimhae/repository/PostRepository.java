package neomu.simsimhae.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import neomu.simsimhae.domain.entity.object.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
