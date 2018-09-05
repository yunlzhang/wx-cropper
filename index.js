import * as cropper from './cropper';
Page({
	getImage: function () {
		console.log(this);
		wx.chooseImage({
			success: res => {
				this.initCropper(res.tempFilePaths[0],{
					ratio:2,
					enableScale:true
				});
			},
		})
	},
	uploadPic(src){
		this.setData({
			croppersrc:src
		})
	},
	...cropper
})