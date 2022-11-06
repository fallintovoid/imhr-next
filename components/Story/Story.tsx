import { NextPage } from 'next';
import Link from "next/link"
import cn from 'classnames'

import StoryStyles from './Story.module.css';

type Props = {
    title: string;
    author: string;
    theme: string;
    slug: string;
}

const Story: NextPage<Props> = ({ title, author, theme, slug }) => {
  return (
    <li className={cn(StoryStyles.story)}>
        <Link href={`/posts/${slug}`} legacyBehavior>
              <a className={StoryStyles.story_link}>
                <article className={cn(StoryStyles.story_card) + ` ${theme}`}>
                    <div className={cn(StoryStyles.story_info)}>
                        <h2 className="text-type-h3">{title}</h2>
                        <p className="text-type-p text-view-secondary">{author}</p>
                    </div>
                    <div className={cn(StoryStyles.story_graphics)}>
                        <svg className={cn(StoryStyles.svg, StoryStyles.svg_bag)} width="149" height="185" viewBox="0 0 149 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.3641 41.2211C81.7209 40.4078 77.4095 54.5521 74.0554 63.133C71.7006 69.1572 70.87 76.0917 68.8851 82.3237C67.4082 86.9607 67.6439 92.7477 63.7694 96.1162C60.8108 98.6884 56.1553 95.5548 53.2027 94.4509C47.3324 92.2561 38.8453 87.2773 33.0137 84.87C24.4495 80.4734 12.4618 80.6431 11.844 76.5251C11.2148 72.332 10.9333 67.0026 12.7482 63.0027C17.0101 53.61 17.6161 41.4796 23.5601 32.8781C28.8081 20.2922 53.6052 8.49746 64.73 12.5336C72.3353 15.2929 79.5099 17.3437 87.6534 19.0934C91.5301 19.9263 98.2814 22.7373 101.768 24.7959C106.113 27.3619 109.597 31.4517 111.71 35.9719C117.19 47.6907 116.743 57.9169 113.232 70.7474C106.74 94.467 104.052 119.17 95.729 142.411C92.7389 150.76 90.1902 162.512 83.7166 168.944C79.6046 173.031 73.5703 175.712 68.0542 177.324C61.7231 179.174 50.901 178.564 44.3269 177.077C35.583 175.1 27.6284 168.37 19.0408 165.706C11.0737 163.234 6.0428 155.303 4.53657 147.116C3.53422 141.668 3.62391 137.097 4.01637 131.479C4.93071 118.389 6.662 99.9389 13.5671 88.2448" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round" />
                            
                            <path d="M96.0451 111.544C92.4734 112.448 89.9795 112.274 83.974 111.855C79.9741 111.575 75.9577 111.572 74.7502 116.466C72.2319 126.671 70.8266 136.293 70.0857 146.899C69.7029 152.379 70.1682 156.107 76.8145 155.029C82.0287 154.183 90.8165 154.281 94.7131 145.292" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round" />
                            
                            <path d="M110.178 33.0578C110.929 29.6493 114.084 23.9407 118.639 21.1189C128.067 15.2789 138.025 16.4268 142.774 27.5791C145.461 33.8892 145.446 41.6469 145.434 48.3649C145.409 61.5476 142.219 74.0189 137.938 86.421C133.139 100.323 126.415 113.425 118.381 125.731C114.176 132.172 109.666 136.697 103.113 140.588" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round" />
                              
                            <path d="M80.2625 16.8041C81.0133 13.3956 84.7391 7.31071 91.3583 6.13866C102.278 4.20504 111.685 10.3576 116.434 21.5099" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
                        </svg>                  
                    </div>
                </article>
              </a>
        </Link>
    </li>
  )
}

export default Story