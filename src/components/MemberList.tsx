import React, { useEffect, useState } from 'react';
import { getAllMembers } from '../apis/memberApi';

interface Member {
  id?: number;
  name: string;
  email: string;
}

const MemberList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    getAllMembers()
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('회원 정보 가져오기 에러:', error);
      });
  }, []);

  return (
    <div>
      <h1>회원 목록</h1>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
