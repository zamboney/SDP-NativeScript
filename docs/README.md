# NativeScript
### Develop Cross Platform Mobile Application Using JavaScript



### What is NativeScript


> NativeScript is an open-source framework for building cross-platform mobile apps for iOS and
Android. Created and maintained by Telerik, NativeScript differs from other mobile frameworks
in many ways, the largest being that it is truly write once for all platforms.

*https://www.manning.com/books/nativescript-in-action*


In this talk i will try to:
* Show where NativeScript located in the mobile app echo system.
* Explain how NativeScript work.
* Build a NativeScript App.
* Build a NativeScript App With Angular2.



### NativeScript In the Mobile Ecosystem


there is four type of mobile application exist today in the mobile echo system:

Mobile App Type | Framework
--- |:---
Native | Android, IOS
Hybrid | cordova (IONIC, PhoneGap)
Cross Compile | Xamarin
JIT (Just In Time) | **NativeScript**, React Native


#### Native
write in native code, Java for Android and ObjectiveC for IOS

![native compile](images/Native_Process.png)


#### Hybrid
write in javascript, css and html as a web side. then the hybrid compiler will warp the code as a `webview` and the output will be a native application in both Android and IOS.

![hybrid compile](images/Hybrid_process.png)


#### Cross Compile
write your business logic in C# and ui in XMAL. the cross build process will compile a IOS and a Android **Native** application

![cross compile](images/Cross_Build_Process.png)


#### JIT
write your business logic in JavaScript and your UI with html and css. then the by using a JavaScript virtual Machine the JIT complier will convert your app to a **Native** application

![cross compile](images/JIT_Process.png)


#### Performance - Start Up
Platform | Run 1 | Run 2 | Run 3 
--- | --- | --- | ---
Native | 111ms | 105ms | 108ms
Xamarin.Forms | 484ms | 471ms | 469ms 
NativeScript | 674ms | 672ms | 670ms

*https://www.nativescript.org/blog/nativescript-and-xamarin*


#### Performance - Create and Populate Large Arrays
Platform | Run 1 | Run 2 | Run 3 
--- | --- | --- | ---
Native | 768ms | 774ms | 759ms
NativeScript | 1135ms | 1129ms | 1138ms 
Xamarin | 3763ms | 3906ms | 3789ms

*https://www.nativescript.org/blog/nativescript-and-xamarin*



### How NativeScript Work


#### Building The App
the developing part is separate to three part

1. Layout:
    * write the layout and the UI Controller in a xml file
2. Business Logic:
    * write your BL in a JavaScript file
3. Styling:
    * write styling and animation in css file


![nativescript_app_core](images/develop_process.png)


#### Runtime, Core Modules
the NativeScript Runtime and the Core Modules will convert the xml and css file to a native application 

the NativeScript CLI will know, base on the device that you running, witch configuration to run.

that means that NativeScript developer can use external packages that build for the native application.


#### JavaScript Virtual Machine
all that left is to run the JSVM in the app to run JavScript and convert it **J**ust **I**n **T**time to a native business logic 


![nativescript_app_core](images/Building.png)



### Build Your First NativeScript App


1. you need to have XCode and a Android SDK in you machine for mac developer or just Android SDK for pc/linux users.
2. because NativeScript is a NodeJS module you can simply download it from NPM by execute `npm install -g nativescript` on terminal.

##that it!

you now have typescript on your machine

for further explanation go to [http://docs.nativescript.org/start/quick-setup](http://docs.nativescript.org/start/quick-setup)


NativeScript comes with a build in scaffolding 

so just select the folder that you want the NativeScript app be located and run 

`tns create <project-name>`

> `tns` stand for Telerik Native Script.

there is a lot of NativeScript template in [https://www.tjvantoll.com/2016/02/22/creating-nativescript-templates/](https://www.tjvantoll.com/2016/02/22/creating-nativescript-templates/)


Now lets app iOS and Android source file to the project.

```bash
tns add platform ios
tns add platform android
```

all that left it to run the app 

```bash
tns run ios
tns run android
```


