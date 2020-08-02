import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

class HomePage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
    };
  }



  // 渲染函数
  render() {
    const state = this.state;
    return (
        <View>
          <Text style={styles.desc}>React Native Template</Text>
          <Button onPress={() => {state.navigation.navigate('AboutPage')}} title="关于"></Button>
          <Text style={{height: 20}}></Text>
          <Button onPress={() => {state.navigation.navigate('TestNetwork')}} title="网络请求"></Button>
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
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    padding: 20
  }
});

export default HomePage;
