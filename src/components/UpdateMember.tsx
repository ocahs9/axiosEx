import React, { useState } from 'react';
import { updateMember } from '../apis/memberApi';

interface UpdateMemberProps {
  memberId: number;
}

const UpdateMember: React.FC<UpdateMemberProps> = ({ memberId }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedMember = { name, email };
    updateMember(memberId, updatedMember)
      .then(response => {
        console.log('회원 정보 수정:', response.data);
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error(`ID ${memberId}의 회원 정보 수정 에러:`, error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>이메일: </label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <button type="submit">회원 수정</button>
    </form>
  );
};

export default UpdateMember;
