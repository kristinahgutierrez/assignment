import './App.css';
import Amplify from "aws-amplify";
import AppConfig from "./config";
import Routes from "./services/route";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: AppConfig.AMPLIFIER_API_NAME,
        endpoint: "http://localhost:3000"
      }
    ]
  }
});


function App() {
  return (
    <Routes/>
  );
}

export default App;
