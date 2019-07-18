const urlSrc = 'https://somspic.ksudi.com'

const EnumService = {
  // 换单公司
  changeCompanyList: [{
      status: 10,
      label: '承诺达'
    },
    {
      status: 5,
      label: '中通'
    },
    {
      status: 12,
      label: '京东'
    }
  ],
  // 订单状态
  orderType: [{
      value: 'QUESTION',
      status: -10,
      label: '问题件'
    },
    {
      value: 'EXCEPTION',
      status: -20,
      label: '异常'
    },
    {
      value: 'PICKUP_TIMEOUT',
      status: -3,
      label: '揽收超时'
    },
    {
      value: 'GET_NO_FAIL',
      status: -2,
      label: '获取单号失败'
    },
    {
      value: 'CANCEL',
      status: -1,
      label: '取消'
    },
    {
      value: 'CREATE_SUCCESS',
      status: 0,
      label: '下单成功'
    },
    {
      value: 'TO_PICKUP',
      status: 1,
      label: '待揽收'
    },
    {
      value: 'PICKUP_COMPLETE',
      status: 2,
      label: '已揽收'
    },
    {
      value: 'TRANSFER',
      status: 3,
      label: '运输中'
    },
    {
      value: 'DISPATCHING',
      status: 4,
      label: '派送中'
    },
    {
      value: 'SIGN_OFF',
      status: 5,
      label: '已签收'
    }
  ],
  userStatus: [{
      status: 0,
      label: '待审核'
    },
    {
      status: 1,
      label: '审核通过'
    },
    {
      status: 2,
      label: '审核拒绝'
    }
  ],
  // 公司类别
  companyType: [{
      label: '平台公司',
      status: 999999
    },
    {
      label: '普通公司',
      status: 0
    },
    {
      label: '托管公司',
      status: 2
    },
    {
      label: '被托管公司',
      status: 1
    }
  ],
  // 打印状态
  printType: [{
      label: '已打印',
      status: 1
    },
    {
      label: '未打印',
      status: 0
    }
  ],
  // 帮助中心
  permissionList: [{
      title: '管理员操作',
      jurisdiction: 'AdminOpera',
      contentList: [{
          title: '注册登录',
          imgUrl: [urlSrc + '/help/admin1.png']
        },
        {
          title: '添加快递服务',
          imgUrl: [urlSrc + '/help/admin2.png', urlSrc + '/help/admin3.png']
        },
        {
          title: '组织架构',
          imgUrl: [urlSrc + '/help/admin4.png']
        },
        {
          title: '员工绑定',
          imgUrl: [urlSrc + '/help/admin5.png']
        },
        {
          title: '员工审核',
          imgUrl: [urlSrc + '/help/admin6.png']
        },
        {
          title: '寄件下单',
          imgUrl: [urlSrc + '/help/admin7.png', urlSrc + '/help/admin8.png']
        },
        {
          title: '批量寄件',
          imgUrl: [urlSrc + '/help/admin9.png']
        },
        {
          title: '账单管理',
          imgUrl: [
            urlSrc + '/help/admin10.png',
            urlSrc + '/help/admin11.png',
            urlSrc + '/help/admin12.png'
          ]
        },
        {
          title: '权限设置',
          imgUrl: [urlSrc + '/help/admin13.png', urlSrc + '/help/admin14.png']
        },
        {
          title: '订单列表管理',
          imgUrl: [urlSrc + '/help/admin15.png']
        },
        {
          title: '通讯录管理',
          imgUrl: [urlSrc + '/help/admin16.png']
        }
      ]
    },
    {
      title: '员工操作',
      jurisdiction: 'EmployeeOpera',
      contentList: [{
          title: '注册登录',
          imgUrl: [urlSrc + '/help/wxTerminal1.png']
        },
        {
          title: '开始寄件',
          imgUrl: [urlSrc + '/help/wxTerminal2.png']
        },
        {
          title: '打印订单',
          imgUrl: [urlSrc + '/help/wxTerminal3.png']
        },
        {
          title: '订/账单查询',
          imgUrl: [urlSrc + '/help/wxTerminal4.png']
        },
        {
          title: '手机号绑定',
          imgUrl: [urlSrc + '/help/wxTerminal5.png']
        }
      ]
    },
    {
      title: '托管公司管理员操作',
      jurisdiction: 'TrusteeshipCompany',
      contentList: [{
          title: '注册登录',
          imgUrl: [urlSrc + '/help/trusteeship1.png']
        },
        {
          title: '客户账号开通',
          imgUrl: [urlSrc + '/help/trusteeship2.png']
        },
        {
          title: '客户账号管理',
          imgUrl: [urlSrc + '/help/trusteeship3.png']
        },
        {
          title: '代客下单',
          imgUrl: [urlSrc + '/help/trusteeship4.png']
        },
        {
          title: '订单管理列表',
          imgUrl: [urlSrc + '/help/trusteeship5.png']
        },
        {
          title: '组织管理',
          imgUrl: [urlSrc + '/help/trusteeship6.png']
        },
        {
          title: '员工绑定',
          imgUrl: [urlSrc + '/help/trusteeship7.png']
        },
        {
          title: '员工审核',
          imgUrl: [urlSrc + '/help/trusteeship8.png']
        },
        {
          title: '权限设置',
          imgUrl: [
            urlSrc + '/help/trusteeship9.png',
            urlSrc + '/help/trusteeship10.png'
          ]
        }
      ]
    },
    {
      title: '托管公司员工操作',
      jurisdiction: 'TrusEmployeeOpera',
      contentList: [{
          title: '注册登录',
          imgUrl: [urlSrc + '/help/wx_tg_1.png']
        },
        {
          title: '打印订单',
          imgUrl: [urlSrc + '/help/wx_tg_2.png']
        },
        {
          title: '订/账单查询',
          imgUrl: [urlSrc + '/help/wx_tg_3.png']
        }
      ]
    }
  ]
}
export default EnumService
