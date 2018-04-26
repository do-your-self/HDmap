/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:body组件
 */
layui.link('./script/body/body.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'table'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var form = layui.form;
	var qRouter = layui.qRouter;
	var table = layui.table;
	var obj = {
		body: function (componentName) {
			var getRoot = $("#render-body")
			var nodeHtml = '';
			var componentData = $('body').data('componentData');
			nodeHtml += '<div class="layui-body">';
			nodeHtml += '<div style="padding: 15px;">';
			nodeHtml += '<div class="layui-collapse">';
			nodeHtml += '<div id="render-PanelCrumbs"></div>';
			nodeHtml += '<div class="header-panel">';
			if (componentData.containt != undefined && componentData.containt != null && componentData.containt.length > 0) {
				$.each(componentData.containt, function (key1, list1) {
					if (list1.routesName == componentName) {
						if (list1.body != undefined && list1.body != null && list1.body.length > 0) {
							$.each(list1.body, function (bodyKey1, body1) {
								nodeHtml += '<div class="layui-colla-item">';
								nodeHtml += '<h2 class="layui-colla-title">' + body1.title + '</h2>';
								nodeHtml += '<div class="layui-colla-content layui-show">';
								nodeHtml += '<div>';
								if (body1.components != undefined && body1.components != null && body1.components.length > 0) {
									$.each(body1.components, function (comKey1, com1) {
										nodeHtml += '<div id="render' + '-' + com1.name + '-' + list1.routesName + '-' + bodyKey1 + '"></div>';
									})
								}
								nodeHtml += '</div>';
								nodeHtml += '</div>';

							})
						} else {
							layer.alert("请检查配置文件,无body数组")
						}

					} else {
						if (list1.children != undefined && list1.children != null && list1.children.length > 0) {
							$.each(list1.children, function (key2, list2) {
								if (list2.routesName == componentName) {
									if (list2.body != undefined && list2.body != null && list2.body.length > 0) {
										$.each(list2.body, function (bodyKey2, body2) {
											nodeHtml += '<div class="layui-colla-item">';
											nodeHtml += '<h2 class="layui-colla-title">' + body2.title + '</h2>';
											nodeHtml += '<div class="layui-colla-content layui-show">';
											nodeHtml += '<div>';
											if (body2.components != undefined && body2.components != null && body2.components.length > 0) {
												$.each(body2.components, function (comKey2, com2) {
													nodeHtml += '<div id="render' + '-' + com2.name + '-' + list2.routesName + '-' + bodyKey2 + '"></div>';
												})
											}
											nodeHtml += '</div>';
											nodeHtml += '</div>';

										})
									} else {
										layer.alert("请检查配置文件,无body数组")
									}
								} else {
									if (list2.children != undefined && list2.children != null && list2.children.length > 0) {
										$.each(list2.children, function (key3, list3) {
											if (list3.routesName == componentName) {
												if (list3.body != undefined && list3.body != null && list3.body.length > 0) {
													$.each(list3.body, function (bodyKey3, body3) {
														nodeHtml += '<div class="layui-colla-item">';
														nodeHtml += '<h2 class="layui-colla-title">' + body3.title + '</h2>';
														nodeHtml += '<div class="layui-colla-content layui-show">';
														nodeHtml += '<div>';
														if (body3.components != undefined && body3.components != null && body3.components.length > 0) {
															$.each(body3.components, function (comKey3, com3) {
																nodeHtml += '<div id="render' + '-' + com3.name + '-' + list3.routesName + '-' + bodyKey3 + '"></div>';
															})
														}
														nodeHtml += '</div>';
														nodeHtml += '</div>';
													})
												} else {
													layer.alert("请检查配置文件,无body数组")
												}
											}
										})
									}
								}
							})
						}

					}
				})
			}
			nodeHtml += '</div>';
			nodeHtml += '</div>';
			nodeHtml += '</div>';
			nodeHtml += '</div>';
			nodeHtml += '</div>';
			getRoot.empty();
			getRoot.append(nodeHtml);
			element.init();
			form.render();

			//对每个id对应的节点注入配置文件对应的数据,以便后面模块取值
			if (componentData.containt != undefined && componentData.containt != null && componentData.containt.length > 0) {
				$.each(componentData.containt, function (key1, list1) {
					if (list1.routesName == componentName) {
						if (list1.body != undefined && list1.body != null && list1.body.length > 0) {
							$.each(list1.body, function (bodyKey1, body1) {
								if (body1.components != undefined && body1.components != null && body1.components.length > 0) {
									$.each(body1.components, function (comKey1, com1) {
										$('#render-' + com1.name + '-' + list1.routesName + '-' + bodyKey1).data('componentData', com1)
										$('#render-' + com1.name + '-' + list1.routesName + '-' + bodyKey1).data('componentIndex', bodyKey1)
										$('#render-' + com1.name + '-' + list1.routesName + '-' + bodyKey1).data('componentName', com1.name)
									})
								}
							})
						} else {
							layer.alert("请检查配置文件,无body数组")
						}

					} else {
						if (list1.children != undefined && list1.children != null && list1.children.length > 0) {
							$.each(list1.children, function (key2, list2) {
								if (list2.routesName == componentName) {
									if (list2.body != undefined && list2.body != null && list2.body.length > 0) {
										$.each(list2.body, function (bodyKey2, body2) {
											if (body2.components != undefined && body2.components != null && body2.components.length > 0) {
												$.each(body2.components, function (comKey2, com2) {
													$('#render-' + com2.name + '-' + list2.routesName + '-' + bodyKey2).data('componentData', com2)
													$('#render-' + com2.name + '-' + list2.routesName + '-' + bodyKey2).data('componentIndex', bodyKey2)
													$('#render-' + com2.name + '-' + list2.routesName + '-' + bodyKey2).data('componentName', com2.name)
												})
											}

										})
									} else {
										layer.alert("请检查配置文件,无body数组")
									}
								} else {
									if (list2.children != undefined && list2.children != null && list2.children.length > 0) {
										$.each(list2.children, function (key3, list3) {
											if (list3.routesName == componentName) {
												if (list3.body != undefined && list3.body != null && list3.body.length > 0) {
													$.each(list3.body, function (bodyKey3, body3) {
														if (body3.components != undefined && body3.components != null && body3.components.length > 0) {
															$.each(body3.components, function (comKey3, com3) {
																$('#render-' + com3.name + '-' + list3.routesName + '-' + bodyKey3).data('componentData', com3)
																$('#render-' + com3.name + '-' + list3.routesName + '-' + bodyKey3).data('componentIndex', bodyKey3)
																$('#render-' + com3.name + '-' + list3.routesName + '-' + bodyKey3).data('componentName', com3.name)
															})
														}
													})
												} else {
													layer.alert("请检查配置文件,无body数组")
												}
											}
										})
									}
								}
							})
						}

					}
				})
			}





		}

	}

	exports('body', obj);
});