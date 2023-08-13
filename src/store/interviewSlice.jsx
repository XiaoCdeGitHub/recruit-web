import { createSlice } from "@reduxjs/toolkit";

/*
 * @Author: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @Date: 2023-08-04 21:44:32
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-13 18:02:49
 * @FilePath: \dom\recruit-web\src\store\interviewSlice.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const interviewSlice = createSlice({
  name: "interviewSlice",
  initialState: {
    // 面试地点的遮罩层
    isEnterBackdrop: false,
    // 申请书照片的遮罩层
    isEnterImgBackdrop: false,
    // 点击的面试地点的id
    chooseAddressId: "",
    // 面试地点的数据
    addressData: [
      {
        startTime: "8:00",
        endTime: "9:00",
        addresses: [
          { id: "1", name: "东十层" },
          { id: "2", name: "卡1" },
          { id: "3", name: "卡2" },
          { id: "4", name: "卡3" },
          { id: "5", name: "卡4" },
          { id: "6", name: "卡5" },
        ],
      },
      {
        startTime: "9:00",
        endTime: "10:00",
        addresses: [
          { id: "7", name: "东十层" },
          { id: "8", name: "卡1" },
          { id: "9", name: "卡2" },
          { id: "10", name: "卡3" },
          { id: "11", name: "卡4" },
          { id: "12", name: "卡5" },
        ],
      },
      {
        startTime: "10:00",
        endTime: "11:00",
        addresses: [
          { id: "13", name: "东十层" },
          { id: "14", name: "卡1" },
          { id: "15", name: "卡2" },
          { id: "16", name: "卡3" },
          { id: "17", name: "卡4" },
          { id: "18", name: "卡5" },
        ],
      },
    ],
    // 点击的面试地点的信息
    chooseAddressData: {
      stuInfo: [],
      startTime: "",
      endTime: "",
      name: "",
    },
  },
  reducers: {
    // 显示/隐藏面试地点的遮罩层
    showBackdrop(state, action) {
      state.chooseAddressId = action.payload;
      state.isEnterBackdrop = true;
    },
    hiddenBackdrop(state, action) {
      state.isEnterBackdrop = false;
    },
    // 显示/隐藏申请书的遮罩层
    showImgBackdrop(state, action) {
      state.isEnterImgBackdrop = true;
    },
    hiddenImgBackdrop(state, action) {
      state.isEnterImgBackdrop = false;
    },
    // 设置选中面试地点的信息
    setChooseAddressInfo(state, action) {
      addressData.forEach((item, index) => {});
    },
  },
});

export const {
  showBackdrop,
  hiddenBackdrop,
  showImgBackdrop,
  hiddenImgBackdrop,
} = interviewSlice.actions;
