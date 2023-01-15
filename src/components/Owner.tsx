import React from 'react';
import cl from '../styles/components/Owner.module.css';

interface OwnerProps {
  title: string
}

const Owner:React.FC<OwnerProps> = ({title}) => {
  return (
    <div className={cl.owner} >
      {/* <input type="checkbox" /> */}
      {title}
    </div>
  );
};

export default Owner;
