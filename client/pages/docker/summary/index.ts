// import { IMyApp } from '../../../app';
// const app = getApp<IMyApp>();

import list from './summary';
import daShang from '../../../utils/DaShang';
import openGithub from '../../../utils/OpenGithub';
import bus from '../../../utils/bus';
import alipay from '../../../utils/Alipay';

wx.cloud.init({
  env: 'pro-02adcb',
});

const db = wx.cloud.database({
  env: 'pro-02adcb',
});

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: '',
        name: '',
        open: false,
      },
    ],
    showAd: false,
  },

  kindToggle: function(e: any) {
    var id = e.currentTarget.id,
      list = this.data.list;

    if (id === 'dashang') {
      this.dashang();
      return;
    }

    if (id === 'github') {
      this.github();
      return;
    }

    if (id == 'bus' || id === 'beta') {
      this.bus();
      return;
    }

    if (id === 'alipay') {
      alipay();
      return;
    }

    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData!({
      list: list,
    });
  },

  openGithub() {
    openGithub();
  },

  dashang() {
    daShang();
  },

  github() {
    openGithub();
  },

  bus() {
    if (this.data.showAd) {
      bus();
      return;
    }

    wx.showModal({
      title: '请发电子邮件洽谈',
      content: 'docker@khs1994.com',
      showCancel: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData!({
      // @ts-ignore
      list,
    });

    db.collection('showAd')
      .doc('XHyMSHkPDdDCJ6Zf')
      .get()
      .then(
        (res: any) => {
          // console.log(res);
          const showAd = res.data.show;

          if (!showAd) {
            list[5].id = 'beta';
            list[5].name = '容器、云服务相关广告位招租';
          }

          this.setData!({
            showAd,
            // @ts-ignore
            list,
          });
        },
        (res: any) => {
          console.log(res);

          list[5].id = 'beta';
          list[5].name = '容器、云服务相关广告位招租';
          this.setData!({
            showAd: false,
            // @ts-ignore
            list,
          });
        },
      );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(): any {
    return {
      title: '开始 Docker 之旅~',
      imageUrl:
        'https://gitee.com/docker_practice/docker_practice/raw/master/_images/cover.jpg',
      fail() {
        wx.showToast({
          title: '转发失败',
          icon: 'success',
        });
      },
    };
  },
});
