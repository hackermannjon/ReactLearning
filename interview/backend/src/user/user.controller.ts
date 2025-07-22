import { Body, Controller, Post,Get, Param, Put, Delete } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {
        return {body};
    }

    @Get()
    async read() {
        return{users:[]}
    }

    @Get(':id')
    async readOne(@Param() params){
        return {users:{}, params}
    }

    @Put(':id')
    async update(@Body() body, @Param() param){
        return {
            method: 'put',
            body,
            param
        }

    }

    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }

    }

}