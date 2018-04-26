/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:管理员采集轨迹库管理配置文件
 */
layui.define(['config_constant'], function (exports) {
    var config_constant = layui.config_constant;
    var obj = {
        title: '采集管理',
        name: 'CollectionAndManagement',
        containt: [{
            title: '采集管理',
            name: 'CollectionAndManagement',
            href: 'javascript:void(0);',
            children: [{
                    title: '管理员采集轨迹库管理',
                    name: 'AdministratorCollectionTrackLibraryManagement',
                    href: config_constant.HREF_HEADER + "CollectionAndManagement/AdministratorCollectionTrackLibraryManagement",
                    routesName: 'mpm_collectionAndManagement_administratorCollectionTrackLibraryManagement',
                    body: [{
                        title: '管理员采集轨迹库管理',
                        components: [
                            {
                                name: 'trackLibraryManagement'
                            },
                        ]
                    }, ]
                },


            ]
        }, ]
    }

    exports('mpm_config_collectionAndManagement_administratorCollectionTrackLibraryManagement', obj);
});