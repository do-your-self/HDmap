//文字信息
layui.link('./script/basicInformation/basicInformation.css')
layui.define(['layer', 'element', 'qRouter'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var qRouter = layui.qRouter;
	var obj = {
		basicInformation: function (componentName) {
			var getRoot = $("[id^='render-basicInformation']");
			var baseData='';
			getRoot.empty();
			$.each(getRoot, function (key, listId) {
				var nodeHtml = '';
				var getNodeHtml = $('#' + listId.id);
				var componentData = getNodeHtml.data('componentData');
				var userIdParameter = componentData.userIdParameter;
				var whereParameter = {};
				$.each(userIdParameter, function (userIdParameterKey, userIdParameterValue) {
					var tabList_data=JSON.parse($.sessionStorage.getItem('tabList_data'));
					whereParameter[userIdParameterValue.Parameter] = tabList_data[userIdParameterValue.Parameter];
				})
				$.ajax({
					type: "GET",
					async: false,
					url: componentData.url,
					data: whereParameter,
					success: function (data) {
						baseData=data.data;
						var missionBasicInformationCallData={};
						missionBasicInformationCallData.id=baseData.id;
						missionBasicInformationCallData.typeId=baseData.type_id;
						var missionBasicInformation={};
						missionBasicInformation.mileage=baseData.mileage;
						$.localStorage.setItem('missionBasicInformationCallData', JSON.stringify(missionBasicInformationCallData));
						$.localStorage.setItem('missionBasicInformation', JSON.stringify(missionBasicInformation));
						
					},
					error: function (error) {
					
					}
				});
				nodeHtml += '<div class="layui-fluid">';
				nodeHtml += '<div class="layui-row">';
				$.each(componentData.formsContain, function (componentDatakey, componentDatavalue) {
					if (componentDatavalue.type == 'text') {
						nodeHtml += '<div class="layui-col-md3 basicInformation-list">';
						nodeHtml += '<div class="layui-col-md3">' + componentDatavalue.title + ':</div>';
						nodeHtml += '<div class="layui-col-md9">' + baseData[componentDatavalue.submitkey] + '</div>';
						nodeHtml += '</div>';
					}
				})
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				getNodeHtml.append(nodeHtml);
				element.init();
			})

		}

	}

	exports('basicInformation', obj);
});