import { Spin, Typography } from 'antd';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spin
        tip={
          <Typography.Text className={styles.loaderText} strong>
            Загрузка ...
          </Typography.Text>
        }
        size='large'
      />
    </div>
  );
};

export { Loader };
