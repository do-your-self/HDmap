/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:左侧导航栏组件
 */
layui.link('./script/navigation/navigation.css')
layui.define(['layer', 'element', 'qRouter'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var qRouter = layui.qRouter;
	var obj = {
		navigation: function (componentName) {
			var getRoot = $("#render-navigation")
			var nodeHtml = '';
			var componentData = $('body').data('componentData');
			nodeHtml += '<div class="layui-side layui-bg-blue">';
			nodeHtml += '<div class="layui-side-scroll">';
			nodeHtml += '<ul class="layui-nav layui-nav-tree">';
			if (componentData.containt != undefined) {

				var Containt = componentData.containt;
				for (var i = 0; i < Containt.length; i++) {
					if (Containt[i].routesName == componentName) {
						nodeHtml += '<li class="layui-nav-item layui-nav-itemed layui-this">';
						nodeHtml += '<a  href=' + Containt[i].href + '>' + Containt[i].title + '</a>';
					} else {
						nodeHtml += '<li class="layui-nav-item layui-nav-itemed">';
						nodeHtml += '<a  href=' + Containt[i].href + '>' + Containt[i].title + '</a>';
					}

					if (componentData.containt[i].children != undefined) {
						var children = componentData.containt[i].children;
						for (var j = 0; j < children.length; j++) {
							if (children[j].routesName == componentName) {
								nodeHtml += '<dl class="layui-nav-child">';
								nodeHtml += '<dd class="layui-this">';
								nodeHtml += '<a href=' + children[j].href + '>' + children[j].title + '</a>';
								nodeHtml += '</dd>';
								nodeHtml += '</dl>';
							} else {
								nodeHtml += '<dl class="layui-nav-child">';
								nodeHtml += '<dd>';
								nodeHtml += '<a href=' + children[j].href + '>' + children[j].title + '</a>';
								nodeHtml += '</dd>';
								nodeHtml += '</dl>';
							}

						}
					}
					nodeHtml += '</li>';
				}
			}
			nodeHtml += '<ul>';
			nodeHtml += '<div>';
			nodeHtml += '<div>';
			getRoot.append(nodeHtml);
			element.init();


		}

	}
	exports('navigation', obj);
});