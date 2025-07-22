export declare class UserController {
    create(body: any): Promise<{
        body: any;
    }>;
    read(): Promise<{
        users: never[];
    }>;
    readOne(params: any): Promise<{
        users: {};
        params: any;
    }>;
    update(body: any, param: any): Promise<{
        method: string;
        body: any;
        param: any;
    }>;
    delete(params: any): Promise<{
        params: any;
    }>;
}
