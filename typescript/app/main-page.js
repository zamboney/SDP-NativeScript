/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
var observable_1 = require("data/observable");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var observable_array_1 = require("data/observable-array");
var http_1 = require("http");
var frame_1 = require("ui/frame");
var MainModel = (function (_super) {
    __extends(MainModel, _super);
    function MainModel() {
        var _this = _super.call(this) || this;
        _this.selectedCategory = 0;
        _this.loadingIndicator = new nativescript_loading_indicator_1.LoadingIndicator();
        _this.categories = new observable_array_1.ObservableArray(['none']);
        _this.loadingIndicator.show();
        http_1.getJSON('http://api.icndb.com/categories').then(function (cats) {
            _this.categories.push(cats.value);
            _this.set("selectedCategory", _this.selectedCategory);
            _this.loadingIndicator.hide();
        });
        return _this;
    }
    MainModel.prototype.dropDownSelectedIndexChanged = function (args) {
        this.selectedCategory = args.newIndex;
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
    };
    MainModel.prototype.onTap = function () {
        frame_1.topmost().navigate({
            moduleName: 'joke-page',
            context: {
                firstName: this.firstName,
                lastName: this.lastName,
                category: this.categories[this.selectedCategory]
            }
        });
    };
    return MainModel;
}(observable_1.Observable));
exports.MainModel = MainModel;
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new MainModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0FBRUYsOENBQXdEO0FBRXhELGlGQUFrRTtBQUNsRSwwREFBd0Q7QUFDeEQsNkJBQStCO0FBQy9CLGtDQUFtQztBQUduQztJQUErQiw2QkFBVTtJQVdyQztRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQWhCTSxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWdCLEdBQXFCLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUM1RCxnQkFBVSxHQUE0QixJQUFJLGtDQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBT3ZFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixjQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFRO1lBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQyxDQUFDLENBQUMsQ0FBQTs7SUFDTixDQUFDO0lBYk0sZ0RBQTRCLEdBQW5DLFVBQW9DLElBQVM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBeUMsSUFBSSxDQUFDLFFBQVEsWUFBTyxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQVlNLHlCQUFLLEdBQVo7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsV0FBVztZQUN2QixPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUNuRDtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBK0IsdUJBQVUsR0FpQ3hDO0FBakNZLDhCQUFTO0FBbUN0QixzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBSkQsb0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGdldEpTT04gfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBNYWluTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbG9hZGluZ0luZGljYXRvcjogTG9hZGluZ0luZGljYXRvciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgcHVibGljIGNhdGVnb3JpZXM6IE9ic2VydmFibGVBcnJheTxzdHJpbmc+ID0gbmV3IE9ic2VydmFibGVBcnJheShbJ25vbmUnXSk7XG4gICAgcHVibGljIGRyb3BEb3duU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IGFyZ3MubmV3SW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fWApO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yLnNob3coKTtcbiAgICAgICAgZ2V0SlNPTignaHR0cDovL2FwaS5pY25kYi5jb20vY2F0ZWdvcmllcycpLnRoZW4oKGNhdHM6YW55KT0+e1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0cy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldChcInNlbGVjdGVkQ2F0ZWdvcnlcIiwgdGhpcy5zZWxlY3RlZENhdGVnb3J5KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnam9rZS1wYWdlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5zZWxlY3RlZENhdGVnb3J5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTWFpbk1vZGVsKCk7XG59Il19