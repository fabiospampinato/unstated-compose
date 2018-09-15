import { Container } from 'unstated';
declare class ChildContainer<Context extends object, State extends object> extends Container<State> {
    ctx: Context;
}
declare class ParentContainer<Context extends object, State extends object> extends Container<State> {
    ctx: Context;
    [index: string]: Container<State>[keyof Container<State>] | Context[keyof Context] | Context;
}
declare function compose(containers: object): (MainContainer?: any) => any;
export { compose, ChildContainer, ParentContainer };
export default compose;
