import * as bodyParser from 'body-parser';
import * as express from 'express';
import 'reflect-metadata';
import { Action, ExpressMiddlewareInterface, Middleware, useContainer, useExpressServer } from 'routing-controllers';
import {ProductController} from "./controllers/product.controller";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.initMiddlewares();

        useExpressServer(this.app, {
            authorizationChecker: async (action: Action, roles: string | string[]) => {
                if (!action.request.auth) {
                    return false;
                }
                if (!roles) {
                    return true;
                }
                if (typeof roles === 'string') {
                    return await action.request.auth.is_a(roles);
                }
                if (roles.length === 0) {
                    return true;
                }
                for (const role of roles)
                    if (await action.request.auth.is_a(role)) {
                        return true;
                    }
                return false;
            },
            currentUserChecker: async (action: Action) => {
                return await action.request.auth;
            },
            cors: {exposedHeaders: ['Content-Disposition']},
            routePrefix: '/api',
            controllers: [
                ProductController
            ],
        });
        this.initRoutes();
    }

    private initMiddlewares(): void {
        this.app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    }

    private initRoutes(): void {
        this.app.use('/apidoc', express.static('docs'));
    }
}


const app = new App().app;
export default app;