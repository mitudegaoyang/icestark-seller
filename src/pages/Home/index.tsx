import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import { Link, useHistory } from 'ice';
import PageTitle from '@/components/PageTitle';

import styles from './index.module.scss';

const mockData = () => {
  return {
    status: 'SUCCESS',
    message: '请求成功',
    data: Array.from({ length: 10 }).map((item, index) => {
      return {
        id: `00000${index}`,
        name: '聘用合同',
        ourCompany: 'xxx商铺',
        amount: '999,999',
        currency: 'CNY',
        state: '签约中',
      };
    }),
  };
};

export default function List() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);

  async function handlePagination(currentPage) {
    await setCurrent(currentPage);
  }

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const { data: resData } = await mockApi();
      await setData(Array.isArray(resData) ? resData : []);
      await setLoading(false);
    }
    fetchData();
  }, [current]);

  function mockApi() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData());
      }, 600);
    });
  }

  function handleHistoryPush() {
    let history = useHistory();
    console.log(history)
    // history.push("/message");
  };

  return (
    <IceContainer>
      <PageTitle title="商家首页" />
      <Link className={styles.link} to="/list">子应用内跳转</Link>
      <br />
      <Button onClick={handleHistoryPush}>子应用间跳转 </Button>
    </IceContainer>
  );
}
