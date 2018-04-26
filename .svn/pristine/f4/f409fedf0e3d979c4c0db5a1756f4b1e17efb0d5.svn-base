/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:登陆页面组件
 */
layui.link('./script/landfall/landfall.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'config_constant', 'rightsManagement'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var form = layui.form;
	var qRouter = layui.qRouter;
	var config_constant = layui.config_constant;
	var obj = {
		landfall: function (componentName) {
			$.sessionStorage.clear();
			$.localStorage.clear();
			var getRoot = $("#root")
			getRoot.empty();
			var nodeHtml = '';
			nodeHtml += '<div class="layui-fluid landfall-all">';
			nodeHtml += '<div class="layui-row">';
			nodeHtml += '<div class="layui-col-md12 landfall-title">高精度地图在线生产管理平台</div>';
			nodeHtml += '<div class="layui-col-md12 landfall-img">';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn1">管理员';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn2">编辑组长';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn3">质检组长';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn4">编辑员';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn5">质检员';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn6">采集员';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn7">采集管理员';
			nodeHtml += '<img src="./img/landing/qq.svg" id="qqLoginBtn8">内业管理员';
			nodeHtml += '</div>';
			nodeHtml += '</div>';
			nodeHtml += '</div> ';
			getRoot.append(nodeHtml);
			element.init();
			form.render()
			//接入QQ登陆服务
			http: //192.168.1.2:7080/HDmap/sys/user/login?qq=1234

				$("#qqLoginBtn1").on('click', function () {
					$.ajax({
						type: "get",
						url: config_constant.URL_HEADER + "/sys/user/login",
						data: {
							// 管理员账号
							uin: "o0434543162",
							skey: "skey",
							// // 编辑组长
							// qq: "1079035762",
							// // 编辑员
							// qq: "1362726055",
							// // 质检组长
							// qq: "1004531571",
							// // 质检员
							// qq: "434543163",
						},
						dataType: 'json',
						success: function (data) {
							$.localStorage.setItem('id', data.data.id);
							$.localStorage.setItem('userId', data.data.id);
							$.localStorage.setItem('name', data.data.name);
							$.localStorage.setItem('roleId', data.data.roleId);
							$.localStorage.setItem('departmentId', data.data.departmentId);
							$.localStorage.setItem('askUserId', data.data.id);
							// $.localStorage.setItem('userId', "7"); //编辑组长
							// $.localStorage.setItem('userId', "9");	//质检员
							// $.localStorage.setItem('userId', "8");	//编辑员
							// $.localStorage.setItem('userId', "141"); //质检组长
							//权限管理
							layui.rightsManagement.rightsManagement();
							setTimeout(function () {
								if (data.data.roleId == config_constant.ROLD_Administrator) {
									qRouter.go('TaskManagementNav/AdministratorTaskManagement');
								}
								if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
									qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
								}
								if (data.data.roleId == config_constant.ROLD_Editor) {
									qRouter.go('TaskManagementNav/EditorTaskLoading');
								}
								if (data.data.roleId == config_constant.ROLD_QCLead) {
									qRouter.go('TaskManagementNav/QCLeadTaskLoading');
								}
								if (data.data.roleId == config_constant.ROLD_Inspector) {
									qRouter.go('TaskManagementNav/InspectorTaskLoading');
								}
								if (data.data.roleId == config_constant.ROLD_GATHERING) {
									qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
								}
								if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
									qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
								}
								if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
									qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
								}
							}, 50);
						},
						error: function (error) {}
					})
					// var oOpts = {
					// 	appId: "1106664912",
					// 	redirectURI: "http://yousite.com/qc_back.html"
					// };
					// QC.Login.showPopup(oOpts);
				})
			$("#qqLoginBtn2").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// 管理员账号
						// qq: "434543162",
						// // 编辑组长
						uin: "o01079035762",
						skey: "skey",
						// // 编辑员
						// qq: "1362726055",
						// // 质检组长
						// qq: "1004531571",
						// // 质检员
						// qq: "434543163",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						// $.localStorage.setItem('userId', "7"); //编辑组长
						// // $.localStorage.setItem('userId', "9");	//质检员
						// // $.localStorage.setItem('userId', "8");	//编辑员
						// // $.localStorage.setItem('userId', "141"); //质检组长
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
				// var oOpts = {
				// 	appId: "1106664912",
				// 	redirectURI: "http://yousite.com/qc_back.html"
				// };
				// QC.Login.showPopup(oOpts);
			})
			$("#qqLoginBtn3").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// 管理员账号
						// qq: "434543162",
						// // 编辑组长
						// qq: "1079035762",
						// // 编辑员
						// qq: "1362726055",
						// // 质检组长
						uin: "o01004531571",
						skey: "skey",
						// // 质检员
						// qq: "1144945022",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						// $.localStorage.setItem('userId', "7"); //编辑组长
						// // $.localStorage.setItem('userId', "9");	//质检员
						// // $.localStorage.setItem('userId', "8");	//编辑员
						// // $.localStorage.setItem('userId', "141"); //质检组长
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
				// var oOpts = {
				// 	appId: "1106664912",
				// 	redirectURI: "http://yousite.com/qc_back.html"
				// };
				// QC.Login.showPopup(oOpts);
			})
			$("#qqLoginBtn4").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// 管理员账号
						// qq: "434543162",
						// // 编辑组长
						// qq: "1079035762",
						// // 编辑员
						uin: "o01362726055",
						skey: "skey",
						// // 质检组长
						// qq: "1004531571",
						// // 质检员
						// qq: "434543163",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						// $.localStorage.setItem('userId', "7"); //编辑组长
						// // $.localStorage.setItem('userId', "9");	//质检员
						// // $.localStorage.setItem('userId', "8");	//编辑员
						// // $.localStorage.setItem('userId', "141"); //质检组长
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
				// var oOpts = {
				// 	appId: "1106664912",
				// 	redirectURI: "http://yousite.com/qc_back.html"
				// };
				// QC.Login.showPopup(oOpts);
			})
			$("#qqLoginBtn5").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// 管理员账号
						// qq: "434543162",
						// // 编辑组长
						// qq: "1079035762",
						// // 编辑员
						// qq: "1362726055",
						// // 质检组长
						// qq: "1004531571",
						// // 质检员
						uin: "o0434543163",
						skey: "skey",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						// $.localStorage.setItem('userId', "7"); //编辑组长
						// // $.localStorage.setItem('userId', "9");	//质检员
						// // $.localStorage.setItem('userId', "8");	//编辑员
						// // $.localStorage.setItem('userId', "141"); //质检组长
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
				// var oOpts = {
				// 	appId: "1106664912",
				// 	redirectURI: "http://yousite.com/qc_back.html"
				// };
				// QC.Login.showPopup(oOpts);
			})
			$("#qqLoginBtn6").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// 采集员
						uin: "o0434543111",
						skey: "skey",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
			})
			$("#qqLoginBtn7").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// // 采集管理员
						uin: "o056556566",
						skey: "skey",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
			})
			$("#qqLoginBtn8").on('click', function () {
				$.ajax({
					type: "get",
					url: config_constant.URL_HEADER + "/sys/user/login",
					data: {
						// // 内业管理员
						uin: "o67676767",
						skey: "skey",
					},
					dataType: 'json',
					success: function (data) {
						$.localStorage.setItem('id', data.data.id);
						$.localStorage.setItem('userId', data.data.id);
						$.localStorage.setItem('name', data.data.name);
						$.localStorage.setItem('roleId', data.data.roleId);
						$.localStorage.setItem('departmentId', data.data.departmentId);
						$.localStorage.setItem('askUserId', data.data.id);
						//权限管理
						layui.rightsManagement.rightsManagement();
						setTimeout(function () {
							if (data.data.roleId == config_constant.ROLD_Administrator) {
								qRouter.go('TaskManagementNav/AdministratorTaskManagement');
							}
							if (data.data.roleId == config_constant.ROLD_EditingGroupLeader) {
								qRouter.go('TaskManagementNav/EditingGroupLeaderTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Editor) {
								qRouter.go('TaskManagementNav/EditorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_QCLead) {
								qRouter.go('TaskManagementNav/QCLeadTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_Inspector) {
								qRouter.go('TaskManagementNav/InspectorTaskLoading');
							}
							if (data.data.roleId == config_constant.ROLD_GATHERING) {
								qRouter.go('CollectionAndManagement/TheCollectorCollectsDemandManagement');
							}
							if (data.data.roleId == config_constant.ROLD_COLLECTION_MANAGER) {
								qRouter.go('CollectionAndManagement/CollectionManagerCollectionRequirementsManagement');
							}
							if (data.data.roleId == config_constant.ROLD_IN_HOUSE_MANAGER) {
								qRouter.go('TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement');
							}
						}, 50);
					},
					error: function (error) {}
				})
				// var oOpts = {
				// 	appId: "1106664912",
				// 	redirectURI: "http://yousite.com/qc_back.html"
				// };
				// QC.Login.showPopup(oOpts);
			})


		}

	}

	exports('landfall', obj);
});