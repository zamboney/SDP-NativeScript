import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as http from 'http';
import * as frameModule from 'ui/frame';


export class GetDetailsModel extends Observable {

    public firstName: string;
    public lastName: string;

    constructor() {
        super();
    }

    public onTap() {
        frameModule.topmost().navigate({
            moduleName: 'joke-page',
            context: {
                firstName: this.firstName,
                lastName: this.lastName
            }
        });
    }

}

class Joke  extends Observable {
    public set firstName(fn:string){
        if(fn){
            this._firstName = fn;
        }
    }
    public get firstName():string{
        return this._firstName;
    }
    public set lastName(fn:string){
        if(fn){
            this._lastName = fn;
        }
    }
    public get lastName():string{
        return this._lastName;
    }
    constructor(
        private _firstName: string = 'Chuck',
        private _lastName: string = 'Norris') {
            super();
    }

    public create(): Promise<any> {
        return http.getJSON(`http://api.icndb.com/jokes/random?firstName=${this.firstName}&lastName=${this.lastName}`)
            .then((resp: any) => {
                return resp.value;
            }, (error) => {
                console.error(error);
            });
    }
}

export class JokeModel extends Joke {

    public joke: string;
    constructor() {
        super();
    }
    add(){
        super.create().then((value)=>{
            this.set('joke',value.joke);
        });
    }
}

export class JokesModel extends Joke {
    public jokes: ObservableArray<any> = new ObservableArray<any>();

    public add(){
        super.create().then((value)=>this.jokes.unshift(value));
    }
}