import { Component } from "react";

export default class Game extends Component {
    checkWin = () => {
        const table = this.props.table;
        //case 1
        if (table[0][0] === table[0][1] && table[0][1] === table[0][2] && table[0][0] !== ' ') {
            return table[0][0];
        }
        //case 2
        else if (table[1][0] === table[1][1] && table[1][1] === table[1][2] && table[1][0] !== ' ') {
            return table[1][0];
        }
        //case 3
        else if (table[2][0] === table[2][1] && table[2][1] === table[2][2] && table[2][0] !== ' ') {
            return table[2][0];
        }
        //case 4
        else if (table[0][0] === table[1][0] && table[1][0] === table[2][0] && table[0][0] !== ' ') {
            return table[0][0];
        }
        //case 5
        else if (table[0][1] === table[1][1] && table[1][1] === table[2][1] && table[0][1] !== ' ') {
            return table[0][1];
        }
        //case 6
        else if (table[0][2] === table[1][2] && table[1][2] === table[2][2] && table[0][2] !== ' ') {
            return table[0][2];
        }
        //case 7
        else if (table[0][0] === table[1][1] && table[1][1] === table[2][2] && table[0][0] !== ' ') {
            return table[0][0];
        }
        //case 8
        else if (table[0][2] === table[1][1] && table[1][1] === table[2][0] && table[0][2] !== ' ') {
            return table[0][2];
        }
        return null;
    }
    checkLast = (I,J) => {
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (this.props.table[i][j] === ' ' && (i !== I || j !== J)) {
                    return false;
                }
            }
        }
        return true;
    }
    handleClick(i,j) {
        if (this.props.table[i][j] === ' ') {
            this.props.handleCheck(i,j,'X');
            let winner = this.checkWin();
            if (winner !== null) {
              this.props.getWinner(winner);
            }
            else if (this.checkLast(i,j) === true) {
                alert("这也算是你输了🐶！");
            }
            else {
                let n = Math.floor(Math.random() * 9);
                let I = Math.floor(n/3);
                let J = n%3;
                while (this.props.table[I][J] !== ' ') {
                    n = Math.floor(Math.random() * 9);
                    I = Math.floor(n/3);
                    J = n%3;
                }
                this.props.handleCheck(I,J,'O');
                let winnerO = this.checkWin();
                if (winnerO !== null) {
                    this.props.getWinner(winnerO);
                }
            }
            
        }
    }
    render () {
        return (
            <table>
                    {this.props.table.map((row,i)=>{
                        return(
                            <tr id={i}>
                                {row.map((block,j)=>{
                                    return(
                                        <td
                                            id={i+","+j}
                                            onClick={()=>this.handleClick(i,j)}
                                        >{block}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
            </table>
        )
    }
}