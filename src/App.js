import React from 'react';
import './App.css';
//import { dataList } from './data';
import { dataList } from './dataTest';

function Que(props){
  return(
    <div style={{whiteSpace: 'pre-line'}}>{props.i+1}. {props.que}</div>
  )
}
function Sel(props){
  let span = <span>{props.sel}</span>;
  (props.isClick === null) ?
    span = span :
    (props.isA) ?
      span = <span>正解 {props.sel}</span> :
      (props.isCheck) ?
        span = <span>違う {props.sel}</span> :
        span = span
  ;
  return( span );
}
class Sec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: this.props.select.map(d=>false),
      isA: this.props.select.map(d=>d[1]),
      isClick: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const checkBox = this.state;
    checkBox.isCheck[e.target.id] = !this.state.isCheck[e.target.id];
    this.setState(checkBox);
  }
  checkBtn(e){
    const isJudge = this.state.isCheck.toString() === this.state.isA.toString();
    this.setState({...this.state,isClick:isJudge});
  }


  render() {
    const {isCheck,isA,isClick} = this.state;
    const selectList = this.props.select.map((d,i) =>
      <div key={i.toString()}><label>
        <input
          id={i}
          type="checkbox"
          name="inputNames"
          onChange={this.handleChange}
          disabled={(isClick !== null)}
        />
        <Sel
          sel={d[0]}
          isClick={isClick}
          isA={isA[i]}
          isCheck={isCheck[i]}
        />
      </label></div>
    );
    return (
      <div>
        <Que i={this.props.i} que={this.props.que} />
        {selectList}
        <button
          onClick={() => this.checkBtn()}
          disabled={(isClick !== null)}
        >check</button>
      </div>
    );
  }
}



class App extends React.Component {
  render() {
    const data = shuffle(dataList);
    return (
      <div className="Ap">
        {data.map((data,i) => {
          const ans = (data.ans).map(d => [d,true]);
          const mis = (data.mis).map(d => [d,false]);
          const select = shuffle(ans.concat(mis));

          return(
            <div key={i.toString()}>
              <Sec que={data.que} select={select} i={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
