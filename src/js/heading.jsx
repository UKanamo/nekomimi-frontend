// @flow
import React from 'react';
import styles from '../css/heading.css';


// propsの型定義
type Props = {
  name: string,
};

const Heading = (props: Props) => {
  const { name } = props;
  return <h2 className={styles.text}>{`Hello ${name} World!`}</h2>;
};

export default Heading;
