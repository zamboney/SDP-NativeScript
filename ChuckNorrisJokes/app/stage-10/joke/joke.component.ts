import { Component } from '@angular/core';
import { JokeService, Joke } from "./joke.service";
import { getString } from "application-settings";
import { shareText } from "nativescript-social-share";

@Component({
  selector: 'joke',
  moduleId: module.id,
  templateUrl: `./joke.component.html`
})
export class JokeComponent {
  public joke: string = ``;
  public onShare(){
    shareText(this.joke);
  }
  constructor(private jokeService: JokeService) {
    this.onRefresh();
  }
  public onRefresh() {
    this.jokeService.get(
      getString('fName', 'Chuck'),
      getString('lName', 'Norris')
    ).then((joke: Joke) => {
      this.joke = joke.text;
    }, (error) => {
      alert(error);
    })
  }
}