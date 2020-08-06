import React, { memo } from 'react';
import Button from 'components/button';
import illustration from 'assets/img/illustration/upgrade.svg';

const Upgrade = () => {
  return (
    <div className="flex flex-col items-center content-center">
      <img src={illustration} alt="upgrade to pro" className="h-48 w-48" />
      <h4 className="text-lg">Upgrade to pro</h4>
      <p className="mt-3 text-center text-sm text-gray-700">
        Upgrade to a pro to get unlimited access according to your needs
      </p>
      <Button className="text-white block mx-auto mt-4 w-32">Upgrade</Button>
    </div>
  );
};

export default memo(Upgrade);
