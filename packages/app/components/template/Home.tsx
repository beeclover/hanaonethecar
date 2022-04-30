import { useState } from 'react'
import { Tab } from '@headlessui/react'
import cx from "classnames";

// components

import Slider from "~/components/Slider";
import Card from "~/components/Card";



const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = ['하나카드', '하나은행', '하나캐피탈']
  return <>
    <section>
      <div className="container">
        <Slider />
      </div>
    </section>
    <section className='mt-[20px]'>
      <div className="container">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className={cx('grid grid-cols-3 rounded-full bg-[#e6e6e6]')}>
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                className={cx(
                  { 'bg-white shadow-[0_0_6px_0_rgba(0,0,0,0.03)]': selectedIndex === index },
                  { 'text-gray-500': selectedIndex !== index },
                  'p-[15px] text-[1.2rem] rounded-full text-black text-[1.2rme] font-bold outline-none'
                )}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-[20px]">
            <Tab.Panel className={cx('outline-none')}>
              <div className="grid gap-y-[10px]">
                <div>
                  <Card
                    title="1Q오토론"
                    content={
                      <p>
                        신용한도 차감없는 1금융권 자동차
                        대출! 최장 10년 상환! 3년후부터
                        중도상환 수수료 없이!
                      </p>
                    }
                    img={
                      <img src="/img/product-01-01.webp"
                        srcSet="/img/product-01-01@2x.webp 2x,
                                /img/product-01-01@3x.webp 3x"
                        alt=""
                      />
                    }
                  />
                </div>
                <div>
                  <Card
                    title="EV오토론"
                    content={
                      <p>
                        친환경차 구매 시 혜택받는 착한
                        자동차 대출! 연 0.3% 추가 금리
                        감면에 추가한도 500만원까지!
                      </p>
                    }
                    img={
                      <img src="/img/product-02-01.webp"
                        srcSet="/img/product-02-01@2x.webp 2x,
                                /img/product-02-01@3x.webp 3x"
                        alt=""
                      />
                    }
                  />
                </div>
                <div className='prose text-[#666666] text-[0.9rem]'>
                  <ul className="list-none pl-0">
                    <li>※ 본 홍보사이트는 법령 및 내부통제기준에 따른 절차를 거쳐 제공됩니다.</li>
                    <li>※ 본 홍보사이트는 2022년 12월 31일까지 유효합니다.</li>
                    <li>※ 하나은행 준법감시인 심의필 제2022-광고-1105호(2022.01.06)</li>
                    <li>※ CC브랜드 210806-0047</li>
                  </ul>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  </>;
};

export default Home;
