import React, { Children } from "react";
import cx from "classnames";
import style from "./index.module.scss";


type props = {
  className?: string;
  children?: React.ReactNode;
}
const List = ({ className, children }: props) => {
  return <ol className={cx(style.ol, className)}>{children}</ol>;
};

export default List;
