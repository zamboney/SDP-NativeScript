"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var frameModule = require("ui/frame");
var GetDetailsModel = (function (_super) {
    __extends(GetDetailsModel, _super);
    function GetDetailsModel() {
        return _super.call(this) || this;
    }
    GetDetailsModel.prototype.onTap = function () {
        frameModule.topmost().navigate({
            moduleName: 'joke-page',
            context: {
                firstName: this.firstName,
                lastName: this.lastName
            }
        });
    };
    return GetDetailsModel;
}(observable_1.Observable));
exports.GetDetailsModel = GetDetailsModel;
var Joke = (function (_super) {
    __extends(Joke, _super);
    function Joke(_firstName, _lastName) {
        if (_firstName === void 0) { _firstName = 'Chuck'; }
        if (_lastName === void 0) { _lastName = 'Norris'; }
        var _this = _super.call(this) || this;
        _this._firstName = _firstName;
        _this._lastName = _lastName;
        return _this;
    }
    Object.defineProperty(Joke.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fn) {
            if (fn) {
                this._firstName = fn;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Joke.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (fn) {
            if (fn) {
                this._lastName = fn;
            }
        },
        enumerable: true,
        configurable: true
    });
    Joke.prototype.create = function () {
        return http.getJSON("http://api.icndb.com/jokes/random?firstName=" + this.firstName + "&lastName=" + this.lastName)
            .then(function (resp) {
            return resp.value;
        }, function (error) {
            console.error(error);
        });
    };
    return Joke;
}(observable_1.Observable));
var JokeModel = (function (_super) {
    __extends(JokeModel, _super);
    function JokeModel() {
        return _super.call(this) || this;
    }
    JokeModel.prototype.add = function () {
        var _this = this;
        _super.prototype.create.call(this).then(function (value) {
            _this.set('joke', value.joke);
        });
    };
    return JokeModel;
}(Joke));
exports.JokeModel = JokeModel;
var JokesModel = (function (_super) {
    __extends(JokesModel, _super);
    function JokesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jokes = new observable_array_1.ObservableArray();
        return _this;
    }
    JokesModel.prototype.add = function () {
        var _this = this;
        _super.prototype.create.call(this).then(function (value) { return _this.jokes.unshift(value); });
    };
    return JokesModel;
}(Joke));
exports.JokesModel = JokesModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFDN0MsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUM3QixzQ0FBd0M7QUFHeEM7SUFBcUMsbUNBQVU7SUFLM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMzQixVQUFVLEVBQUUsV0FBVztZQUN2QixPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDMUI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBbkJELENBQXFDLHVCQUFVLEdBbUI5QztBQW5CWSwwQ0FBZTtBQXFCNUI7SUFBb0Isd0JBQVU7SUFpQjFCLGNBQ1ksVUFBNEIsRUFDNUIsU0FBNEI7UUFENUIsMkJBQUEsRUFBQSxvQkFBNEI7UUFDNUIsMEJBQUEsRUFBQSxvQkFBNEI7UUFGeEMsWUFHUSxpQkFBTyxTQUNkO1FBSFcsZ0JBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQW1COztJQUV4QyxDQUFDO0lBcEJELHNCQUFXLDJCQUFTO2FBS3BCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQVBELFVBQXFCLEVBQVM7WUFDMUIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFJRCxzQkFBVywwQkFBUTthQUtuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFQRCxVQUFvQixFQUFTO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBVU0scUJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlEQUErQyxJQUFJLENBQUMsU0FBUyxrQkFBYSxJQUFJLENBQUMsUUFBVSxDQUFDO2FBQ3pHLElBQUksQ0FBQyxVQUFDLElBQVM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUFvQix1QkFBVSxHQStCN0I7QUFFRDtJQUErQiw2QkFBSTtJQUcvQjtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUNELHVCQUFHLEdBQUg7UUFBQSxpQkFJQztRQUhHLGlCQUFNLE1BQU0sV0FBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQStCLElBQUksR0FXbEM7QUFYWSw4QkFBUztBQWF0QjtJQUFnQyw4QkFBSTtJQUFwQztRQUFBLHFFQU1DO1FBTFUsV0FBSyxHQUF5QixJQUFJLGtDQUFlLEVBQU8sQ0FBQzs7SUFLcEUsQ0FBQztJQUhVLHdCQUFHLEdBQVY7UUFBQSxpQkFFQztRQURHLGlCQUFNLE1BQU0sV0FBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWdDLElBQUksR0FNbkM7QUFOWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tICd1aS9mcmFtZSc7XG5cblxuZXhwb3J0IGNsYXNzIEdldERldGFpbHNNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ2pva2UtcGFnZScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuY2xhc3MgSm9rZSAgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwdWJsaWMgc2V0IGZpcnN0TmFtZShmbjpzdHJpbmcpe1xuICAgICAgICBpZihmbil7XG4gICAgICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZpcnN0TmFtZSgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0TmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBsYXN0TmFtZShmbjpzdHJpbmcpe1xuICAgICAgICBpZihmbil7XG4gICAgICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IGZuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbGFzdE5hbWUoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2ZpcnN0TmFtZTogc3RyaW5nID0gJ0NodWNrJyxcbiAgICAgICAgcHJpdmF0ZSBfbGFzdE5hbWU6IHN0cmluZyA9ICdOb3JyaXMnKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGh0dHAuZ2V0SlNPTihgaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2ZpcnN0TmFtZT0ke3RoaXMuZmlyc3ROYW1lfSZsYXN0TmFtZT0ke3RoaXMubGFzdE5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC52YWx1ZTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSm9rZU1vZGVsIGV4dGVuZHMgSm9rZSB7XG5cbiAgICBwdWJsaWMgam9rZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhZGQoKXtcbiAgICAgICAgc3VwZXIuY3JlYXRlKCkudGhlbigodmFsdWUpPT57XG4gICAgICAgICAgICB0aGlzLnNldCgnam9rZScsdmFsdWUuam9rZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpva2VzTW9kZWwgZXh0ZW5kcyBKb2tlIHtcbiAgICBwdWJsaWMgam9rZXM6IE9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheTxhbnk+KCk7XG5cbiAgICBwdWJsaWMgYWRkKCl7XG4gICAgICAgIHN1cGVyLmNyZWF0ZSgpLnRoZW4oKHZhbHVlKT0+dGhpcy5qb2tlcy51bnNoaWZ0KHZhbHVlKSk7XG4gICAgfVxufSJdfQ==