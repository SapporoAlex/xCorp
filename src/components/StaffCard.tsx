import React from 'react';
import { useTranslation } from 'react-i18next';
import type { StaffMember } from '../types/staff';

interface Props {
  staff: StaffMember;
}

const StaffCard: React.FC<Props> = ({ staff }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ja';
  const image = staff.image || '/dummy.png';

  return (
    <div className="staff-card">
      <img src={image} alt={staff.name[lang]} />
      <h3>{staff.name[lang]}</h3>
      <p>{staff.title[lang]}</p>
    </div>
  );
};

export default StaffCard;
