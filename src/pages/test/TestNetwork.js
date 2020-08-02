import React from "react";
import {ActivityIndicator, View, Text, FlatList} from 'react-native'

class TestNetwork extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  // 渲染函数
  render() {
    const { data, isLoading } = this.state;

    return (
        <View style={{backgroundColor: "#eeeeee"}}>
          <Text>测试网络请求</Text>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <Text>{item.title}, {item.releaseYear}</Text>
                  )}
              />
          )}
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.testFetch();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 自己写的方法
  testFetch = () => {
    let url = 'https://reactnative.dev/movies.json';
    return fetch(url)
        .then((response) => {
          return response.json()
        }).then((res) => {
          // console.log(res);
          this.setState({
            data: res.movies
          })
        }).catch((err) => {
          console.log('error:' + err)
        }).finally(() => {
          console.log('fetch finally');
          this.setState({ isLoading: false });
        });
  }


}

export default TestNetwork;
