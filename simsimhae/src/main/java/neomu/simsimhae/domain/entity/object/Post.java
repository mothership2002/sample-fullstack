package neomu.simsimhae.domain.entity.object;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
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

import lombok.Getter;
import neomu.simsimhae.domain.entity.member.Member;
import neomu.simsimhae.domain.vo.DateInfo;

@Entity
@Getter
public class Post {

	@Id
	@GeneratedValue
	@Column(name = "post_id")
	private Long id;

	@Column(name = "post_title")
	private String title;

	@Column(name = "post_content")
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id", foreignKey = @ForeignKey(name = "member_post_fk"))
	private Member member;

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private List<Comment> commentList = new ArrayList<Comment>();

	@Column(name = "deleted")
	private boolean deleteFlag = false;

	@Embedded
	private DateInfo dateInfo;
	

	// 조회용 생성자
	public Post(Long id, String title, String content, Member member, DateInfo dateInfo) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.member = member;
		this.dateInfo = dateInfo;
	}

	// 삽입용 생성자
	public Post(String title, String content, Member member, DateInfo dateInfo) {
		this(null, title, content, member, dateInfo);
	}

	// 수정용 생성자
	public Post(Long id, String title, String content, DateInfo dateInfo) {
		this.title = title;
		this.content = content;
		this.dateInfo = dateInfo;
	}

}
