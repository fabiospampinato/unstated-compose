
/* IMPORT */

import {Container} from 'unstated';

/* CONTAINERS */

class ChildContainer<Context extends object, State extends object> extends Container<State> {
  ctx: Context;
}

class ParentContainer<Context extends object, State extends object> extends Container<State> {
  ctx: Context;
  [index:string]: Container<State>[keyof Container<State>] | Context[keyof Context] | Context; //FIXME: Should be `[key in keyof Children]: Children[keyof Children]` instead
}

/* COMPOSE */

function compose ( containers: object ) {

  return function ( MainContainer = ParentContainer as any ) {

    return class ComposedContainer extends MainContainer {

      constructor ( ...args ) {

        super ( ...args );

        this.state = {};
        this.ctx = {};

        for ( let name in containers ) {

          const container = new containers[name]();

          container.ctx = this;

          this[name] = container;
          this.state[name] = Object.assign ( {}, container.state );
          this.ctx[name] = container;

          const setState = container.setState;

          container.setState = async ( ...args ) => {

            await setState.apply ( container, args );

            const state = Object.assign ( {}, container.state );

            this.setState ({ [name]: state });

          };

        }

      }

    } as any;

  }

}

/* EXPORT */

export = Object.assign ( compose, { default: compose, ChildContainer, ParentContainer } );
