/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:搜索组件
 */
layui.link('./script/search/search.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'laydate', 'table', 'config_interactivity', 'config_constant'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var form = layui.form;
	var qRouter = layui.qRouter;
	var laydate = layui.laydate;
	var table = layui.table;
	var config_interactivity = layui.config_interactivity;
	var config_constant = layui.config_constant;
	var obj = {
		search: function (componentName) {
			var getRoot = $("[id^='render-search']");
			getRoot.empty();
			$.each(getRoot, function (key, listId) {
				var nodeHtml = '';
				var getNodeHtml = $('#' + listId.id);
				//获取加载在节点中的组件数据
				var componentData = getNodeHtml.data('componentData');
				nodeHtml += '<div class="search-contain">';
				nodeHtml += '<div class="search-flow">';
				nodeHtml += '<form class="layui-form">';

				nodeHtml += '<div class="search-select">';
				nodeHtml += '<div class="search-contain">';
				nodeHtml += '<div class="search-select">';
				nodeHtml += '<div class="search-selectTitle">任务状态</div>';
				nodeHtml += '<div class="search-selectBody">';
				nodeHtml += '<select name="city" lay-verify="" lay-filter="search-FormSelect">';
				nodeHtml += '<option value="">全部</option>';
				$.ajax({
					type: 'get',
					async: false,
					url: config_constant.URL_HEADER + '/taskstatus/find',
					success: function (res) {
						$.each(res.result, function (resKey, resValue) {
							nodeHtml += '<option value="' + resValue.id + '">' + resValue.value + '</option>';
						})
					},
					error: function (e, m) {

					}
				});

				nodeHtml += '</select>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';




				nodeHtml += '<div class="search-select">';
				nodeHtml += '<div class="search-selectBodyInput search-search">';
				nodeHtml += '<div class="layui-input-inline">';
				nodeHtml += '<input type="text" name="title" required lay-verify="required" placeholder="请输入搜索内容" autocomplete="off" class="layui-input" id="inputContent-' + listId.id + '">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				nodeHtml += '<div class="search-select">';
				nodeHtml += '<div class="layui-btn layui-btn-normal search-button" id="searchButton-' + listId.id + '">搜索</div>';
				nodeHtml += '</div>';
				nodeHtml += '</form>';
				nodeHtml += '</div>';
				if (componentData.addButton != undefined && componentData.addButton != null && componentData.addButton.length > 0) {
					$.each(componentData.addButton, function (buttonKey, buttonData) {
						if (buttonData.type == 'PageJump') {
							nodeHtml += '<div class="search-new-left">';
							nodeHtml += '<a class="layui-btn layui-btn-normal" href="' + buttonData.href + '">' + buttonData.buttonName + '</a>';
							nodeHtml += '</div>';
						}
						if (buttonData.type == 'Delete') {
							nodeHtml += '<div class="search-new-left">';
							nodeHtml += '<a class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
							nodeHtml += '</div>';
						}
						if (buttonData.type == 'AdvancedSearch') {
							nodeHtml += '<div class="search-new-left">';
							nodeHtml += '<a class="layui-btn layui-btn-normal">' + buttonData.buttonName + '</a>';
							nodeHtml += '</div>';

							nodeHtml += '<div class="search-select">';
							nodeHtml += '<div class="search-selectTitle">时间范围</div>';
							nodeHtml += '<div class="search-selectBodyInput">';
							nodeHtml += '<div class="layui-input-inline">';
							nodeHtml += '<input type="text" name="title" required lay-verify="required" placeholder="请选择开始时间" autocomplete="off" class="layui-input" id="startTime-' + listId.id + '">';
							nodeHtml += '</div>';
							nodeHtml += '</div>';
							nodeHtml += '<div class="search-selectBodyLine">';
							nodeHtml += '<div>---------</div>';
							nodeHtml += '</div>';
							nodeHtml += '<div class="search-selectBodyInput">';
							nodeHtml += '<div class="layui-input-inline">';
							nodeHtml += '<input type="text" name="title" required lay-verify="required" placeholder="请选择结束时间" autocomplete="off" class="layui-input" id="endTime-' + listId.id + '">';
							nodeHtml += '</div>';
							nodeHtml += '</div>';
							nodeHtml += '</div>';
						}
					})
				}
				nodeHtml += '</div>';
				getNodeHtml.append(nodeHtml);
				element.init();
				form.render();
				//获取下拉列表的值
				var formSelectValue = '';
				form.on('select(search-FormSelect)', function (data) {
					formSelectValue = data.value;
				});
				$('#searchButton-' + listId.id).on('click', function () {
					//获取下拉列表的值
					var inputContent = $('#inputContent-' + listId.id).val();
					var parameterObj = {
						search: inputContent,
						formSelectValue: formSelectValue
					}
					var ChangeObj = null;
					if (config_interactivity != undefined && config_interactivity != null && config_interactivity.length > 0) {
						$.each(config_interactivity, function (interactivityConfigKey, interactivityConfigValue) {
							if (interactivityConfigValue.routesName == componentName) {
								var interactivity = interactivityConfigValue.interactivity;
								$.each(interactivity, function (interactivityKey, interactivityValue) {
									if (interactivityValue.controller == 'search') {
										$.each(interactivityValue.controlled, function (controlledKey, controlledValue) {
											if (controlledValue.name == 'tableList') {
												layui.tableList.changeData(controlledValue.index, parameterObj, ChangeObj);
											}
										})
									}
								})
							}
						})
					}
					// }

				})
			})



		}

	}

	exports('search', obj);
});