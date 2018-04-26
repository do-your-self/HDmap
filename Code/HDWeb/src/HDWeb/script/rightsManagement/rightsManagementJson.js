/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台顶部导航栏配置文件
 */
layui.define(['config_constant'], function (exports) {
    var config_constant = layui.config_constant;
    var obj = [{
            "Personnel": config_constant.ROLD_Administrator,
            "permissions": {
                "CollectionAndManagement": {
                    "CollectionManagerCollectionRequirementsManagement": true,
                    "TheCollectorCollectsDemandManagement": true,
                    "AcquisitionProgramManagement": true,
                    "CollectionManagerCollectionPlanManagement": true,
                    "AdministratorCollectionTrackLibraryManagement": true,
                },
                "PostProcessingManagementNav": {
                    "AdministratorPostProcessingProcessManagement": true,
                    "CollectionAdministratorPostProcessingTrackManagement": true,
                },
                "TaskManagementNav": {
                    "AdministratorTaskManagement": true,
                    "AdministratorMessageStatistics": true,
                    "AdministratorBalance": true,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": true,
                    "InternalManagementProblemRecordAndFeedback": true,
                    "NoInternalManagementProblemRecordAndFeedback": false,
                },
                "SystemManagementNav": {},

                "PersonnelNav": {},
                "ExitNav": {

                }
            }
        },
        {
            "Personnel": config_constant.ROLD_EditingGroupLeader,
            "permissions": {
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": true,
                    "EditingGroupLeaderTaskCompleted": true,
                    "EditorTaskLoading": true,
                    "EditorTaskCompleted": true,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_QCLead,
            "permissions": {
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": true,
                    "QCLeadTaskCompleted": true,
                    "InspectorTaskLoading": true,
                    "InspectorTaskCompleted": true,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_Editor,
            "permissions": {
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": true,
                    "EditorTaskCompleted": true,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_Inspector,
            "permissions": {
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": true,
                    "InspectorTaskCompleted": true,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_GATHERING,
            "permissions": {
                "CollectionAndManagement": {
                    "CollectionManagerCollectionRequirementsManagement": false,
                    "TheCollectorCollectsDemandManagement": true,
                    "AcquisitionProgramManagement": false,
                    "CollectionManagerCollectionPlanManagement": true,
                    "AdministratorCollectionTrackLibraryManagement": false,
                },
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_COLLECTION_MANAGER,
            "permissions": {
                "CollectionAndManagement": {
                    "CollectionManagerCollectionRequirementsManagement": true,
                    "TheCollectorCollectsDemandManagement": false,
                    "AcquisitionProgramManagement": true,
                    "CollectionManagerCollectionPlanManagement": false,
                    "AdministratorCollectionTrackLibraryManagement": true,
                },
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": false,
                    "InternalManagementProblemRecordAndFeedback": false,
                    "NoInternalManagementProblemRecordAndFeedback": true,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        },
        {
            "Personnel": config_constant.ROLD_IN_HOUSE_MANAGER,
            "permissions": {
                "PostProcessingManagementNav": {
                    "AdministratorPostProcessingProcessManagement": true,
                    "CollectionAdministratorPostProcessingTrackManagement": true,
                },
                "TaskManagementNav": {
                    "AdministratorTaskManagement": false,
                    "AdministratorMessageStatistics": false,
                    "AdministratorBalance": false,
                    "EditingGroupLeaderTaskLoading": false,
                    "EditingGroupLeaderTaskCompleted": false,
                    "EditorTaskLoading": false,
                    "EditorTaskCompleted": false,
                    "QCLeadTaskLoading": false,
                    "QCLeadTaskCompleted": false,
                    "InspectorTaskLoading": false,
                    "InspectorTaskCompleted": false,
                    "InternalManagerTaskCompleteProcessStateManagement": true,
                    "InternalManagementProblemRecordAndFeedback": true,
                    "NoInternalManagementProblemRecordAndFeedback": false,
                },
                "PersonnelNav": {},
                "ExitNav": {}
            }
        }
    ];
//     var obj = [{
//         "Personnel": config_constant.ROLD_Administrator,
//         "permissions": {
//             "PostProcessingManagementNav": {
//                 "AdministratorPostProcessingProcessManagement": true,
//                 "CollectionAdministratorPostProcessingTrackManagement": false,
//             },
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": true,
//                 "AdministratorMessageStatistics": true,
//                 "AdministratorBalance": true,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "SystemManagementNav": {},

//             "PersonnelNav": {},
//             "ExitNav": {

//             }
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_EditingGroupLeader,
//         "permissions": {
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": true,
//                 "EditingGroupLeaderTaskCompleted": true,
//                 "EditorTaskLoading": true,
//                 "EditorTaskCompleted": true,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_QCLead,
//         "permissions": {
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": true,
//                 "QCLeadTaskCompleted": true,
//                 "InspectorTaskLoading": true,
//                 "InspectorTaskCompleted": true,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_Editor,
//         "permissions": {
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": true,
//                 "EditorTaskCompleted": true,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_Inspector,
//         "permissions": {
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": true,
//                 "InspectorTaskCompleted": true,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_GATHERING,
//         "permissions": {
//             "CollectionAndManagement": {
//                 "CollectionManagerCollectionRequirementsManagement": false,
//                 "TheCollectorCollectsDemandManagement": false,
//                 "AcquisitionProgramManagement": false,
//                 "CollectionManagerCollectionPlanManagement": false,
//                 "AdministratorCollectionTrackLibraryManagement": false,
//             },
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_COLLECTION_MANAGER,
//         "permissions": {
//             "CollectionAndManagement": {
//                 "CollectionManagerCollectionRequirementsManagement": false,
//                 "TheCollectorCollectsDemandManagement": false,
//                 "AcquisitionProgramManagement": false,
//                 "CollectionManagerCollectionPlanManagement": false,
//                 "AdministratorCollectionTrackLibraryManagement": false,
//             },
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     },
//     {
//         "Personnel": config_constant.ROLD_IN_HOUSE_MANAGER,
//         "permissions": {
//             "PostProcessingManagementNav": {
//                 "AdministratorPostProcessingProcessManagement": true,
//                 "CollectionAdministratorPostProcessingTrackManagement": false,
//             },
//             "TaskManagementNav": {
//                 "AdministratorTaskManagement": false,
//                 "AdministratorMessageStatistics": false,
//                 "AdministratorBalance": false,
//                 "EditingGroupLeaderTaskLoading": false,
//                 "EditingGroupLeaderTaskCompleted": false,
//                 "EditorTaskLoading": false,
//                 "EditorTaskCompleted": false,
//                 "QCLeadTaskLoading": false,
//                 "QCLeadTaskCompleted": false,
//                 "InspectorTaskLoading": false,
//                 "InspectorTaskCompleted": false,
//                 "InternalManagerTaskCompleteProcessStateManagement": false,
//                 "InternalManagementProblemRecordAndFeedback": false,
//                 "NoInternalManagementProblemRecordAndFeedback": false,
//             },
//             "PersonnelNav": {},
//             "ExitNav": {}
//         }
//     }
// ];

    exports("rightsManagementJson", obj);
});