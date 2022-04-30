import React from "react";
import style from "./index.module.scss";

type props = {
  title: string;
  content: JSX.Element;
  img: JSX.Element;
}
const Card = ({ title, content, img }: props) => {
  return <div className={style.card}>
    <div className={style.title}>{title}</div>
    <div className={style.content}>
      {content}
    </div>
    <a className={style.button}>바로 대출 확인</a>
    <div className={style.img}>
      {img}
    </div>
  </div>;
};

export default Card;
