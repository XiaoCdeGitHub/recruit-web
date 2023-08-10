/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-05 20:49:25
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-10 12:32:43
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvStuForm\StuInfoDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router-dom";
import styles from "./StuInfoDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop } from "../../../../UI/Backdrop/Backdrop";
import { useRef } from "react";
import {
  showImgBackdrop,
  hiddenImgBackdrop,
} from "../../../../store/interviewSlice";

export const StuInfoDetail = () => {
  const { isEnterImgBackdrop } = useSelector((state) => state.interviewSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = () => {
    navigate("/interview");
  };
  const showImg = (e) => {
    e.preventDefault();
    dispatch(showImgBackdrop());
  };
  const hiddenImg = () => {
    dispatch(hiddenImgBackdrop());
  };

  // 获取轮播图box的节点
  const imgbox = useRef();
  // 移动轮播图box
  const moveImgbox = (e) => {
    // 获取imgbox节点left的值
    const numberLeft = (left) => {
      if (left == "") {
        console.log("值为空");
        return 0;
      } else {
        return +left.replace("vw", "");
      }
    };
    // 判断左滑还是右滑
    const type = e.target.getAttribute("name");

    let dom = imgbox.current;
    const left = imgbox.current.style.left;
    if (type === "left") {
      let number = numberLeft(left) + 50;
      dom.style.left = number + "vw";
    } else {
      let number = numberLeft(left) - 50;
      dom.style.left = number + "vw";
    }
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.img} onClick={showImg}>
            <img
              className={styles.picture}
              src=""
            />
          </div>
          <div className={styles.baseInfo}>
            <div>
              <p>姓名：{isEnterImgBackdrop}</p>
            </div>
            <div>
              <p>性别：abc</p>
            </div>
            <div>
              <p>学号：abc</p>
            </div>
          </div>
        </div>
        <div className={styles.otherInfo}>
          <div>是否参加过宣讲会：2</div>
          <div>专业：软件工程</div>
          <div>手机号：110</div>
          <div>邮箱号：110@qq.com</div>
        </div>
        <div className={styles.back} onClick={clickHandler}>
          <p>返回</p>
        </div>
      </div>
      {isEnterImgBackdrop && (
        <Backdrop>
          <div onClick={hiddenImg} className={styles.imgBack}>
            <p>返回</p>
          </div>
          <div className={styles.imgBox}>
            <div className={styles.imgbox} ref={imgbox}>
              <img />
              <img />
              <img />
              <img />
            </div>
          </div>
          <div className={styles.iconLeft} onClick={moveImgbox} name="left">
            <p name="left">《</p>
          </div>
          <div className={styles.iconRight} onClick={moveImgbox} name="right">
            <p name="right">》</p>
          </div>
        </Backdrop>
      )}
    </>
  );
};
