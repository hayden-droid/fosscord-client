import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
	rootTag: document.getElementById("root"),
});

if (module.hot) {
	module.hot.accept("./src/App");
}