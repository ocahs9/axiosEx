import apiClient from './axiosInstance';

interface Member {
  id?: number;
  name: string;
  email: string;
}

export const getAllMembers = () => {
  return apiClient.get<Member[]>('/members/');
};

export const getMemberById = (memberId: number) => {
  return apiClient.get<Member>(`/members/${memberId}/`);
};

export const createMember = (newMember: Member) => {
  return apiClient.post<Member>('/members/', newMember);
};

export const updateMember = (memberId: number, updatedMember: Member) => {
  return apiClient.put<Member>(`/members/${memberId}/`, updatedMember);
};

export const deleteMember = (memberId: number) => {
  return apiClient.delete<void>(`/members/${memberId}/`);
};
