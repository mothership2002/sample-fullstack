package neomu.simsimhae.domain.entity.member;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import neomu.simsimhae.domain.entity.object.Comment;
import neomu.simsimhae.domain.entity.object.Post;
import neomu.simsimhae.domain.vo.MemberInfo;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"account"}, name = "account_unique"))
public class Member {
	
	@Id
	@GeneratedValue
	@Column(name = "member_id")
	private Long id;
	
	@Column(length = 13)
	private String account;
	
	private String password;
	
	@OneToMany(mappedBy = "member")
	private List<Post> postList;
	
	@OneToMany(mappedBy = "member")
	private List<Comment> commentList;
	
	@Embedded
	private MemberInfo memberInfo;
	
	private boolean secession = false;

	//생성용
	public Member(String account, String password, MemberInfo memberInfo) {
		this.account = account;
		this.password = password;
		this.memberInfo = memberInfo;
	}

	//수정용
	public Member(Long id, String password, MemberInfo memberInfo) {
		this.id = id;
		this.password = password;
		this.memberInfo = memberInfo;
	}
	
	
	
	
}
