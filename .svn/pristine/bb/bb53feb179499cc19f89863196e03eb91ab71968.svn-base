/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:页面头部组件
 */
layui.link('./script/header/header.css')
layui.define(['layer', 'element', 'qRouter', 'config_constant'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var qRouter = layui.qRouter;
	var config_constant = layui.config_constant;
	var obj = {
		header: function (componentName) {
			var getRoot = $("#root");
			var FilteredPermissions=JSON.parse($.localStorage.getItem('FilteredPermissions'))
			var nodeHtml = '';
			nodeHtml += '<div layui-layout-body>'
			nodeHtml += '<div class="layui-layout layui-layout-admin">'
			nodeHtml += '<div class="layui-header layui-bg-blue">'
			nodeHtml += '<div class="layui-logo">'
			nodeHtml += '<a>'
			nodeHtml += '<img src="./img/header/logo.png" class="header-icon">'
			nodeHtml += '</a>'
			nodeHtml += '</div>'
			nodeHtml += '<ul class="header-header">'
			nodeHtml += '<li class="header-headerTitle1">'
			nodeHtml += '<div class="header-headerTitle3">高精度地图在线生产管理平台</div>'
			nodeHtml += '</li>'
			nodeHtml += '</ul>'
			nodeHtml += '<ul class="layui-nav layui-layout-right">'
			$.each(FilteredPermissions, function (levelNavConfigKey, levelNavConfigValue) {
				if (levelNavConfigValue.menu != undefined && levelNavConfigValue.menu != null && levelNavConfigValue.menu.length > 0) {
					nodeHtml += '<li class="layui-nav-item">'
					if (levelNavConfigValue.iconContain != undefined && levelNavConfigValue.iconContain != null) {
						if (levelNavConfigValue.iconContain.name != undefined && levelNavConfigValue.iconContain.icon == undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.iconContain.name + '</a>'
						}
						if (levelNavConfigValue.iconContain.name == undefined && levelNavConfigValue.iconContain.icon != undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '"><img src="' + levelNavConfigValue.iconContain.icon + '" class="layui-nav-img"></a>'
						}
						if (levelNavConfigValue.iconContain.name != undefined && levelNavConfigValue.iconContain.icon != undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '"><img src="' + levelNavConfigValue.iconContain.icon + '" class="layui-nav-img"><span>' + levelNavConfigValue.iconContain.name + '</span></a>'
						}
						if (levelNavConfigValue.iconContain.name == undefined && levelNavConfigValue.iconContain.icon == undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.iconContain.title + '</a>'
						}
					} else {

						nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.title + '</a>'
					}

					nodeHtml += '<dl class="layui-nav-child">'
					var menu = levelNavConfigValue.menu;
					$.each(menu, function (menuKey, menuValue) {
						nodeHtml += '<dd id="render-Nav-' + menuValue.name + '">'
						nodeHtml += '<a href="' + menuValue.href + '">' + menuValue.title + '</a>'
						nodeHtml += '</dd>'
					})
					nodeHtml += '</dl>'
					nodeHtml += '</li>'
				} else {
					if (levelNavConfigValue.iconContain != undefined && levelNavConfigValue.iconContain != null) {
						nodeHtml += '<li class="layui-nav-item" id="render-Nav-' + levelNavConfigValue.name + '">'
						if (levelNavConfigValue.iconContain.name != undefined && levelNavConfigValue.iconContain.icon == undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.iconContain.name + '</a>'
						}
						if (levelNavConfigValue.iconContain.name == undefined && levelNavConfigValue.iconContain.icon != undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '"><img src="' + levelNavConfigValue.iconContain.icon + '" class="layui-nav-img"></a>'
						}
						if (levelNavConfigValue.iconContain.name != undefined && levelNavConfigValue.iconContain.icon != undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '"><img src="' + levelNavConfigValue.iconContain.icon + '" class="layui-nav-img"><span>' + levelNavConfigValue.iconContain.name + '</span></a>'
						}
						if (levelNavConfigValue.iconContain.name == undefined && levelNavConfigValue.iconContain.icon == undefined) {
							nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.iconContain.title + '</a>'
						}
						nodeHtml += '</li>'
					} else {
						nodeHtml += '<li class="layui-nav-item" id="render-Nav-' + levelNavConfigValue.name + '">'
						nodeHtml += '<a href="' + levelNavConfigValue.href + '">' + levelNavConfigValue.title + '</a>'
						nodeHtml += '</li>'
					}
				}
			})
			nodeHtml += '</ul>'
			nodeHtml += '</div>'
			nodeHtml += '<div id="render-navigation"> </div>'
			nodeHtml += '<div id="render-nonavigationBody"> </div>'
			nodeHtml += '<div id="render-body"> </div>'
			nodeHtml += '</div>'
			nodeHtml += '</div>'
			getRoot.empty();
			getRoot.append(nodeHtml);
			element.init();
			//节点中注入数据
			var indexHref = window.location.href;
			var indexHrefParm = indexHref.split("#!")[1];
			$.each(FilteredPermissions, function (levelNavConfigKey, levelNavConfigValue) {
				if (levelNavConfigValue.menu != undefined && levelNavConfigValue.menu != null && levelNavConfigValue.menu.length > 0) {
					var menu = levelNavConfigValue.menu;
					$.each(menu, function (menuKey, menuValue) {
						if (menuValue.configContain != undefined) {
							if (indexHrefParm.indexOf(menuValue.href.split("#!")[1]) >= 0) {
								$('body').data('componentData', null); 
								$('body').data('componentData', menuValue.configContain);
							}
						}
					})
				} else {
					if (levelNavConfigValue.configContain != undefined) {
						var firstParm=levelNavConfigValue.href.split("#!")[1].split("/")[0];
						if (indexHrefParm.indexOf(firstParm) >= 0) {
							$('body').data('componentData', null);
							$('body').data('componentData', levelNavConfigValue.configContain);
						}
					}

				}
			})
			//登录完成修改用户名
			var name=$.localStorage.getItem('name');
			$("#render-Nav-PersonnelNav span").html(name);
			// 修改用户头像
			var userType=$.localStorage.getItem('roleId');
			$("#render-Nav-PersonnelNav img").width(60).height(60);
			if(userType==config_constant.ROLD_Administrator){
				$("#render-Nav-PersonnelNav img").attr("src",'./img/header/administrator.png')
			}else{
				$("#render-Nav-PersonnelNav img").attr("src",'./img/header/notAdministrator.png')
			}
			
		}



	}

	exports('header', obj);
});