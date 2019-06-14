import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Utama from "./Utama";
import Login from "./Login";
import Daftar from "./Daftar";
import Absen from "./Absen";
import Home from "./Home";

const AppNavigator = createStackNavigator(
  {

    Utama: Utama,
    Login: Login,
    Main: Main,
    Daftar: Daftar,
    Absen: Absen,
    Home: Home,
    },
  {
    initialRouteName: "Utama"
  }
);

export default createAppContainer(AppNavigator);
/**const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
