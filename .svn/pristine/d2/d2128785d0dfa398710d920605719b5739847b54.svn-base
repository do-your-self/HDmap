/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:登陆页面组件
 */
layui.define(['layer', 'element', 'form', 'qRouter', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var config_constant = layui.config_constant;
    var obj = {
        ptlogin2: function (componentName) {
            $.sessionStorage.clear();
            $.localStorage.clear();
            var getRoot = $("#root")
            getRoot.empty();
            var nodeHtml = '';
            nodeHtml += '<iframe name="login_frame" id="login_frame" frameborder="0" width="100%" height="100%"></iframe>';
            getRoot.append(nodeHtml);
            element.init();
            function getUrl() {
				var url = location.href;
				var url = location.origin;
				if (url.indexOf('#') > 0) {
					url = url.substring(0, url.indexOf('#'));
				}
				if (url.indexOf('?') > 0) {
					url = url.substring(0, url.indexOf('?'));
				}
				return url;
			}
			var url = getUrl();
				var src = "http://ui.ptlogin2.qq.com/cgi-bin/login?f_url=loginerroralert&style=0&appid=678012301&" + "s_url=" + url + "/HDmap/test"+"&link_target=blank&target=top&hide_close_icon=1&hide_title_bar=0&bgcolor=F5F7FE";
				$('#login_frame').prop('src', src);


        }

    }

    exports('ptlogin2', obj);
});