import React from "react";
import cx from "classnames";

type props = {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: props) => {
  return (
    <div className={cx("gap-x-[9px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.06)] rounded-[20px] p-[30px] grid", className)}>
      {children}
    </div>
  );
};

export default Card;
