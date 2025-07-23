import { CreateUserDTO } from "./dto/create-user.dto";
export declare class UserController {
    create(body: CreateUserDTO): Promise<{
        body: CreateUserDTO;
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
