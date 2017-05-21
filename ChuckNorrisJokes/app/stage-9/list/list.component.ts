import { Component } from '@angular/core';
import { Joke, JokeService } from "../joke/joke.service";

@Component({
  selector: 'joke-list',
    moduleId: module.id,
  templateUrl: `./list.component.html`
})
export class JokesListComponent {
  public jokes : Array<Joke> = [];
  constructor(jokeService: JokeService) {
    this.jokes = jokeService.getJokes();

  }

  public share(joke){
    alert(joke)
  }
}