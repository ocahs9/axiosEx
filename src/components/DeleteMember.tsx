import React from 'react';
import { deleteMember } from '../apis/memberApi';

interface DeleteMemberProps {
  memberId: number;
}

const DeleteMember: React.FC<DeleteMemberProps> = ({ memberId }) => {
  const handleDelete = () => {
    deleteMember(memberId)
      .then(response => {
        console.log('회원 삭제:', response.data);
      })
      .catch(error => {
        console.error(`ID ${memberId}의 회원 삭제 에러:`, error);
      });
  };

  return (
    <button onClick={handleDelete}>회원 삭제</button>
  );
};

export default DeleteMember;
