import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'

import PhotoStyles from './PhotoAndText.module.css';

type Props = {
    children: JSX.Element | JSX.Element[];
    src: string;
}

const PhotoAndText: FC<Props> = ({children, src}) => {

  const [isAlone, setIsAlone] = useState(false);



  return (
    <div className={cn(PhotoStyles.photo_and_text, 'mb-1 box-radius')}>
        <img src={src} alt='' className={cn(PhotoStyles.image, 'box-radius')} />
        {children}
    </div>
    
  )
}

export default PhotoAndText