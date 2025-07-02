import React from "react";
import { Link } from "react-router-dom";

function ButtonMailto ({ mailto, label })  {
    return (
               <div onClick={(e) => {window.location.href =mailto;
                e.preventDefault
               }}>
                {label}
                 </div>
    );
};

export default ButtonMailto;