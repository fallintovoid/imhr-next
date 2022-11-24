import React, { FC } from 'react'
import cn from 'classnames'

import GrechaStyles from './grecha-icon.module.css'

type Props = {
    className?: string; 
}

const Grecha: FC<Props> = ({ className }) => {
  return (
    <svg className={cn(GrechaStyles.svg, GrechaStyles.svg_grecha, className)} width="143" height="174" viewBox="0 0 143 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M118.527 160.902C143.947 149.714 137.222 103.695 134.059 82.5223C132.269 70.5445 133.244 53.062 132.5 41C131.984 32.6367 124.26 32.7899 125 24.5C125.312 21.0103 124.307 17.5256 121 17.4858C105.894 17.3039 85.5539 11.0889 75.4156 7.7614C54.879 1.02101 51.1486 3.96058 44.0505 3.19232C39.5653 2.70687 40.4921 5.15905 40.3002 9.06645C40.0333 14.5025 39.7891 14.8422 35 17.4858C29 20.7977 22.9506 22.7929 17.5 35C11.4969 48.4445 5.57575 92.0327 4.35299 106.638C3.72017 114.196 2.25014 123.796 4.45173 131.068C6.80248 138.833 8.7149 143.508 14.7643 150.182C19.5203 155.429 30.4492 157.927 37.2837 158.644C46.4741 159.608 56.8238 164.441 65.8703 166.923C75.1446 169.467 92.6049 173.222 101.881 168.931C104.956 167.509 104.531 167.64 104.5 164.54C104.337 147.663 96.0295 130.775 97.4713 113.806C98.5203 101.459 102.664 87.1385 102.664 74.6342C102.664 64.5 104.607 49.3842 109.819 41C111.939 37.5881 115.149 35.7909 115.345 31.7912C115.509 28.4665 116.567 30.1203 112.84 29.9373C109.819 29.7889 107.31 28.8003 104.249 28.65C85.0796 27.7088 68.7252 15.1897 49.5007 15.5764M28 72.6229C26 86.0251 19.0404 107.099 24.9001 111.144C44 124.33 58.0774 121.639 73.7599 123.844C76.0204 124.162 79.9414 125.353 79.9396 123.33C79.9315 114.362 80.9734 107.698 83 99C83.7587 95.7437 87.0777 88.3732 86.5 85C86.1029 82.6815 79.2852 81.362 71.395 79.5368C63.5048 77.7115 44.6286 77.3208 36.9286 71.6229M115.099 142.558L115.963 142.601M122.6 130.81L123.421 131.716M108.134 125.773C108.743 125.879 109.296 126.427 109.819 126.721M123.617 110.089L123.539 111.676M116.19 119.295L117.034 120.152M111.066 101.311L112.679 100.503" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  )
}

export default Grecha