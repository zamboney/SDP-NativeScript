this stage is about add `NativeScriptFormsModule`

first to `app.module.ts`
```ts
import {NativeScriptFormsModule} from "nativescript-angular/forms"
@NgModule({
    imports: [
        NativeScriptFormsModule, // RIGHT HERE
    ],
})
```

then in the html file
