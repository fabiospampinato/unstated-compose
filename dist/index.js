"use strict";
/* IMPORT */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const unstated_1 = require("unstated");
/* CONTAINERS */
class ChildContainer extends unstated_1.Container {
}
exports.ChildContainer = ChildContainer;
class ParentContainer extends unstated_1.Container {
}
exports.ParentContainer = ParentContainer;
/* COMPOSE */
function compose(containers) {
    return function (MainContainer = ParentContainer) {
        return class ComposedContainer extends MainContainer {
            constructor(...args) {
                super(...args);
                this.state = {};
                this.ctx = {};
                for (let name in containers) {
                    const container = new containers[name]();
                    container.ctx = this;
                    this[name] = container;
                    this.state[name] = Object.assign({}, container.state);
                    this.ctx[name] = container;
                    const setState = container.setState;
                    container.setState = (...args) => __awaiter(this, void 0, void 0, function* () {
                        yield setState.apply(container, args);
                        const state = Object.assign({}, container.state);
                        this.setState({ [name]: state });
                    });
                }
            }
        };
    };
}
exports.compose = compose;
exports.default = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7QUFFWix1Q0FBbUM7QUFFbkMsZ0JBQWdCO0FBRWhCLE1BQU0sY0FBNkQsU0FBUSxvQkFBZ0I7Q0FFMUY7QUF3RGdCLHdDQUFjO0FBdEQvQixNQUFNLGVBQThELFNBQVEsb0JBQWdCO0NBRzNGO0FBbURnQywwQ0FBZTtBQWpEaEQsYUFBYTtBQUViLFNBQVMsT0FBTyxDQUFHLFVBQWtCO0lBRW5DLE9BQU8sVUFBVyxhQUFhLEdBQUcsZUFBc0I7UUFFdEQsT0FBTyxNQUFNLGlCQUFrQixTQUFRLGFBQWE7WUFFbEQsWUFBYyxHQUFHLElBQUk7Z0JBRW5CLEtBQUssQ0FBRyxHQUFHLElBQUksQ0FBRSxDQUFDO2dCQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBRWQsS0FBTSxJQUFJLElBQUksSUFBSSxVQUFVLEVBQUc7b0JBRTdCLE1BQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBRXpDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUVyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUcsRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUUsQ0FBQztvQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7b0JBRTNCLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7b0JBRXBDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBUSxHQUFHLElBQUksRUFBRyxFQUFFO3dCQUV2QyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUcsU0FBUyxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUV6QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFHLEVBQUUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFFLENBQUM7d0JBRXBELElBQUksQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBRXBDLENBQUMsQ0FBQSxDQUFDO2lCQUVIO1lBRUgsQ0FBQztTQUVLLENBQUM7SUFFWCxDQUFDLENBQUE7QUFFSCxDQUFDO0FBSU8sMEJBQU87QUFDZixrQkFBZSxPQUFPLENBQUMifQ==