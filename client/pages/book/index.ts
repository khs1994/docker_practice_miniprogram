import Ad from '../../src/utils/Ad';

const ad = new Ad();

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  buyBook() {
    ad.buyBook(true);
  },

  share() {
    let imgUrl =
      'https://dpsigs.coding.net/p/docker_practice/d/docker-practice.com/git/raw/master/book_20200905223833.jpg';
    wx.previewImage({
      current: imgUrl,
      urls: [imgUrl],
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {};
  },
});
