import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import LayoutTabBar from '../../components/LayoutTabBar'
import './index.css'

@inject('counterStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '常见问题'
    // addGlobalClass: true
  }

  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillRect')
  }

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

  render() {
    const { counterStore } = this.props
    return (
      <View className="index">
        <View className="mybox">
          <View className="content">456</View>
        </View>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counterStore.counter}</Text>
        <AtButton type="primary">按钮文案</AtButton>
        <LayoutTabBar active="question" />
      </View>
    )
  }
}

export default Index
