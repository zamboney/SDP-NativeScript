"use strict";
var observable_1 = require("data/observable");
var http_1 = require("http");
var observable_array_1 = require("data/observable-array");
var nativescript_social_share_1 = require("nativescript-social-share");
var JokesModel = (function (_super) {
    __extends(JokesModel, _super);
    function JokesModel(settings) {
        var _this = _super.call(this) || this;
        _this.fn = 'Chuck';
        _this.ln = 'Norris';
        _this.jokes = new observable_array_1.ObservableArray([]);
        _this.category = 'nerdy';
        if (settings) {
            Object.keys(settings).forEach(function (val) {
                if (settings[val]) {
                    _this[val] = settings[val];
                }
            });
        }
        return _this;
    }
    JokesModel.prototype.add = function () {
        var _this = this;
        return http_1.getJSON("http://api.icndb.com/jokes/random?firstName=" + this.fn + "&lastName=" + this.ln + "&limitTo=[" + this.category + "]")
            .then(function (resp) {
            return {
                joke: resp.value.joke.replace(/&quot;/g, '"'),
                category: resp.value.categories[0]
            };
        }, function (error) {
            console.error(error);
        }).then(function (joke) {
            _this.jokes.unshift(joke);
        });
    };
    JokesModel.prototype.share = function (item) {
        nativescript_social_share_1.shareText(this.jokes.getItem(item.index).joke, 'good joke!');
    };
    return JokesModel;
}(observable_1.Observable));
function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = new JokesModel({
        fn: page.navigationContext.firstName,
        ln: page.navigationContext.lastName,
        category: page.navigationContext.category
    });
}
exports.onNavigatedTo = onNavigatedTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9rZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSw4Q0FBNkM7QUFDN0MsNkJBQStCO0FBQy9CLDBEQUF3RDtBQUN4RCx1RUFBc0Q7QUFFdEQ7SUFBeUIsOEJBQVU7SUFLL0Isb0JBQVksUUFJWDtRQUpELFlBTUksaUJBQU8sU0FRVjtRQWxCTyxRQUFFLEdBQVcsT0FBTyxDQUFDO1FBQ3JCLFFBQUUsR0FBVyxRQUFRLENBQUM7UUFDdEIsV0FBSyxHQUF5QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsY0FBUSxHQUFXLE9BQU8sQ0FBQztRQVEvQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFVO2dCQUNyQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7O0lBQ0wsQ0FBQztJQUdNLHdCQUFHLEdBQVY7UUFBQSxpQkFZQztRQVhHLE1BQU0sQ0FBQyxjQUFPLENBQUMsaURBQStDLElBQUksQ0FBQyxFQUFFLGtCQUFhLElBQUksQ0FBQyxFQUFFLGtCQUFhLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQzthQUNsSCxJQUFJLENBQUMsVUFBQyxJQUFTO1lBQ1osTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztnQkFDN0MsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNyQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDBCQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IscUNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBeUIsdUJBQVUsR0F3Q2xDO0FBRUQsdUJBQThCLElBQWU7SUFDekMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDO1FBQ2pDLEVBQUUsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUztRQUNuQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7UUFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO0tBQzVDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCxzQ0FPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGdldEpTT04gfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgc2hhcmVUZXh0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuY2xhc3MgSm9rZXNNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgZm46IHN0cmluZyA9ICdDaHVjayc7XG4gICAgcHJpdmF0ZSBsbjogc3RyaW5nID0gJ05vcnJpcyc7XG4gICAgcHJpdmF0ZSBqb2tlczogT2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBwcml2YXRlIGNhdGVnb3J5OiBzdHJpbmcgPSAnbmVyZHknO1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzPzp7XG4gICAgICAgIGZuOnN0cmluZyxcbiAgICAgICAgbG46c3RyaW5nLFxuICAgICAgICBjYXRlZ29yeTpzdHJpbmdcbiAgICB9KSB7XG4gICAgICAgIFxuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZihzZXR0aW5ncyl7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykuZm9yRWFjaCgodmFsOnN0cmluZyk9PntcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5nc1t2YWxdKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t2YWxdID0gc2V0dGluZ3NbdmFsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYWRkKCkge1xuICAgICAgICByZXR1cm4gZ2V0SlNPTihgaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2ZpcnN0TmFtZT0ke3RoaXMuZm59Jmxhc3ROYW1lPSR7dGhpcy5sbn0mbGltaXRUbz1bJHt0aGlzLmNhdGVnb3J5fV1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGpva2U6IHJlc3AudmFsdWUuam9rZS5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiByZXNwLnZhbHVlLmNhdGVnb3JpZXNbMF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KS50aGVuKChqb2tlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qb2tlcy51bnNoaWZ0KGpva2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlKGl0ZW0pIHtcbiAgICAgICAgc2hhcmVUZXh0KHRoaXMuam9rZXMuZ2V0SXRlbShpdGVtLmluZGV4KS5qb2tlLCAnZ29vZCBqb2tlIScpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSm9rZXNNb2RlbCh7XG4gICAgICAgIGZuOnBhZ2UubmF2aWdhdGlvbkNvbnRleHQuZmlyc3ROYW1lLFxuICAgICAgICBsbjpwYWdlLm5hdmlnYXRpb25Db250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICBjYXRlZ29yeTogcGFnZS5uYXZpZ2F0aW9uQ29udGV4dC5jYXRlZ29yeVxuICAgIH0pO1xufVxuXG4iXX0=