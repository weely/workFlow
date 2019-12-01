const steps = [
  {
    element: '#menu-container',
    popover: {
      title: 'Menu',
      description: '打开或关闭侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '面包屑',
      description: '指示当前页位置',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: '页面搜索',
      description: '页面搜索，快速导航',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: '全屏',
      description: '全屏展示页面',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: '切换尺寸',
      description: '切换系统组件尺寸',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: '标签导航栏',
      description: '方便快速访问历史页',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
