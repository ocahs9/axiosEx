import React, { useEffect, useState } from 'react';
import { getMemberById } from '../apis/memberApi';

interface Member {
  id: number;
  name: string;
  email: string;
}

interface MemberDetailProps {
  memberId: number;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ memberId }) => {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    getMemberById(memberId)
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error(`ID ${memberId}의 회원 정보 가져오기 에러:`, error);
      });
  }, [memberId]);

  if (!member) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>회원 상세 정보</h1>
      <p>이름: {member.name}</p>
      <p>이메일: {member.email}</p>
    </div>
  );
};

export default MemberDetail;
