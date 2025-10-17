import React from 'react';
import { useTranslation } from 'react-i18next';


interface LocalizedString {
  ja: string;
  en: string;
}

interface StaffMember {
  id: string;
  name: LocalizedString;
  title: LocalizedString;
  image: string;
}

interface Props {
  staffMembers: StaffMember[];
}

const StaffGrid: React.FC<Props> = ({ staffMembers }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language; // 'ja' or 'en'

  return (
    <div className="staff-grid">
      {staffMembers.map((member) => (
        <div key={member.id} className="staff-item">
          <img src={member.image} alt={member.name[lang]} />
          <p>{member.name[lang]}</p>
          <p>{member.title[lang]}</p>
        </div>
      ))}
    </div>
  );
};

export default StaffGrid;
