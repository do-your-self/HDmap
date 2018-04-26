/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:QQ登陆页面组件
 */
layui.define(['layer', 'element', 'form', 'qRouter', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var config_constant = layui.config_constant;
    var obj = {
        ptlogin2Validation: function (componentName) {
            var uin = $.cookie('uin');
            var skey = $.cookie('skey');
            if (uin != undefined && skey != undefined) {
                $.ajax({
                    type: "get",
                    url: config_constant.URL_HEADER + "/sys/user/login",
                    data: {
                        uin: uin,
                        skey: skey
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (data.code == 0) {
                            layer.msg('登陆成功', {
                                time: 1000, //20s后自动关闭
                            });
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
                            }, 50);
                        } else {
                            location.href=config_constant.URL;
                            layer.msg('登陆失败', {
                                time: 1000, //20s后自动关闭
                            });
                        }

                    },
                    error: function (error) {}
                })
            }

        }

    }

    exports('ptlogin2Validation', obj);
});