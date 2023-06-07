package neomu.simsimhae.domain.entity.object;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import neomu.simsimhae.domain.entity.member.Member;
import neomu.simsimhae.domain.vo.DateInfo;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

	@Id @GeneratedValue
	@Column(name =  "comment_id")
	private Long id;
	
	@Column(name = "comment_content")
	private String content;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id", foreignKey = @ForeignKey(name = "member_comment_fk"))
	private Member member;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parent_comment_id", foreignKey = @ForeignKey(name = "comment_self_fk"))
	private Comment parentComment;
	
	@OneToMany(mappedBy = "parentComment")
	private List<Comment> childComment;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_id", foreignKey = @ForeignKey(name = "post_comment_fk"))
	private Post post;
	
	@Embedded
	private DateInfo dateInfo;
	
	@Column(name = "comment_flag")
	private boolean deletedFlag = false;
	
	private void addPost(Post post) {
		this.post = post;
		post.getCommentList().add(this);
	}

	
	// 생성자
	public Comment(String content, Member member, Post post, DateInfo dateInfo) {
		this.content = content;
		this.member = member;
		addPost(post);
		this.dateInfo = dateInfo;
	}


	public Comment(Long id, String content, DateInfo dateInfo) {
		this.id = id;
		this.content = content;
		this.dateInfo = dateInfo;
	}
	
	
	
}
