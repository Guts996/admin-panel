import { useState, useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./toolsBar.css";

export default function ToolsBar(props) {
  return (
    <div className="toolsBarArea">
      <div className="toolsBar">
        <div className="toolsBarWrapper">
          <div className="toolBarWrapper">
            <div className="tooltip">إضافة</div>
            <Link to={{ pathname: "/" + props.addComp }}>
              <span>
                <i class="icon">
                  <MdAdd />
                </i>
              </span>
            </Link>
          </div>
          <div className="toolBarWrapper">
            <div className="tooltip">تعديل</div>
            <Link
              to={{ pathname: "/" + props.editComp+"/"+props.item }}
            >
              <span>
                <i class="icon">
                  <FiEdit3 />
                </i>
              </span>
            </Link>
          </div>
          <div className="toolBarWrapper">
            <div className="tooltip">حذف</div>
            <span>
              <i class="icon">
                <MdDeleteOutline />
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
