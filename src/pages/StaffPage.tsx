import React, { useEffect, useState } from 'react';
import { getStaffMembers } from '../services/staffService';
import type { StaffMember } from '../types/staff';
import { useTranslation } from 'react-i18next';
import StaffCard from '../components/StaffCard';

const StaffPage: React.FC = () => {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getStaffMembers().then(setStaffMembers);
  }, []);

  return (
    <div>
      <section className='staff-page'>
        <div className="container"></div>
        <h1 className='u-big-text u-serif-text'>{ t("staff.title")}</h1>
        <div className="staff-page-grid">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StaffPage;
