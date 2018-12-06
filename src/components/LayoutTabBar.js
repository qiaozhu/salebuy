import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './LayoutTabBar.scss'

class LayoutTabBar extends Component {
  constructor() {
    super(...arguments)
  }
  state = {
    tabList: [
      {
        title: '首页',
        iconPrefixClass: 'iconfont icon',
        iconType: 'shouye',
        value: 'index',
        path: '/pages/index/index'
      },
      {
        title: '热门机型',
        iconPrefixClass: 'iconfont icon',
        iconType: 'remen',
        value: 'hot',
        path: '/pages/hot/index'
      },
      {
        title: '常见问题',
        iconPrefixClass: 'iconfont icon',
        iconType: 'question',
        value: 'question',
        path: '/pages/question/index'
      },
      { title: '我的', iconPrefixClass: 'iconfont icon', iconType: 'wode', value: 'me', path: '/pages/me/index' }
    ]
  }
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }
  handleClick(value) {
    const item = this.state.tabList[value]
    Taro.navigateTo({
      url: item.path
    })
  }
  render() {
    const { active } = this.props
    const tabList = this.state.tabList
    const current = tabList.findIndex(el => el.value === active)
    return (
      <AtTabBar
        className="sb-tabbar"
        fixed
        iconSize="22"
        fontSize="12"
        tabList={tabList}
        onClick={this.handleClick.bind(this)}
        current={current}
      />
    )
  }
}

export default LayoutTabBar
