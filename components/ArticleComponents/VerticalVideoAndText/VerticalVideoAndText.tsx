import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import VerticalVideoAndTextStyles from './VerticalVideoAndText.module.css';

type Props = {
  src: string;
  caption?: any;
};

const VerticalVideoAndText: FC<PropsWithChildren<Props>> = ({
  children,
  src,
  caption,
}) => {
  return (
    <div className={cn(VerticalVideoAndTextStyles.video_container, 'mb-1')}>
      <div className={cn(VerticalVideoAndTextStyles.video_text_container)}>
        {children}
      </div>
      <div className={cn(VerticalVideoAndTextStyles.video_wrapper)}>
        <video
          className={cn(VerticalVideoAndTextStyles.video_item, 'box-radius')}
          src={src}
          controls
        ></video>
        <p
          className="text-type-caption"
          dangerouslySetInnerHTML={{ __html: caption }}
        ></p>
      </div>
    </div>
  );
};

export { VerticalVideoAndText };
