package neomu.simsimhae.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import neomu.simsimhae.domain.entity.member.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
