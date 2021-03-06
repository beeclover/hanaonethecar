import { useState } from "react";
import Head from 'next/head'
import cx from "classnames";
import { Disclosure, Transition } from '@headlessui/react'
import { UilAngleDown } from '@iconscout/react-unicons'

// components
import style from "./index.module.scss";

import Layout from '~/components/Layout';
import Card from "~atom/Card";

const index = () => {

  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <section>
        <div className="container">
          <div className={cx('gap-x-[9px] bg-[#f4f7f8] rounded-[20px] grid')}>
            <Card>
              <div className="grid">
                <div className='pt-[15px] text-[2rem] font-bold text-primary'>오토론</div>
                <div className='mt-[20px] text-[1.2rem]'>
                  하나카드 없이<br />
                  #빠르게<br />
                  #간편하게<br />
                  #신차구입
                </div>
                <div className="col-[2] row-[1_/_span_3]">
                  <img src="/img/img-hanacard-2.webp"
                    srcSet="/img/img-hanacard-2@2x.webp 2x,
                              /img/img-hanacard-2@3x.webp 3x"
                    alt=""
                  />
                </div>
                <div className="col-span-2 my-[25px] h-px w-[20px] bg-[#1f1f1f]"></div>
                <div className='col-span-2'>
                  <div className='text-[1.4rem] font-bold text-highlighted shadow-primary'>
                    대출한도 최대 1억원<br />
                    국산차 수입차 전 차종 넉넉한 대출한도
                  </div>
                </div>
                <div className='col-span-2 my-[25px] h-px bg-[#dbdbdb]'></div>
                <div>
                  <div>image</div>
                  <div>기간</div>
                  <div>
                    2022.04.01~<br />
                    2022.06.30
                  </div>
                </div>
                <div>
                  <div>image</div>
                  <div>기간</div>
                  <div>
                    2022.04.01~<br />
                    2022.06.30
                  </div>
                </div>
                <div className="col-span-2 prose mt-[24px]">
                  <ul>
                    <li>
                      대상:하나 신용/체크카드 회원<br />
                      (모바일카드 포함, 법인/선불/가족카드 제외)
                    </li>
                    <li>
                      국산/수입신차/중고차/오토바이 전 차종 신청 가능합니다.
                    </li>
                    <li>
                      캐쉬백은 자동차결제 정상매입 기준으로 지급됩니다.
                    </li>
                    <li>
                      신청채널 및 이용 상품(결재금액/유형)에 따라 별도 캐쉬백율로 운영됩니다.
                    </li>
                  </ul>
                </div>
                <div className='col-span-2 mt-[20px]'>
                  <div className="w-full">
                    <div className="mx-auto w-full">
                      <div className=" border-t border-b divide-y-[1px]">
                        {[{
                          title: '선입금 방식',
                          content: <>
                            <div>
                              <div>신청방법</div>
                              <ul className={cx(style.stepList, 'text-[#333] grid gap-y-[15px]')}>
                                {[
                                  <><b className="text-black">신청</b> 오토캐쉬백(선입금 방식)</>,
                                  <><b className="text-black">가상계좌 부여</b> 손님(개인)</>,
                                  <><b className="text-black">특별한도 상향</b> 입금(신청)한 금액만큼</>,
                                  <><b className="text-black">일시불 결제</b> 신용카드</>,
                                ].map((e, index) =>
                                  <li key={`key-${index}`} className="flex gap-x-[5px]">{e}</li>
                                )}
                              </ul>
                            </div>
                            <div>
                              <div>
                                캐쉬백 지급
                              </div>
                              <div className="grid grid-cols-2">
                                <div>
                                  <div>1.4%</div>
                                  <div>300 ~ 3,000만원 미만</div>
                                </div>
                                <div>
                                  <div>1.5%</div>
                                  <div>3,000만원 이상</div>
                                </div>
                              </div>
                              <div>자동차 결제일 +13영업일 이내 하나카드 결제계좌로 지급</div>
                            </div>
                            <div>
                              <div>이용안내</div>
                              <div className="prose">
                                <ul>
                                  <li>캐쉬백은 자동차결제 정상매입 기준으로 지급됩니다.</li>
                                  <li>선입금 방식의 경우, 특별한도는 입금 후 +15일간 유지됩니다.</li>
                                  <li>차량 특별한도는 한도 범위 내에서 자동차 결제가 가능하나 본인 이용한도와 합산하여 사용불가합니다.</li>
                                </ul>
                              </div>
                            </div>
                          </>
                        },
                        {
                          title: '신용방식(일시불)'
                        }, {
                          title: '체크카드 방식'
                        }].map(({ title, content }) =>
                          <>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className={cx("flex items-center w-full justify-between py-[20px] text-left text-[1.2rem] font-bold focus:outline-none", { '!border-none': open })}>
                                    <span>{title}</span>
                                    <UilAngleDown className={cx({ 'rotate-180 transform': open }, 'h-[30px] w-[30px] text-black')} />
                                  </Disclosure.Button>
                                  <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-99 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-99 opacity-0"
                                  >
                                    <Disclosure.Panel className="p-[20px] prose" static>
                                      {content}
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 mt-[30px]'>
                  <button className='bg-primary p-[15px] w-full rounded-full text-[1.6rem] text-white font-semibold'>한도 조회 하기</button>
                </div>
              </div>
            </Card>
            <div className='px-[30px] py-[22px] text-[#333]'>
              [2022.01.04 현재] 기준금리(금융채 6개월) 1.594% + 가산금리 3.300% - 부수거래 감면금리 0.9%* - 우대금리 0.1%**<br />
              *부수거래항목(급여이체(0.3%), 주택청약종합저축납입(0.2%), 제휴카드결제(0.1%), 적금상품납입(0.1%), 하나원큐이체(0.1%), 기타자동이체(0.1%))<br />
              **우대금리항목(콜센터신청or딜러소개(0.1%))
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>;
};

export default index;
