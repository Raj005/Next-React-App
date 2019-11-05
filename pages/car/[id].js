import React from 'react';
import { useRouter } from 'next/router';

const hello = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Inside car page with ID : {id}</div>;
};

export default hello;
