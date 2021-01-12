import React from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import { Link } from 'ice';
import { appHistory } from '@ice/stark-app';
import { AppLink } from '../../utils';
import PageTitle from '@/components/PageTitle';

import styles from './index.module.scss';

export default function List() {

  function handleHistoryPush() {
    appHistory.push('/angular');
  };

  return (
    <IceContainer>
      <PageTitle title="商家首页" />
      <Link className={styles.link} to="/list">Link子应用内跳转</Link>
      <br />
      <br />
      <AppLink className={styles.link} to="/waiter">AppLink子应用间跳转</AppLink>
      <br />
      <br />
      <Button type="primary" onClick={handleHistoryPush}>appHistory子应用间跳转 </Button>
    </IceContainer>
  );
}
