"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var frameModule = require("ui/frame");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var API_END_POINT = 'http://api.icndb.com';
var GetDetailsModel = (function (_super) {
    __extends(GetDetailsModel, _super);
    function GetDetailsModel() {
        var _this = _super.call(this) || this;
        _this.selectedCategory = 0;
        _this.loadingIndicator = new nativescript_loading_indicator_1.LoadingIndicator();
        _this.categories = new observable_array_1.ObservableArray([]);
        _this.loadingIndicator.show();
        http.getJSON(API_END_POINT + '/categories').then(function (cats) {
            _this.categories.push(cats.value);
            _this.set("selectedCategory", _this.selectedCategory);
            _this.loadingIndicator.hide();
        });
        return _this;
    }
    GetDetailsModel.prototype.dropDownSelectedIndexChanged = function (args) {
        this.selectedCategory = args.newIndex;
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
    };
    GetDetailsModel.prototype.onTap = function () {
        frameModule.topmost().navigate({
            moduleName: 'joke-page',
            context: {
                firstName: this.firstName,
                lastName: this.lastName,
                category: this.categories[this.selectedCategory]
            }
        });
    };
    return GetDetailsModel;
}(observable_1.Observable));
exports.GetDetailsModel = GetDetailsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFDN0MsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUM3QixzQ0FBd0M7QUFFeEMsaUZBQWdFO0FBR2hFLElBQU0sYUFBYSxHQUFXLHNCQUFzQixDQUFDO0FBR3JEO0lBQXFDLG1DQUFVO0lBVzNDO1FBQUEsWUFDSSxpQkFBTyxTQVFWO1FBaEJNLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixzQkFBZ0IsR0FBcUIsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQzVELGdCQUFVLEdBQTRCLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQU9qRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUTtZQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakMsQ0FBQyxDQUFDLENBQUE7O0lBQ04sQ0FBQztJQWJNLHNEQUE0QixHQUFuQyxVQUFvQyxJQUFTO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXlDLElBQUksQ0FBQyxRQUFRLFlBQU8sSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFZTSwrQkFBSyxHQUFaO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMzQixVQUFVLEVBQUUsV0FBVztZQUN2QixPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUNuRDtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBcUMsdUJBQVUsR0FpQzlDO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcblxuXG5jb25zdCBBUElfRU5EX1BPSU5UOiBzdHJpbmcgPSAnaHR0cDovL2FwaS5pY25kYi5jb20nO1xuXG5cbmV4cG9ydCBjbGFzcyBHZXREZXRhaWxzTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbG9hZGluZ0luZGljYXRvcjogTG9hZGluZ0luZGljYXRvciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgcHVibGljIGNhdGVnb3JpZXM6IE9ic2VydmFibGVBcnJheTxzdHJpbmc+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgcHVibGljIGRyb3BEb3duU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IGFyZ3MubmV3SW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fWApO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yLnNob3coKTtcbiAgICAgICAgaHR0cC5nZXRKU09OKEFQSV9FTkRfUE9JTlQgKyAnL2NhdGVnb3JpZXMnKS50aGVuKChjYXRzOmFueSk9PntcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdHMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zZXQoXCJzZWxlY3RlZENhdGVnb3J5XCIsIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IuaGlkZSgpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ2pva2UtcGFnZScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yaWVzW3RoaXMuc2VsZWN0ZWRDYXRlZ29yeV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=