import React from 'react';
import './App.css';

const dataList=[
  {
    que: "去年の日本一",
    ans: ["ソフバン"],
    mis: ["キヨ人","ヤク"]
  },
  {
    que: "リーグ一",
    ans: ["キヨ人","ソフバン"],
    mis: ["ヤク","ハム","虎","檻"]
  }
]

function Que(props){
  return(
    <div>{props.i+1}. {props.que}</div>
  )
}
function Sel(props){
  return(
    <div><label>
      <input
        type="checkbox"
        name="inputNames"
        value={props.i}
      />
      {props.sel} {props.isA}
    </label></div>
  )
}
class Sec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.select.map(d=>false),
      isA: this.props.select.map(d=>d[1]),
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const checkBox = this.state;
    checkBox.checked[e.target.id] = !this.state.checked[e.target.id];
    this.setState(checkBox);
  }
  checkBtn(e){
    if(this.state.checked.toString() === this.state.isA.toString()){
      alert("ok");
    }
  }

  render() {
    const selectList = this.props.select.map((d,i) =>
      <div><label>
        <input
          id={i}
          type="checkbox"
          name="inputNames"
          onChange={this.handleChange} />
        {d[0]} {d[1]}
      </label></div>
    );
    return (
      <div>
        <Que i={this.props.i} que={this.props.que} />
        {selectList}
        <button onClick={() => this.checkBtn()}>check</button>
      </div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
      <div className="Ap">
        {dataList.map((data,i) => {
          const ans = (data.ans).map(d => [d,true]);
          const mis = (data.mis).map(d => [d,false]);
          const select = ans.concat(mis);

          return <Sec que={data.que} select={select} i={i} />
        })}
      </div>
    );
  }
}

export default App;
