import { FC } from 'react'
import Form from '../../UI/Form/Form';
import styles from "./ExchangeRatePage.module.scss";

const ExchangeRatePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  );
}

export default ExchangeRatePage