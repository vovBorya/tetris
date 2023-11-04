import React from 'react';
import {useGameContext} from "../../context";

import styles from './Field.module.scss';

const Index = () => {
  const { field } = useGameContext()

  return (
    <div className={styles.field}>
      {field.map(row => (
        <div className={styles.fieldRow}>
          {row.map(cell => (
            <div className={styles.fieldCell}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
