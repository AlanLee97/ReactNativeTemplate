import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import routes from "./RouterConfig";


const RouterView = () => {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            routes.map((item, index) => {
              return (<Stack.Screen key={item.name} name={item.name} component={item.component} options={item.options} />)
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default RouterView;
