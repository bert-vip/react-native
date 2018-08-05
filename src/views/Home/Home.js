import React, { Component } from 'react';
import { AppRegistry, View ,StyleSheet, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'//导入react-native-tab-navigator
import Task from './Task' //导入四个组件
import Project from './Project'
import Artist from './Artist'
import PhoneBook from './PhoneBook'
export default class Home extends Component {
  constructor(props) {
    super(props);
    //先声明一个状态，这个状态为了改变tabbar的
    //点击tabbar，触发onPress方法，在里面改变状态，从而达到切换页面的效果
    this.state = {
      selectedTab: '任务'
      //默认选择第一个页面（''默认选择第二个页面）
      //this.setState({selectedTab:'首页'}) 这个用于切换页面
      //selectedTab：'' ->为不同的值，就切换对应的页面
    };
  }
  render() {
    return (
      <View style={HomePageStyle.viewStyle}>
        {/*  初始化tabbar */}
        <TabNavigator >
          <TabNavigator.Item
            title='任务'
            onPress={() => this.setState({ selectedTab: '任务' })}
            selected={this.selectedTab === "任务"}
            titleStyle={HomePageStyle.TBarTitleStyle}
            selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
          >
            {/* 加载页面 */}
            <FirstPage />
          </TabNavigator.Item>

          <TabNavigator.Item
            title='项目'
            onPress={() => this.setState({ selectedTab: '项目' })}
            selected={this.selectedTab === "项目"}
            titleStyle={HomePageStyle.TBarTitleStyle}
            selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
          >
            <SecondPage />
          </TabNavigator.Item>

          <TabNavigator.Item
            title='艺人'
            onPress={() => this.setState({ selectedTab: '艺人' })}
            selected={this.selectedTab === "艺人"}
            titleStyle={HomePageStyle.TBarTitleStyle}
            selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
          >
            <ThirdPage />
          </TabNavigator.Item>

          <TabNavigator.Item
            title='通讯录'
            onPress={() => this.setState({ selectedTab: '通讯录' })}
            selected={this.selectedTab === "通讯录"}
            titleStyle={HomePageStyle.TBarTitleStyle}
            selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
          >
            <FourPage />
          </TabNavigator.Item>
        </TabNavigator >
      </View>
    );
  }
}

var HomePageStyle = StyleSheet.create({

  viewStyle: {
    flex: 1,
  },
  TBarTitleStyle: {
    color: 'black',
  },
  TBarTitleSelectStyle: {
    color: 'red',
  },
});

