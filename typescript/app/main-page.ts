/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { ObservableArray } from "data/observable-array";
import { getJSON } from "http";
import { topmost } from "ui/frame";


export class MainModel extends Observable {

    public firstName: string;
    public lastName: string;
    public selectedCategory: number = 0;
    public loadingIndicator: LoadingIndicator = new LoadingIndicator();
    public categories: ObservableArray<string> = new ObservableArray(['none']);
    public dropDownSelectedIndexChanged(args: any) {
        this.selectedCategory = args.newIndex;
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }
    constructor() {
        super();
        this.loadingIndicator.show();
        getJSON('http://api.icndb.com/categories').then((cats:any)=>{
            this.categories.push(cats.value);
            this.set("selectedCategory", this.selectedCategory);
            this.loadingIndicator.hide();

        })
    }

    public onTap() {
        topmost().navigate({
            moduleName: 'joke-page',
            context: {
                firstName: this.firstName,
                lastName: this.lastName,
                category: this.categories[this.selectedCategory]
            }
        });
    }

}

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    
    page.bindingContext = new MainModel();
}