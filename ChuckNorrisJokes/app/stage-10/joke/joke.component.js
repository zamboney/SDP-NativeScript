"use strict";
var core_1 = require("@angular/core");
var joke_service_1 = require("./joke.service");
var application_settings_1 = require("application-settings");
var nativescript_social_share_1 = require("nativescript-social-share");
var JokeComponent = (function () {
    function JokeComponent(jokeService) {
        this.jokeService = jokeService;
        this.joke = "";
        this.onRefresh();
    }
    JokeComponent.prototype.onShare = function () {
        nativescript_social_share_1.shareText(this.joke);
    };
    JokeComponent.prototype.onRefresh = function () {
        var _this = this;
        this.jokeService.get(application_settings_1.getString('fName', 'Chuck'), application_settings_1.getString('lName', 'Norris')).then(function (joke) {
            _this.joke = joke.text;
        }, function (error) {
            alert(error);
        });
    };
    return JokeComponent;
}());
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        moduleId: module.id,
        templateUrl: "./joke.component.html"
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService])
], JokeComponent);
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLCtDQUFtRDtBQUNuRCw2REFBaUQ7QUFDakQsdUVBQXNEO0FBT3RELElBQWEsYUFBYTtJQUt4Qix1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKckMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUt2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUxNLCtCQUFPLEdBQWQ7UUFDRSxxQ0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBSU0saUNBQVMsR0FBaEI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNsQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFDM0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQzdCLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVTtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO3FDQU1pQywwQkFBVztHQUxqQyxhQUFhLENBa0J6QjtBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSm9rZVNlcnZpY2UsIEpva2UgfSBmcm9tIFwiLi9qb2tlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgc2hhcmVUZXh0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnam9rZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9qb2tlLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBKb2tlQ29tcG9uZW50IHtcbiAgcHVibGljIGpva2U6IHN0cmluZyA9IGBgO1xuICBwdWJsaWMgb25TaGFyZSgpe1xuICAgIHNoYXJlVGV4dCh0aGlzLmpva2UpO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgam9rZVNlcnZpY2U6IEpva2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5vblJlZnJlc2goKTtcbiAgfVxuICBwdWJsaWMgb25SZWZyZXNoKCkge1xuICAgIHRoaXMuam9rZVNlcnZpY2UuZ2V0KFxuICAgICAgZ2V0U3RyaW5nKCdmTmFtZScsICdDaHVjaycpLFxuICAgICAgZ2V0U3RyaW5nKCdsTmFtZScsICdOb3JyaXMnKVxuICAgICkudGhlbigoam9rZTogSm9rZSkgPT4ge1xuICAgICAgdGhpcy5qb2tlID0gam9rZS50ZXh0O1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgYWxlcnQoZXJyb3IpO1xuICAgIH0pXG4gIH1cbn0iXX0=