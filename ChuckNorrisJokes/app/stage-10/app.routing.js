"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var profile_component_1 = require("./profile/profile.component");
var joke_component_1 = require("./joke/joke.component");
var list_component_1 = require("./list/list.component");
var routes = [
    { path: "", redirectTo: "/profile", pathMatch: "full" },
    { path: "profile", component: profile_component_1.ProfileComponent },
    { path: "joke", component: joke_component_1.JokeComponent },
    { path: "list", component: list_component_1.JokesListComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELHdEQUEyRDtBQUUzRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsbUNBQWtCLEVBQUM7Q0FDakQsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEpva2VDb21wb25lbnQgfSBmcm9tIFwiLi9qb2tlL2pva2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBKb2tlc0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcHJvZmlsZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInByb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImpva2VcIiwgY29tcG9uZW50OiBKb2tlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBKb2tlc0xpc3RDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19