import React from 'react';
import { ContainerImg, ImgMedia } from '@/components';
import { replaceImg } from '@/helpers';

export const ImagesMedia = ({ src }) => {
  return (
    <ContainerImg>
      <ImgMedia src={replaceImg(src)} alt={src} />
    </ContainerImg>
  );
};
