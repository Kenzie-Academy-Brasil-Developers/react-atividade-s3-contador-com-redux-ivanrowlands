import './App.css';
import {useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./Store/Modules/Counter/actions";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handlePlus = (count) => dispatch(plus(count));
  const handleMinus = (count) => dispatch(minus(count));
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculadora">
      <h1>{count.count}</h1>

    <Button type="primary" style={{ width: 60 }} onClick={handlePlus}>
    <PlusOutlined />
    </Button>
    <Button type="primary" danger="true" style={{ marginTop: 10, width: 60, marginBottom: 10 }} onClick={handleMinus}>
    <MinusOutlined />
    </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
