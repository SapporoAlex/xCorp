import type { StaffMember } from '../types/staff';

export const getStaffMembers = async (): Promise<StaffMember[]> => {
  const res = await import('../data/staff.json');
  return res.default;
};
