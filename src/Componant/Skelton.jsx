
import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-300">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={200}
        className="rounded-xl mb-4"
      />
      <Skeleton variant="text" width="80%" height={25} />
      <Skeleton variant="text" width="60%" height={20} />
      <Skeleton variant="text" width="40%" height={30} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        className="mt-4 rounded-lg"
      />
    </div>
  );
};

export default SkeletonCard;
