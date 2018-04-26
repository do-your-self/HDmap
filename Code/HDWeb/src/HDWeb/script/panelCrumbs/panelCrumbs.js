/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:面包屑导航组件
 */
layui.link('./script/panelCrumbs/panelCrumbs.css')
layui.define(['layer', 'element', 'form', 'qRouter'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var obj = {
        panelCrumbs: function (componentName) {
            var getRoot = $("#render-PanelCrumbs")
            var componentData = $('body').data('componentData');
            var nodeHtml = '';
            if (componentData.containt != undefined && componentData.containt != null && componentData.containt.length > 0) {
                $.each(componentData.containt, function (key1, list1) {
                    if (list1.routesName == componentName) {
                        nodeHtml = '<div class="panelCrumbs-breadCrumbs-position">' +
                            '<div class="panelCrumbs-breadCrumbs">' +
                            '<span class="layui-breadcrumb">' +
                            '<a href=' + list1.href + '>' + list1.title + '</a>' +
                            '<a>' +
                            '<cite>列表信息</cite>' +
                            '</a>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    } else {
                        if (list1.children != undefined && list1.children != null && list1.children.length > 0) {
                            $.each(list1.children, function (key2, list2) {
                                if (list2.routesName == componentName) {
                                    nodeHtml = '<div class="panelCrumbs-breadCrumbs-position">' +
                                        '<div class="panelCrumbs-breadCrumbs">' +
                                        '<span class="layui-breadcrumb">' +
                                        '<a href=' + list1.href + '>' + list1.title + '</a>' +
                                        '<a href=' + list2.href + '>' + list2.title + '</a>' +
                                        '<a>' +
                                        '<cite>列表信息</cite>' +
                                        '</a>' +
                                        '</span>' +
                                        '</div>' +
                                        '</div>'
                                } else {
                                    if (list2.children != undefined && list2.children != null && list2.children.length > 0) {
                                        $.each(list2.children, function (key3, list3) {
                                            if (list3.routesName == componentName) {
                                                nodeHtml = '<div class="panelCrumbs-breadCrumbs-position">' +
                                                    '<div class="panelCrumbs-breadCrumbs">' +
                                                    '<span class="layui-breadcrumb">' +
                                                    '<a href=' + list1.href + '>' + list1.title + '</a>' +
                                                    '<a href=' + list2.href + '>' + list2.title + '</a>' +
                                                    '<a href=' + list3.href + '>' + list3.title + '</a>' +
                                                    '<a>' +
                                                    '<cite>列表信息</cite>' +
                                                    '</a>' +
                                                    '</span>' +
                                                    '</div>' +
                                                    '</div>'
                                            }
                                        })
                                    }

                                }
                            })
                        }

                    }
                })
            }
            getRoot.empty();
            getRoot.append(nodeHtml);
            element.init();
            form.render();
        }

    }

    exports('panelCrumbs', obj);
});