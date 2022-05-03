import React from "react";
import style from "./index.module.scss";

type props = {
  title: string;
  content: JSX.Element;
  img: JSX.Element;
}
const ContentLayout = ({ title, content, img }: props) => {
  return (
    <>
      <div className={style.title}>{title}</div>
      <div className={style.content}>
        {content}
      </div>
      <a className={style.button}>바로 대출 확인</a>
      <div className={style.img}>
        {img}
      </div>
    </>
  );
};

export default ContentLayout;
