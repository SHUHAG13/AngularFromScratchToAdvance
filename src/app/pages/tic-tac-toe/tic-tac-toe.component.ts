import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [CommonModule,NgIf,NgFor,FormsModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  board:string[]=Array(9).fill('');
  currentPlayer:string='X';
  winner:string|null=null;
  isDraw:boolean=false;
  isCellOccupied(index:number):boolean{
    return this.board[index] !== '';
  }
  isGameOver():boolean{
    return this.winner !== null || this.isDraw;
  }
 
  isMoveInvalid(index:number):boolean{
    return this.isCellOccupied(index) || this.isGameOver();
  }
  switchPlayer():void{
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner():void{
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        return;
      }
    }
    if (this.board.every(cell => cell !== '')) {
      this.isDraw = true;
    }
  }
  isBordFull():boolean{
    return this.board.every(cell => cell !== '');
  }
  updateGameState(index:number):void{
    if (this.isMoveInvalid(index)) {
      return;
    }
    this.board[index] = this.currentPlayer;
    this.checkWinner();
    if (!this.winner && !this.isDraw) {
      this.switchPlayer();
    }
  }
  makeMove(index:number):void{
    if (this.isMoveInvalid(index)) {
      return;
    }
    this.board[index] = this.currentPlayer;
    this.checkWinner();
    if (!this.winner && !this.isDraw) {
      this.switchPlayer();
    }
  }
  resetGame():void{
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
  
}
