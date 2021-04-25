import React from 'react';

import Routes from '~/routes';

// Keep warnings only in dev. [AR]
// eslint-disable-next-line no-console
console.disableYellowBox = !__DEV__;

const src: React.FC = () => {
  return <Routes />;
};

export default src;
