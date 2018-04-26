/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:权限管理组件
 */
layui.define(['config_levelNav', 'config_constant', 'rightsManagementJson'], function (exports) {
	var config_constant = layui.config_constant;
	var data = layui.rightsManagementJson;
	var obj = {
		rightsManagement: function (componentName) {
			var config_levelNav = layui.config_levelNav.config_levelNav();
			var configArr = [];
			var menuArrArr = [];
			var configEnd = [];
			var identity = $.localStorage.getItem('roleId');
			$.each(data, function (dataKey, dataValue) {
				//判断是哪个角色
				if (dataValue.Personnel == identity) {
					var permissions = dataValue.permissions;
					$.each(permissions, function (permissionsKey, permissionsValue) {
						$.each(config_levelNav, function (config_levelNavKey, config_levelNavValue) {
							// 有导航按钮有几个
							if (config_levelNavValue.name == permissionsKey) {
								configArr.push(config_levelNavValue);

							}
						})
					})
				}
			})
			//判断导航栏下有几层菜单
			$.each(data, function (dataKey, dataValue) {
				//判断是哪个角色
				if (dataValue.Personnel == identity) {
					var permissions = dataValue.permissions;
					$.each(permissions, function (permissionsKey, permissionsValue) {
						var menuArr = [];
						$.each(configArr, function (configArrKey, configArrValue) {
							var menu = configArrValue.menu;
							// 判断导航按钮下是否有子菜单
							if (menu == undefined || menu == null) {} else {
								$.each(permissionsValue, function (permissionsValueKey, permissionsValueValue) {
									if (permissionsValueValue == true) {
										$.each(menu, function (menukey, menuValue) {
											// 判断子菜单是否是true
											if (menuValue.name == permissionsValueKey) {
												menuArr.push(menuValue);
											}
										})
									}
								})
							}
						})
						menuArrArr.push(menuArr)
					})
				}
			})
			//将子菜单注入
			$.each(configArr, function (configArrKey, configArrValue) {
				var menu = configArrValue.menu;
				if (menu == undefined || menu == null) {} else {
					configArrValue.menu = menuArrArr[configArrKey];
				}
			})
			configEnd = configArr;
			$.localStorage.setItem('FilteredPermissions', JSON.stringify(configEnd));
		}

	}

	exports('rightsManagement', obj);
});