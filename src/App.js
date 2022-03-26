import './App.css';
import React, {Component} from 'react';
import Game from './Components/Game.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { win: '',
                   table: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
                   disable: false
                  }
  }
  handleCheck = (i,j,player) => {
    if (this.state.disable === true) {
      alert("已经结束了还点😈？")
    }
    else {
      let newTable = this.state.table;
      newTable[i][j] = player;
      this.setState({table: newTable});
    }
  }

  getWinner = (winner) => {
    let win = winner==="X"?"你赢了👌":"你输了😂巍巍Bot赢了✌️";
    this.setState({win:win});
    this.setState({disable: true})
  }

  handleRestart = () => {
    let table = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.setState({table: table});
    this.setState({win:''});
    this.setState({disable:false});
  }

  render(){
    return (
      <div className="App">
        <h1>杰尼龟打卡 v0.01 （废弃⚠️）</h1>
        <div class="win">
          <p class="winner">{this.state.win || "赢家是？"}</p>
          <br />
          <button onClick={this.handleRestart}>重来</button>
        </div>
        <div class="content">
          <div class="game">
            <Game table={this.state.table} handleCheck={this.handleCheck} getWinner={this.getWinner} />
          </div>
        <img class="icon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="杰尼龟图" />
        </div>
      </div>
    );
  }
}

export default App;
