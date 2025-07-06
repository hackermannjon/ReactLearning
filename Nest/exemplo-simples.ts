/*
==================== EXEMPLO PRÁTICO NEST.JS ====================
Este é um exemplo completo de uma API de usuários usando Nest.js
Os erros de import são normais - em um projeto real você instalaria as dependências
*/

// ==================== 1. ENTITY/MODEL ====================
export interface User {
	id: number;
	name: string;
	email: string;
	age: number;
}

// ==================== 2. SERVICE (Lógica de Negócio) ====================
// @Injectable() - Marca como um provider que pode ser injetado
export class UserService {
	private users: User[] = [
		{ id: 1, name: "João", email: "joao@email.com", age: 25 },
		{ id: 2, name: "Maria", email: "maria@email.com", age: 30 },
	];

	findAll(): User[] {
		return this.users;
	}

	findById(id: number): User | undefined {
		return this.users.find((user) => user.id === id);
	}

	create(userData: Omit<User, "id">): User {
		const newUser: User = {
			id: this.users.length + 1,
			...userData,
		};
		this.users.push(newUser);
		return newUser;
	}

	update(id: number, userData: Partial<User>): User | null {
		const userIndex = this.users.findIndex((user) => user.id === id);
		if (userIndex === -1) return null;

		this.users[userIndex] = { ...this.users[userIndex], ...userData };
		return this.users[userIndex];
	}

	delete(id: number): boolean {
		const userIndex = this.users.findIndex((user) => user.id === id);
		if (userIndex === -1) return false;

		this.users.splice(userIndex, 1);
		return true;
	}
}

// ==================== 3. CONTROLLER (Rotas) ====================
// @Controller('users') - Define que as rotas começam com /users
export class UserController {
	constructor(private readonly userService: UserService) {}

	// @Get() - GET /users
	getAllUsers(): User[] {
		return this.userService.findAll();
	}

	// @Get(':id') - GET /users/:id
	getUserById(id: string): User {
		const userId = parseInt(id);
		const user = this.userService.findById(userId);

		if (!user) {
			throw new Error("Usuário não encontrado");
		}
		return user;
	}

	// @Post() - POST /users
	createUser(userData: Omit<User, "id">): User {
		if (!userData.name || !userData.email) {
			throw new Error("Nome e email são obrigatórios");
		}
		return this.userService.create(userData);
	}

	// @Put(':id') - PUT /users/:id
	updateUser(id: string, userData: Partial<User>): User {
		const userId = parseInt(id);
		const updatedUser = this.userService.update(userId, userData);

		if (!updatedUser) {
			throw new Error("Usuário não encontrado");
		}
		return updatedUser;
	}

	// @Delete(':id') - DELETE /users/:id
	deleteUser(id: string): { message: string } {
		const userId = parseInt(id);
		const deleted = this.userService.delete(userId);

		if (!deleted) {
			throw new Error("Usuário não encontrado");
		}
		return { message: "Usuário deletado com sucesso" };
	}
}

// ==================== 4. MODULE ====================
// @Module({
//   controllers: [UserController],
//   providers: [UserService],
//   exports: [UserService]
// })
export class UserModule {}

// ==================== 5. APP MODULE (ROOT) ====================
// @Module({
//   imports: [UserModule],
//   controllers: [],
//   providers: []
// })
export class AppModule {}

/*
==================== FLUXO DE UMA REQUISIÇÃO ====================

1. Cliente faz: GET /api/users/1

2. Nest.js roteia para UserController.getUserById()

3. Controller chama this.userService.findById(1)

4. Service busca no array de usuários

5. Service retorna o usuário encontrado

6. Controller retorna o resultado para o cliente

==================== ESTRUTURA REAL DE PASTAS ====================
src/
├── main.ts                 # Bootstrap da aplicação
├── app.module.ts           # Módulo raiz
└── users/
    ├── entities/
    │   └── user.entity.ts  # Interface/Model
    ├── user.service.ts     # Lógica de negócio
    ├── user.controller.ts  # Rotas e endpoints
    └── user.module.ts      # Módulo

==================== COMANDOS PARA CRIAR UM PROJETO REAL ====================

# Instalar Nest CLI
npm i -g @nestjs/cli

# Criar novo projeto
nest new meu-projeto

# Gerar módulo
nest generate module users

# Gerar controller
nest generate controller users

# Gerar service
nest generate service users

# Rodar o projeto
npm run start:dev

==================== PRINCIPAIS DECORATORS ====================

@Module()       - Define um módulo
@Controller()   - Define um controlador
@Injectable()   - Marca como provider injetável
@Get()          - Rota GET
@Post()         - Rota POST
@Put()          - Rota PUT
@Delete()       - Rota DELETE
@Param('id')    - Pega parâmetro da URL
@Body()         - Pega dados do corpo da requisição
@Query()        - Pega query parameters (?name=joao)

==================== EXEMPLO DE REQUESTS ====================

GET    /api/users           # Lista todos
GET    /api/users/1         # Busca por ID
POST   /api/users           # Cria novo
PUT    /api/users/1         # Atualiza
DELETE /api/users/1         # Deleta

Body para POST:
{
  "name": "Ana",
  "email": "ana@email.com",
  "age": 28
}

*/
