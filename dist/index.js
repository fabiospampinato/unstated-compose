"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var unstated_1 = require("unstated");
/* CONTAINERS */
var ChildContainer = /** @class */ (function (_super) {
    __extends(ChildContainer, _super);
    function ChildContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildContainer;
}(unstated_1.Container));
exports.ChildContainer = ChildContainer;
var ParentContainer = /** @class */ (function (_super) {
    __extends(ParentContainer, _super);
    function ParentContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParentContainer;
}(unstated_1.Container));
exports.ParentContainer = ParentContainer;
/* COMPOSE */
function compose(containers) {
    return function (MainContainer) {
        if (MainContainer === void 0) { MainContainer = ParentContainer; }
        return /** @class */ (function (_super) {
            __extends(ComposedContainer, _super);
            function ComposedContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                _this.state = {};
                _this.ctx = {};
                var _loop_1 = function (name_1) {
                    var container = new containers[name_1]();
                    container.ctx = this_1;
                    this_1[name_1] = container;
                    this_1.state[name_1] = Object.assign({}, container.state);
                    this_1.ctx[name_1] = container;
                    var setState = container.setState;
                    container.setState = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(_this, void 0, void 0, function () {
                            var _a, state;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, setState.apply(container, args)];
                                    case 1:
                                        _b.sent();
                                        state = Object.assign({}, container.state);
                                        this.setState((_a = {}, _a[name_1] = state, _a));
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                };
                var this_1 = this;
                for (var name_1 in containers) {
                    _loop_1(name_1);
                }
                return _this;
            }
            return ComposedContainer;
        }(MainContainer));
    };
}
exports.compose = compose;
exports.default = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVoscUNBQW1DO0FBRW5DLGdCQUFnQjtBQUVoQjtJQUEyRSxrQ0FBZ0I7SUFBM0Y7O0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELENBQTJFLG9CQUFTLEdBRW5GO0FBd0RnQix3Q0FBYztBQXREL0I7SUFBNEUsbUNBQWdCO0lBQTVGOztJQUdBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFIRCxDQUE0RSxvQkFBUyxHQUdwRjtBQW1EZ0MsMENBQWU7QUFqRGhELGFBQWE7QUFFYixTQUFTLE9BQU8sQ0FBRyxVQUFrQjtJQUVuQyxPQUFPLFVBQVcsYUFBc0M7UUFBdEMsOEJBQUEsRUFBQSxnQkFBZ0IsZUFBc0I7UUFFdEQsT0FBTztZQUFnQyxxQ0FBYTtZQUVsRDtnQkFBYyxjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAseUJBQU87O2dCQUFyQiwrQkFFYSxJQUFJLFVBNkJoQjtnQkEzQkMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3dDQUVKLE1BQUk7b0JBRVosSUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFFekMsU0FBUyxDQUFDLEdBQUcsU0FBTyxDQUFDO29CQUVyQixPQUFLLE1BQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztvQkFDdkIsT0FBSyxLQUFLLENBQUMsTUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBRyxFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBRSxDQUFDO29CQUN6RCxPQUFLLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7b0JBRTNCLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7b0JBRXBDLFNBQVMsQ0FBQyxRQUFRLEdBQUc7d0JBQVEsY0FBTzs2QkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPOzRCQUFQLHlCQUFPOzs7Ozs7NENBRWxDLHFCQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUcsU0FBUyxFQUFFLElBQUksQ0FBRSxFQUFBOzt3Q0FBeEMsU0FBd0MsQ0FBQzt3Q0FFbkMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUcsRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUUsQ0FBQzt3Q0FFcEQsSUFBSSxDQUFDLFFBQVEsV0FBSSxHQUFDLE1BQUksSUFBRyxLQUFLLE1BQUcsQ0FBQzs7Ozs7cUJBRW5DLENBQUM7Z0JBRUosQ0FBQzs7Z0JBdEJELEtBQU0sSUFBSSxNQUFJLElBQUksVUFBVTs0QkFBbEIsTUFBSTtpQkFzQmI7O1lBRUgsQ0FBQztZQUVILHdCQUFDO1FBQUQsQ0FBQyxBQW5DTSxDQUFnQyxhQUFhLEVBbUM1QyxDQUFDO0lBRVgsQ0FBQyxDQUFBO0FBRUgsQ0FBQztBQUlPLDBCQUFPO0FBQ2Ysa0JBQWUsT0FBTyxDQUFDIn0=