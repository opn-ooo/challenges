import React from 'react';
import ContentLoader from 'react-content-loader';
import { CardLoading } from '@/components';
export const CharityCardLoader = (props) => {
  return (
    <CardLoading>
      <ContentLoader
        viewBox="0 0 100% 650"
        height={300}
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="42" rx="0" ry="5" width="100%" height="200" />
        <rect x="0" y="255" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="275" rx="5" ry="5" width="100%" height="10" />
      </ContentLoader>
    </CardLoading>
  );
};
