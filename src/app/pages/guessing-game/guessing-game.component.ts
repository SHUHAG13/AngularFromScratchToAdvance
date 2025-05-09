import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guessing-game',
  imports: [CommonModule, FormsModule,NgIf],
  templateUrl: './guessing-game.component.html',
  styleUrl: './guessing-game.component.css',
})
export class GuessingGameComponent {
  secretNumber = this.generateRandomNumber();
  attemptsLeft = 5;
  guessNumber?: number;
  feedbackMessage = '';
  gameOver = false;

  private static readonly MAX_ATTEMPTS = 5;
  private static readonly MAX_NUMBER = 100;

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessingGameComponent.MAX_NUMBER
    );
  }
  submitGuess(): void {
    if (!this.isValidGuess(this.guessNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessingGameComponent.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }
  evaluateGuess(): void {
    if (this.guessNumber === this.secretNumber) {
      this.endGame(true);
    }else if (this.attemptsLeft === 0) {
      this.endGame(false);
    }else{
      if (this.guessNumber! < this.secretNumber) {
        this.feedbackMessage = `Too low! You have ${this.attemptsLeft} attempts left.`;
      } else {
        this.feedbackMessage = `Too high! You have ${this.attemptsLeft} attempts left.`;
      }
    }
  }



  private endGame(isWon: boolean): void {
    this.gameOver = true;
    if (isWon) {
      this.feedbackMessage = `Congratulations! You guessed the number ${this.secretNumber} correctly!`;
    } else {
      this.feedbackMessage = `Sorry, you've run out of attempts. The correct number was ${this.secretNumber}.`;
    }
  }

  resetGame():void{
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessingGameComponent.MAX_ATTEMPTS;
    this.guessNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
