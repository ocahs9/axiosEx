import React, { useState } from 'react';
import { createMember } from '../apis/memberApi';

const CreateMember: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMember = { name, email };
    createMember(newMember)
      .then(response => {
        console.log('회원 생성:', response.data);
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('회원 생성 에러:', error);
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
      <button type="submit">회원 생성</button>
    </form>
  );
};

export default CreateMember;
