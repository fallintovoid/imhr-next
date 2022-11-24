import React, { FC, Children, cloneElement } from 'react';
import cn from 'classnames'

import CardStyles from './AuthorCard.module.css';
import { SVG } from '../../../models/svg';
import IconSelector from '../../UI/IconSelector';

type Props = {
    children: JSX.Element[] | JSX.Element;
    src: string;
}

const AuthorCard: FC<Props> = ({children, src}) => {

  const modifiedChildrens = Children.map(children, (child) => {
    console.log(child.type);
    
    return cloneElement(child, {className: 'mt-1 text-type-p'})
  })

  return (
    <div className={CardStyles.author_block}>
      <div className={cn(CardStyles.author_content, "box-radius")}>
        <svg
          className={CardStyles.author_image}
          viewBox="0 0 244 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <clipPath id="star">
            <path
              d="M117.329 2.41709C119.731 -0.561155 124.269 -0.561152 126.671 2.41709L135.933 13.9038C137.843 16.2722 141.223 16.8362 143.799 15.2163L156.289 7.35955C159.528 5.32247 163.82 6.79598 165.124 10.3927L170.155 24.2646C171.193 27.1248 174.207 28.7558 177.168 28.0598L191.533 24.6844C195.258 23.8093 198.839 26.5966 198.905 30.422L199.159 45.1759C199.212 48.2179 201.532 50.7391 204.56 51.0426L219.242 52.5144C223.049 52.8959 225.531 56.6951 224.351 60.3346L219.801 74.3716C218.863 77.2658 220.24 80.4041 223.005 81.674L236.414 87.8335C239.89 89.4305 241.004 93.8297 238.707 96.8889L229.845 108.688C228.018 111.121 228.301 114.536 230.504 116.635L241.186 126.814C243.956 129.454 243.581 133.976 240.415 136.124L228.203 144.406C225.685 146.114 224.843 149.436 226.245 152.136L233.044 165.233C234.806 168.629 232.983 172.785 229.291 173.788L215.051 177.656C212.115 178.453 210.241 181.322 210.69 184.331L212.867 198.926C213.432 202.71 210.358 206.049 206.541 205.799L191.816 204.834C188.78 204.635 186.076 206.74 185.524 209.731L182.844 224.242C182.15 228.005 178.159 230.164 174.629 228.688L161.016 222.994C158.209 221.821 154.968 222.933 153.474 225.584L146.228 238.438C144.349 241.771 139.873 242.518 137.014 239.976L125.987 230.17C123.713 228.149 120.287 228.149 118.013 230.17L106.986 239.976C104.127 242.518 99.6507 241.771 97.7721 238.438L90.5264 225.584C89.0324 222.933 85.7912 221.821 82.9844 222.994L69.371 228.688C65.8414 230.164 61.8503 228.005 61.1556 224.242L58.4764 209.731C57.924 206.74 55.2197 204.635 52.1837 204.834L37.4592 205.799C33.6415 206.049 30.5679 202.71 31.1325 198.926L33.3102 184.331C33.7591 181.322 31.8848 178.453 28.9488 177.656L14.7087 173.788C11.0166 172.785 9.19372 168.629 10.9564 165.233L17.7549 152.136C19.1566 149.436 18.3153 146.114 15.7974 144.406L3.58494 136.124C0.418549 133.976 0.0438025 129.454 2.81355 126.814L13.4961 116.635C15.6987 114.536 15.9817 111.121 14.1546 108.688L5.29325 96.8889C2.99569 93.8297 4.10973 89.4305 7.5864 87.8335L20.9955 81.674C23.7602 80.4041 25.1368 77.2658 24.1986 74.3716L19.6485 60.3345C18.4688 56.6951 20.9509 52.8959 24.7577 52.5144L39.4403 51.0426C42.4675 50.7391 44.7885 48.2179 44.8409 45.1759L45.0952 30.422C45.1611 26.5966 48.7423 23.8093 52.4668 24.6844L66.8316 28.0598C69.7934 28.7558 72.8073 27.1248 73.8446 24.2646L78.8757 10.3927C80.1801 6.79598 84.4723 5.32247 87.7108 7.35955L100.201 15.2163C102.777 16.8362 106.157 16.2722 108.067 13.9038L117.329 2.41709Z"
            />
          </clipPath>
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref={src}
            clipPath="url(#star)"
          />
        </svg>

        {children}
      </div>
    </div>
  )
}

export default AuthorCard