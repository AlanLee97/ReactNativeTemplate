import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import TestNetwork from "../pages/test/TestNetwork";

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    options: {
      title: "首页"
    }
  },
  {
    name: "AboutPage",
    component: AboutPage,
    options: {
      title: "关于"
    }
  },
  {
    name: "TestNetwork",
    component: TestNetwork,
    options: {
      title: "网络测试"
    }
  }
];

export default routes;
