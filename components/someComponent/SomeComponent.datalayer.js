import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import SomeComponent from './SomeComponent';
import {generateToggleIsActive} from "./SomeComponent.utils"

export function SomeComponentDatalayer(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SomeComponent
      { ...props }
      isActive={isActive}
      toggleIsActive={generateToggleIsActive({
        isActive,
        setIsActive,
      })}
    />
  );
}

export default SomeComponentDatalayer;
