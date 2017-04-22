import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Observable } from 'data/observable';
import { getJSON } from "http";
import { ObservableArray } from "data/observable-array";
import { shareText } from "nativescript-social-share";

class JokesModel extends Observable {
    private fn: string = 'Chuck';
    private ln: string = 'Norris';
    private jokes: ObservableArray<any> = new ObservableArray([]);
    private category: string = 'nerdy';
    constructor(settings?:{
        fn:string,
        ln:string,
        category:string
    }) {
        
        super();
        if(settings){
            Object.keys(settings).forEach((val:string)=>{
                if(settings[val]){
                    this[val] = settings[val];
                }
            })
        }
    }


    public add() {
        return getJSON(`http://api.icndb.com/jokes/random?firstName=${this.fn}&lastName=${this.ln}&limitTo=[${this.category}]`)
            .then((resp: any) => {
                return {
                    joke: resp.value.joke.replace(/&quot;/g, '"'),
                    category: resp.value.categories[0]
                };
            }, (error) => {
                console.error(error);
            }).then((joke) => {
                this.jokes.unshift(joke);
            });
    }

    public share(item) {
        shareText(this.jokes.getItem(item.index).joke, 'good joke!');
    }

}

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new JokesModel({
        fn:page.navigationContext.firstName,
        ln:page.navigationContext.lastName,
        category: page.navigationContext.category
    });
}

