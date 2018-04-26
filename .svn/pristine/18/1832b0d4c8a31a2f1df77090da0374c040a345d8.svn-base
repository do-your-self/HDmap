/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:退出页面组件
 */
layui.define(['qRouter', 'config_constant'], function (exports) {
    var qRouter = layui.qRouter;
    var config_constant = layui.config_constant;
    var obj = {
        LogOut: function (componentName) {
            var getRoot = $("#root")
			getRoot.empty();
			var nodeHtml = '';
            $.ajax({
                type: "get",
                url: config_constant.URL_HEADER + '/sys/user/logout',
                success: function (data) {
                    if (data.code == 0) {
                        // location.reload([true])
                        location.href=config_constant.URL;
                    } else {
                        layer.alert("退出失败")
                    }
                },
                error: function (error) {}
            })

        }

    }

    exports('LogOut', obj);
});