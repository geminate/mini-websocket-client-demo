Page({
    onLoad: function (options) {
        wx.connectSocket({
            url: 'ws://localhost:8380'
        });

        wx.onSocketOpen(function (res) {
            console.log('WebSocket连接已打开！');

            wx.sendSocketMessage({
                data: 'Hello,World:' + Math.round(Math.random() * 0xFFFFFF).toString(),
            })
        });

        wx.onSocketMessage(function (res) {
            console.log(res)
        });

        wx.onSocketClose(function (res) {
            console.log('WebSocket连接已关闭！')
        })
    }

});