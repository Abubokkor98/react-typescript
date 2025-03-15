import React from "react";

type BtnStyleProps = {
  btnStyle: React.CSSProperties;
};

export default function ButtonStyle(prop: BtnStyleProps) {
  return (
    <div className="text-center p-2" style={prop.btnStyle}>
      ButtonStyle
    </div>
  );
}
