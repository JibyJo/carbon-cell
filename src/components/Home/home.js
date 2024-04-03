import React from 'react';
import { Profile } from '../Profile/profile';
import Navigation from '../Navigation/navigation';
import Wallet from '../Wallet/wallet';
import DoughnutChart from '../Wallet/wallet';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Profile />
      {/* <Wallet /> */}
      <DoughnutChart />
    </div>
  );
};

export default Home;
