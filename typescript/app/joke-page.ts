import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { JokesModel } from './main-view-model';
import * as http from 'http';

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new JokesModel();
    page.bindingContext.set('firstName',page.navigationContext.firstName);
    page.bindingContext.set('lastName',page.navigationContext.lastName);
}