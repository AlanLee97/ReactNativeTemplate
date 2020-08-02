import React from "react";
import {View, Text, StyleSheet} from 'react-native'

class AboutPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View>
          <Text style={styles.desc}>项目介绍：这是一个React Native 模板项目，安装必要的组件，如路由等，下次创建项目时可直接复制此项目进行修改</Text>
          <Text style={styles.desc}>作者：AlanLee（李步官）</Text>
          <Text style={styles.desc}>Github: https://github.com/AlanLee97</Text>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }
}

let styles = StyleSheet.create({
  desc: {
    padding: 20
  }
});

export default AboutPage;
