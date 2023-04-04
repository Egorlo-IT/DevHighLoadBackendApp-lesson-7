/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
const auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
const jwt_auth_guard_1 = __webpack_require__("./src/app/auth/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__("./src/app/auth/local-auth.guard.ts");
let AppController = class AppController {
    constructor(appService, authService) {
        this.appService = appService;
        this.authService = authService;
    }
    getHello() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const message = this.appService.getData();
            return { message };
        });
    }
    login(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const access_token = yield this.authService.login(req.user);
            return access_token;
        });
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    getProfile(req) {
        var _a;
        const user = {
            id: req.user.id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            roles: req.user.roles,
            avatar: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.avatar,
        };
        return user;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    (0, swagger_1.ApiOperation)({ summary: 'Get home page' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Home page successfully received',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppController.prototype, "getHello", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('auth/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Get auth/login' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Authorization successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('auth/logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Get auth/logout' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout completed successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('auth/user'),
    (0, swagger_1.ApiOperation)({ summary: 'Get auth/user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User successfully received',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Security and other'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
const news_module_1 = __webpack_require__("./src/app/news/news.module.ts");
const categories_module_1 = __webpack_require__("./src/app/categories/categories.module.ts");
const mail_module_1 = __webpack_require__("./src/app/mail/mail.module.ts");
const users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
const auth_module_1 = __webpack_require__("./src/app/auth/auth.module.ts");
const config_1 = __webpack_require__("@nestjs/config");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const pgConfigService_1 = __webpack_require__("./src/pgConfigService.ts");
const event_emitter_1 = __webpack_require__("@nestjs/event-emitter");
const cache_manager_redis_store_1 = tslib_1.__importDefault(__webpack_require__("cache-manager-redis-store"));
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            news_module_1.NewsModule,
            categories_module_1.CategoriesModule,
            mail_module_1.MailModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.development.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: pgConfigService_1.PgConfigService,
                inject: [pgConfigService_1.PgConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            common_1.CacheModule.register({
                isGlobal: true,
                store: cache_manager_redis_store_1.default,
                host: 'localhost',
                port: 6379,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
const local_strategy_1 = __webpack_require__("./src/app/auth/local.strategy.ts");
const users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const constants_1 = __webpack_require__("./src/app/auth/constants.ts");
const jwt_strategy_1 = __webpack_require__("./src/app/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const crypto_1 = __webpack_require__("./src/app/utils/crypto.ts");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(email, pass) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findByEmail(email);
            if (user && (yield (0, crypto_1.compare)(pass, user.password))) {
                return user;
            }
            return null;
        });
    }
    login(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = user;
            const currDate = new Date();
            const calculatedExpiresIn = currDate.getTime() +
                60 * 600 * 1000 -
                (currDate.getTime() - currDate.getMilliseconds()) / 1000;
            return {
                access_token: this.jwtService.sign(payload, {
                    expiresIn: calculatedExpiresIn,
                }),
            };
        });
    }
    verify(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.jwtService.verify(token);
        });
    }
    decode(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.jwtService.decode(token);
        });
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/auth/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),

/***/ "./src/app/auth/jwt-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./src/app/auth/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const constants_1 = __webpack_require__("./src/app/auth/constants.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return payload;
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./src/app/auth/local-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./src/app/auth/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_local_1 = __webpack_require__("passport-local");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userEntity = yield this.authService.validateUser(email, password);
            if (!userEntity) {
                throw new common_1.UnauthorizedException();
            }
            const user = Object.assign({}, userEntity);
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./src/app/auth/role/role.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Moderator"] = "moderator";
})(Role = exports.Role || (exports.Role = {}));


/***/ }),

/***/ "./src/app/auth/role/roles.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__("@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./src/app/auth/ws-jwt.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WsJwtGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
let WsJwtGuard = class WsJwtGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // Особым образом извлекаем информацию о клиенте
                const client = context.switchToWs().getClient();
                // Извлекаем токен
                const authToken = client.handshake.headers.authorization.split(' ')[1];
                // Вызываем метод проверки токена из сервиса authService
                const isAuth = yield this.authService.verify(authToken);
                if (isAuth) {
                    // Декодируем токен и извлекаем информацию о пользователе
                    const user = yield this.authService.decode(authToken);
                    // Информацию о пользователе записываем в поле data нашего клиента
                    context.switchToWs().getClient().data.user = user;
                    return true;
                }
                return false;
            }
            catch (_a) {
                return false;
            }
        });
    }
};
WsJwtGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], WsJwtGuard);
exports.WsJwtGuard = WsJwtGuard;


/***/ }),

/***/ "./src/app/categories/categories.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const categories_service_1 = __webpack_require__("./src/app/categories/categories.service.ts");
const categories_entity_1 = __webpack_require__("./src/app/categories/categories.entity.ts");
const roles_decorator_1 = __webpack_require__("./src/app/auth/role/roles.decorator.ts");
const role_enum_1 = __webpack_require__("./src/app/auth/role/role.enum.ts");
const jwt_auth_guard_1 = __webpack_require__("./src/app/auth/jwt-auth.guard.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    create(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.categoriesService.create(name);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, swagger_1.ApiOperation)({ summary: 'Category creation' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category successfully created',
        type: categories_entity_1.CategoriesEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Body)('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CategoriesController.prototype, "create", null);
CategoriesController = tslib_1.__decorate([
    (0, common_1.Controller)('categories'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Categories'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" ? _a : Object])
], CategoriesController);
exports.CategoriesController = CategoriesController;


/***/ }),

/***/ "./src/app/categories/categories.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const typeorm_1 = __webpack_require__("typeorm");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
let CategoriesEntity = class CategoriesEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, swagger_1.ApiProperty)({ example: 'Category id', description: 'User id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof typeorm_1.ObjectID !== "undefined" && typeorm_1.ObjectID) === "function" ? _a : Object)
], CategoriesEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({ example: 'Category name', description: 'Category name' }),
    tslib_1.__metadata("design:type", String)
], CategoriesEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => news_entity_1.NewsEntity, (news) => news.category),
    tslib_1.__metadata("design:type", Array)
], CategoriesEntity.prototype, "news", void 0);
CategoriesEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('categories')
], CategoriesEntity);
exports.CategoriesEntity = CategoriesEntity;


/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const categories_controller_1 = __webpack_require__("./src/app/categories/categories.controller.ts");
const categories_entity_1 = __webpack_require__("./src/app/categories/categories.entity.ts");
const categories_service_1 = __webpack_require__("./src/app/categories/categories.service.ts");
let CategoriesModule = class CategoriesModule {
};
CategoriesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([categories_entity_1.CategoriesEntity])],
        exports: [categories_service_1.CategoriesService],
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;


/***/ }),

/***/ "./src/app/categories/categories.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const categories_entity_1 = __webpack_require__("./src/app/categories/categories.entity.ts");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    create(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.categoriesRepository.save({ name });
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.categoriesRepository.findOneById(id);
            return data;
        });
    }
};
CategoriesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(categories_entity_1.CategoriesEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoriesService);
exports.CategoriesService = CategoriesService;


/***/ }),

/***/ "./src/app/mail/mail.config.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const handlebars_adapter_1 = __webpack_require__("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const path_1 = __webpack_require__("path");
let MailConfigService = class MailConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createMailerOptions() {
        return {
            transport: 'smtps://' +
                this.configService.get('MAILER_EMAIL') +
                ':' +
                this.configService.get('MAILER_PASSWORD') +
                '@' +
                this.configService.get('MAILER_SERVER'),
            defaults: {
                from: '"NestJS робот" <' +
                    this.configService.get('MAILER_EMAIL') +
                    '>',
            },
            template: {
                dir: (0, path_1.join)(__dirname, 'templates'),
                adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        };
    }
};
MailConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], MailConfigService);
exports.MailConfigService = MailConfigService;


/***/ }),

/***/ "./src/app/mail/mail.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const mail_service_1 = __webpack_require__("./src/app/mail/mail.service.ts");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    sendTestEmail() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.mailService.sendTest();
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Send email' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Mail sent successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MailController.prototype, "sendTestEmail", null);
MailController = tslib_1.__decorate([
    (0, common_1.Controller)('mail'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Email'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _a : Object])
], MailController);
exports.MailController = MailController;


/***/ }),

/***/ "./src/app/mail/mail.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mail_service_1 = __webpack_require__("./src/app/mail/mail.service.ts");
const mail_controller_1 = __webpack_require__("./src/app/mail/mail.controller.ts");
const mailer_1 = __webpack_require__("@nestjs-modules/mailer");
const mail_config_service_1 = __webpack_require__("./src/app/mail/mail.config.service.ts");
let MailModule = class MailModule {
};
MailModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useClass: mail_config_service_1.MailConfigService,
                inject: [mail_config_service_1.MailConfigService],
            }),
        ],
        providers: [mail_service_1.MailService],
        controllers: [mail_controller_1.MailController],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;


/***/ }),

/***/ "./src/app/mail/mail.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mailer_1 = __webpack_require__("@nestjs-modules/mailer");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendTest() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Отправляется письмо установки');
            return this.mailerService
                .sendMail({
                to: 'egorlo059@gmail.com',
                subject: 'Первое тестовое письмо',
                template: './test',
            })
                .then((res) => {
                console.log('res', res);
            })
                .catch((err) => {
                console.log('err', err);
            });
        });
    }
    sendNewNewsForAdmins(emails, news) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('news:', news);
            console.log('Отправляются письма о новой новости администрации ресурса');
            for (const email of emails) {
                yield this.mailerService
                    .sendMail({
                    to: email,
                    subject: `Создана новая новость: ${news.title}`,
                    template: './new-news',
                    context: news,
                })
                    .then((res) => {
                    console.log('res', res);
                })
                    .catch((err) => {
                    console.log('err', err);
                });
            }
        });
    }
};
MailService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], MailService);
exports.MailService = MailService;


/***/ }),

/***/ "./src/app/news/comments/comments.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const comments_service_1 = __webpack_require__("./src/app/news/comments/comments.service.ts");
const comment_create_dto_1 = __webpack_require__("./src/app/news/comments/dtos/comment-create.dto.ts");
const jwt_auth_guard_1 = __webpack_require__("./src/app/auth/jwt-auth.guard.ts");
const news_id_dto_1 = __webpack_require__("./src/app/news/dtos/news-id.dto.ts");
const pipes_1 = __webpack_require__("@nestjs/common/pipes");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    create(idNews, comment) {
        return this.commentsService.create(idNews, comment.message, comment.userId);
    }
    edit(idComment, idNews, comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentsService.edit(idComment, idNews, comment.message, comment.userId);
        });
    }
    remove(idComment, idNews) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentsService.remove(idComment, idNews);
        });
    }
    getAll(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commentsData = yield this.commentsService.findAll(params.id);
            const comments = JSON.parse(JSON.stringify(commentsData), function (key, value) {
                if (key == 'password' || key == 'email')
                    return;
                return value;
            });
            return comments;
        });
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create/:idNews'),
    (0, swagger_1.ApiOperation)({ summary: 'News creation' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Comment successfully created',
        type: comments_entity_1.CommentsEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Param)('idNews', pipes_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof comment_create_dto_1.CommentCreateDto !== "undefined" && comment_create_dto_1.CommentCreateDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Post)('edit/:idComment/:idNews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Comment edit' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Comment successfully edit',
        type: comments_entity_1.CommentsEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Param)('idComment', pipes_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('idNews', pipes_1.ParseIntPipe)),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, typeof (_c = typeof comment_create_dto_1.CommentCreateDto !== "undefined" && comment_create_dto_1.CommentCreateDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "edit", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':idComment/:idNews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Comment delete' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Comment successfully deleted',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Param)('idComment', pipes_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('idNews', pipes_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Get)('all/news/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get comments' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Comments successfully received',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof news_id_dto_1.NewsIdDto !== "undefined" && news_id_dto_1.NewsIdDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "getAll", null);
CommentsController = tslib_1.__decorate([
    (0, common_1.Controller)('news-comments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Сomments'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _a : Object])
], CommentsController);
exports.CommentsController = CommentsController;


/***/ }),

/***/ "./src/app/news/comments/comments.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const typeorm_1 = __webpack_require__("typeorm");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
let CommentsEntity = class CommentsEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, swagger_1.ApiProperty)({ example: 'Comment id', description: 'Comment id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof typeorm_1.ObjectID !== "undefined" && typeorm_1.ObjectID) === "function" ? _a : Object)
], CommentsEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({ example: 'Comment message', description: 'Comment message' }),
    tslib_1.__metadata("design:type", String)
], CommentsEntity.prototype, "message", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (user) => user.comments),
    tslib_1.__metadata("design:type", typeof (_b = typeof users_entity_1.UsersEntity !== "undefined" && users_entity_1.UsersEntity) === "function" ? _b : Object)
], CommentsEntity.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(() => news_entity_1.NewsEntity),
    (0, typeorm_1.ManyToOne)(() => news_entity_1.NewsEntity, (news) => news.comments),
    tslib_1.__metadata("design:type", typeof (_c = typeof news_entity_1.NewsEntity !== "undefined" && news_entity_1.NewsEntity) === "function" ? _c : Object)
], CommentsEntity.prototype, "news", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date create comment',
    }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CommentsEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date update comment',
    }),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CommentsEntity.prototype, "updatedAt", void 0);
CommentsEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('comments')
], CommentsEntity);
exports.CommentsEntity = CommentsEntity;


/***/ }),

/***/ "./src/app/news/comments/comments.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const comments_service_1 = __webpack_require__("./src/app/news/comments/comments.service.ts");
const socket_comments_gateway_1 = __webpack_require__("./src/app/news/comments/socket-comments.gateway.ts");
const comments_controller_1 = __webpack_require__("./src/app/news/comments/comments.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
const news_module_1 = __webpack_require__("./src/app/news/news.module.ts");
const users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
const auth_module_1 = __webpack_require__("./src/app/auth/auth.module.ts");
let CommentsModule = class CommentsModule {
};
CommentsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [comments_service_1.CommentsService, socket_comments_gateway_1.SocketCommentsGateway],
        controllers: [comments_controller_1.CommentsController],
        imports: [
            (0, common_1.forwardRef)(() => news_module_1.NewsModule),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([comments_entity_1.CommentsEntity]),
        ],
        exports: [comments_service_1.CommentsService],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;


/***/ }),

/***/ "./src/app/news/comments/comments.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const typeorm_2 = __webpack_require__("typeorm");
const news_service_1 = __webpack_require__("./src/app/news/news.service.ts");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
const event_emitter_1 = __webpack_require__("@nestjs/event-emitter");
let CommentsService = class CommentsService {
    constructor(commentsRepository, userService, newsService, eventEmitter) {
        this.commentsRepository = commentsRepository;
        this.userService = userService;
        this.newsService = newsService;
        this.eventEmitter = eventEmitter;
    }
    findAll(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('id', id);
            const data = yield this.commentsRepository.find().then((result) => {
                console.log('result:', result);
                // const filterData = result.filter((item) => item.news.id === id);
                return result;
            });
            return data;
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.commentsRepository.find({
            // where: {
            //   id: id,
            // },
            // relations: ['user', 'news'],
            });
            return data[0];
        });
    }
    create(idNews, message, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // console.log('idNews', idNews);
            // console.log('userId', userId);
            const _news = yield this.newsService.findById(idNews);
            const _user = yield this.userService.findById(userId);
            if (!_news || !_user) {
                throw new common_1.HttpException('Не существует такой новости или пользователя', common_1.HttpStatus.BAD_REQUEST);
            }
            const _commentEntity = new comments_entity_1.CommentsEntity();
            _commentEntity.message = message;
            _commentEntity.news = _news;
            _commentEntity.user = _user;
            return yield this.commentsRepository.save(_commentEntity);
        });
    }
    remove(idComment, idNews) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _comment = yield this.findById(idComment);
            console.log('CommentsService comment.remove');
            this.eventEmitter.emit('comment.remove', {
                idComment: _comment.id,
                idNews: idNews,
            });
            return yield this.commentsRepository.remove(_comment);
        });
    }
    removeAll(idNews) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _comments = yield this.findAll(idNews);
            return yield this.commentsRepository.remove(_comments);
        });
    }
    edit(idComment, idNews, message, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _news = yield this.newsService.findById(idNews);
            const _user = yield this.userService.findById(userId);
            if (!_news || !_user) {
                throw new common_1.HttpException('Не существует такой новости или пользователя', common_1.HttpStatus.BAD_REQUEST);
            }
            const _commentEntity = new comments_entity_1.CommentsEntity();
            _commentEntity.message = message;
            _commentEntity.news = _news;
            _commentEntity.user = _user;
            yield this.commentsRepository.update(idComment, _commentEntity);
            return _commentEntity;
        });
    }
};
CommentsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(comments_entity_1.CommentsEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object, typeof (_c = typeof news_service_1.NewsService !== "undefined" && news_service_1.NewsService) === "function" ? _c : Object, typeof (_d = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _d : Object])
], CommentsService);
exports.CommentsService = CommentsService;


/***/ }),

/***/ "./src/app/news/comments/dtos/comment-create.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class CommentCreateDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Comment message', description: 'Comment message' }),
    tslib_1.__metadata("design:type", String)
], CommentCreateDto.prototype, "message", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'User id', description: 'User id' }),
    tslib_1.__metadata("design:type", String)
], CommentCreateDto.prototype, "userId", void 0);
exports.CommentCreateDto = CommentCreateDto;


/***/ }),

/***/ "./src/app/news/comments/socket-comments.gateway.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketCommentsGateway = void 0;
const tslib_1 = __webpack_require__("tslib");
/* eslint-disable @typescript-eslint/no-unused-vars */
const websockets_1 = __webpack_require__("@nestjs/websockets");
const common_1 = __webpack_require__("@nestjs/common");
const socket_io_1 = __webpack_require__("socket.io");
const ws_jwt_guard_1 = __webpack_require__("./src/app/auth/ws-jwt.guard.ts");
const comments_service_1 = __webpack_require__("./src/app/news/comments/comments.service.ts");
const event_emitter_1 = __webpack_require__("@nestjs/event-emitter");
let SocketCommentsGateway = class SocketCommentsGateway {
    constructor(commentsService) {
        this.commentsService = commentsService;
        this.logger = new common_1.Logger('AppGateway');
    }
    handleMessage(client, comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { idNews, message } = comment;
            console.log('idNews:', idNews);
            console.log('message:', message);
            const userId = client.data.user.id;
            const _comment = yield this.commentsService.create(idNews, message, userId);
            this.server.to(idNews.toString()).emit('newComment', _comment);
        });
    }
    handleMessageEditComment(client, comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { idComment, idNews, message } = comment;
            console.log(idComment, idNews, message);
            const userId = client.data.user.id;
            yield this.commentsService.edit(idComment, idNews, message, userId);
            const comments = yield this.commentsService.findAll(idNews);
            console.log('comments:', comments);
            this.server.to(idNews.toString()).emit('editComment', { comments });
        });
    }
    handleRemoveCommentEvent(payload) {
        console.log('SocketCommentsGateway comment.remove');
        const { idComment, idNews } = payload;
        this.server.to(idNews.toString()).emit('removeComment', { idComment });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterInit(server) {
        this.logger.log('Init');
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleConnection(client, ...args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { newsId } = client.handshake.query;
            // После подключения пользователя к веб-сокету, подключаем его в комнату
            client.join(newsId);
            this.logger.log(`Client connected: ${client.id}`);
        });
    }
};
tslib_1.__decorate([
    (0, websockets_1.WebSocketServer)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], SocketCommentsGateway.prototype, "server", void 0);
tslib_1.__decorate([
    (0, common_1.UseGuards)(ws_jwt_guard_1.WsJwtGuard),
    (0, websockets_1.SubscribeMessage)('addComment'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], SocketCommentsGateway.prototype, "handleMessage", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(ws_jwt_guard_1.WsJwtGuard),
    (0, websockets_1.SubscribeMessage)('editComment'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], SocketCommentsGateway.prototype, "handleMessageEditComment", null);
tslib_1.__decorate([
    (0, event_emitter_1.OnEvent)('comment.remove'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SocketCommentsGateway.prototype, "handleRemoveCommentEvent", null);
SocketCommentsGateway = tslib_1.__decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _a : Object])
], SocketCommentsGateway);
exports.SocketCommentsGateway = SocketCommentsGateway;


/***/ }),

/***/ "./src/app/news/dtos/news-create.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsCreateDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class NewsCreateDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'News title', description: 'News title' }),
    tslib_1.__metadata("design:type", String)
], NewsCreateDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'News description', description: 'News description' }),
    tslib_1.__metadata("design:type", String)
], NewsCreateDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.cover),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'News cover', description: 'News cover' }),
    tslib_1.__metadata("design:type", String)
], NewsCreateDto.prototype, "cover", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Author id', description: 'Author id' }),
    tslib_1.__metadata("design:type", String)
], NewsCreateDto.prototype, "authorId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Category id', description: 'Category id' }),
    tslib_1.__metadata("design:type", String)
], NewsCreateDto.prototype, "categoryId", void 0);
exports.NewsCreateDto = NewsCreateDto;


/***/ }),

/***/ "./src/app/news/dtos/news-id.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsIdDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class NewsIdDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], NewsIdDto.prototype, "id", void 0);
exports.NewsIdDto = NewsIdDto;


/***/ }),

/***/ "./src/app/news/news.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const multer_1 = __webpack_require__("multer");
const jwt_auth_guard_1 = __webpack_require__("./src/app/auth/jwt-auth.guard.ts");
const categories_service_1 = __webpack_require__("./src/app/categories/categories.service.ts");
// import { MailService } from '../mail/mail.service';
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const helperFileLoaderNews_1 = __webpack_require__("./src/app/utils/helperFileLoaderNews.ts");
const imageFileFilter_1 = __webpack_require__("./src/app/utils/imageFileFilter.ts");
const comments_service_1 = __webpack_require__("./src/app/news/comments/comments.service.ts");
const news_create_dto_1 = __webpack_require__("./src/app/news/dtos/news-create.dto.ts");
const news_id_dto_1 = __webpack_require__("./src/app/news/dtos/news-id.dto.ts");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
const news_service_1 = __webpack_require__("./src/app/news/news.service.ts");
const ioredis_1 = tslib_1.__importDefault(__webpack_require__("ioredis"));
const redis = new ioredis_1.default();
const NEWS_PATH = '/news-static/';
const newsHelperFileLoader = new helperFileLoaderNews_1.HelperFileLoaderNews();
newsHelperFileLoader.path = NEWS_PATH;
let NewsController = class NewsController {
    constructor(newsService, usersService, commentsService, categoriesService // private mailService: MailService
    ) {
        this.newsService = newsService;
        this.usersService = usersService;
        this.commentsService = commentsService;
        this.categoriesService = categoriesService;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const news = yield this.newsService.findAll();
            const data = JSON.parse(JSON.stringify(news), function (key, value) {
                if (key == 'password' || key == 'email')
                    return;
                return value;
            });
            return data;
        });
    }
    create(news, cover) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const _user = yield this.usersService.findById(news.authorId);
                if (!_user) {
                    throw new common_1.HttpException('Не существует такого автора', common_1.HttpStatus.BAD_REQUEST);
                }
                const _category = yield this.categoriesService.findById(news.categoryId);
                if (!_category) {
                    throw new common_1.HttpException('Не существует такой категории', common_1.HttpStatus.BAD_REQUEST);
                }
                const _newsEntity = new news_entity_1.NewsEntity();
                if (cover === null || cover === void 0 ? void 0 : cover.filename) {
                    _newsEntity.cover = NEWS_PATH + cover.filename;
                }
                _newsEntity.title = news.title;
                _newsEntity.description = news.description;
                _newsEntity.user = _user;
                _newsEntity.category = _category;
                const _news = yield this.newsService.create(_newsEntity);
                // await this.mailService.sendNewNewsForAdmins(
                //   ['egorlo059@gmail.com'],
                //   _news
                // );
                return _news;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getByIdDetail(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newsData = yield this.newsService.findById(params.id);
            const news = JSON.parse(JSON.stringify(newsData), function (key, value) {
                if (key == 'password' || key == 'email')
                    return;
                return value;
            });
            const commentsData = yield this.commentsService.findAll(params.id);
            const comments = JSON.parse(JSON.stringify(commentsData), function (key, value) {
                if (key == 'password' || key == 'email')
                    return;
                return value;
            });
            return { news, comments };
        });
    }
    getScore() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.newsService.findAll();
            yield redis.flushdb();
            const users = {};
            const usersSet = new Set();
            data.news.forEach((news) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (usersSet.has(news.user.firstName + ' ' + news.user.lastName)) {
                    users[`${news.user.firstName} ${news.user.lastName}`] += 1;
                }
                else {
                    usersSet.add(news.user.firstName + ' ' + news.user.lastName);
                    users[`${news.user.firstName} ${news.user.lastName}`] = 1;
                }
            }));
            Object.keys(users).forEach((key) => {
                redis.zadd('authtors', users[key], key);
            });
            return yield redis.zrevrange('authtors', 0, 10, 'WITHSCORES');
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all news' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'News successfully received',
        type: news_entity_1.NewsEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], NewsController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('cover', {
        storage: (0, multer_1.diskStorage)({
            destination: newsHelperFileLoader.destinationPath,
            filename: newsHelperFileLoader.customFileName,
        }),
        fileFilter: imageFileFilter_1.imageFileFilter,
    })),
    (0, swagger_1.ApiOperation)({ summary: 'News creation' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'News successfully created',
        type: news_entity_1.NewsEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof news_create_dto_1.NewsCreateDto !== "undefined" && news_create_dto_1.NewsCreateDto) === "function" ? _f : Object, typeof (_h = typeof Express !== "undefined" && (_g = Express.Multer) !== void 0 && _g.File) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NewsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/detail'),
    (0, swagger_1.ApiOperation)({ summary: 'News details' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'News details successfully received',
        type: news_entity_1.NewsEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof news_id_dto_1.NewsIdDto !== "undefined" && news_id_dto_1.NewsIdDto) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NewsController.prototype, "getByIdDetail", null);
tslib_1.__decorate([
    (0, common_1.Get)('score'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], NewsController.prototype, "getScore", null);
NewsController = tslib_1.__decorate([
    (0, common_1.Controller)('news'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('News'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof news_service_1.NewsService !== "undefined" && news_service_1.NewsService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object, typeof (_c = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _c : Object, typeof (_d = typeof categories_service_1.CategoriesService // private mailService: MailService
         !== "undefined" && categories_service_1.CategoriesService // private mailService: MailService
        ) === "function" ? _d : Object])
], NewsController);
exports.NewsController = NewsController;


/***/ }),

/***/ "./src/app/news/news.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const typeorm_1 = __webpack_require__("typeorm");
const categories_entity_1 = __webpack_require__("./src/app/categories/categories.entity.ts");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
let NewsEntity = class NewsEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, swagger_1.ApiProperty)({ example: 'News id', description: 'News id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof typeorm_1.ObjectID !== "undefined" && typeorm_1.ObjectID) === "function" ? _a : Object)
], NewsEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({ example: 'News title', description: 'News title' }),
    tslib_1.__metadata("design:type", String)
], NewsEntity.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({ example: 'News description', description: 'News description' }),
    tslib_1.__metadata("design:type", String)
], NewsEntity.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'News cover', description: 'News cover' }),
    tslib_1.__metadata("design:type", String)
], NewsEntity.prototype, "cover", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(() => categories_entity_1.CategoriesEntity),
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.CategoriesEntity, (category) => category.news),
    (0, swagger_1.ApiProperty)({
        example: 'Entity CategoriesEntity',
        description: 'Entity CategoriesEntity',
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof categories_entity_1.CategoriesEntity !== "undefined" && categories_entity_1.CategoriesEntity) === "function" ? _b : Object)
], NewsEntity.prototype, "category", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (user) => user.news),
    tslib_1.__metadata("design:type", typeof (_c = typeof users_entity_1.UsersEntity !== "undefined" && users_entity_1.UsersEntity) === "function" ? _c : Object)
], NewsEntity.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentsEntity, (comments) => comments.news),
    (0, swagger_1.ApiProperty)({
        example: 'Array entities CommentsEntity',
        description: 'Array entities CommentsEntity',
    }),
    tslib_1.__metadata("design:type", Array)
], NewsEntity.prototype, "comments", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date create news',
    }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], NewsEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date update news',
    }),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], NewsEntity.prototype, "updatedAt", void 0);
NewsEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('news')
], NewsEntity);
exports.NewsEntity = NewsEntity;


/***/ }),

/***/ "./src/app/news/news.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const news_controller_1 = __webpack_require__("./src/app/news/news.controller.ts");
const news_service_1 = __webpack_require__("./src/app/news/news.service.ts");
const comments_module_1 = __webpack_require__("./src/app/news/comments/comments.module.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
const users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
const mail_module_1 = __webpack_require__("./src/app/mail/mail.module.ts");
const categories_module_1 = __webpack_require__("./src/app/categories/categories.module.ts");
let NewsModule = class NewsModule {
};
NewsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [news_controller_1.NewsController],
        providers: [news_service_1.NewsService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([news_entity_1.NewsEntity]),
            comments_module_1.CommentsModule,
            mail_module_1.MailModule,
            users_module_1.UsersModule,
            categories_module_1.CategoriesModule,
        ],
        exports: [news_service_1.NewsService],
    })
], NewsModule);
exports.NewsModule = NewsModule;


/***/ }),

/***/ "./src/app/news/news.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
let NewsService = class NewsService {
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    create(news) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.newsRepository.save(news);
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.newsRepository.find();
            return { news: data };
        });
    }
    edit(news, idNews) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.newsRepository.update(idNews, news);
            return data;
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('id:', id);
            const data = yield this.newsRepository.findOneById(id);
            console.log('data:', data);
            return data;
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _news = yield this.findById(id);
            if (_news) {
                yield this.newsRepository.remove(_news);
                return true;
            }
            return false;
        });
    }
};
NewsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(news_entity_1.NewsEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], NewsService);
exports.NewsService = NewsService;


/***/ }),

/***/ "./src/app/users/dto/user-create.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreateDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
const role_enum_1 = __webpack_require__("./src/app/auth/role/role.enum.ts");
class UserCreateDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'User first name', description: 'User first name' }),
    tslib_1.__metadata("design:type", String)
], UserCreateDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'User last name',
        description: 'User last name',
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        example: 'User email',
        description: 'User email',
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'User password',
        description: 'User password',
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'User role',
        description: 'User role',
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof role_enum_1.Role !== "undefined" && role_enum_1.Role) === "function" ? _a : Object)
], UserCreateDto.prototype, "role", void 0);
exports.UserCreateDto = UserCreateDto;


/***/ }),

/***/ "./src/app/users/profile/profile.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const common_2 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const multer_1 = __webpack_require__("multer");
const helperFileLoaderUser_1 = __webpack_require__("./src/app/utils/helperFileLoaderUser.ts");
const imageFileFilter_1 = __webpack_require__("./src/app/utils/imageFileFilter.ts");
const user_create_dto_1 = __webpack_require__("./src/app/users/dto/user-create.dto.ts");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const crypto_1 = __webpack_require__("./src/app/utils/crypto.ts");
const jwt_auth_guard_1 = __webpack_require__("./src/app/auth/jwt-auth.guard.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const USER_PATH = '/user-static/';
const usersHelperFileLoader = new helperFileLoaderUser_1.HelperFileLoaderUser();
let ProfileController = class ProfileController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    edit(req, user, avatar) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const _userEntity = new users_entity_1.UsersEntity();
                if (avatar === null || avatar === void 0 ? void 0 : avatar.filename) {
                    _userEntity.avatar = USER_PATH + avatar.filename;
                }
                _userEntity.firstName = user.firstName;
                _userEntity.lastName = user.lastName;
                _userEntity.email = user.email;
                _userEntity.password = yield (0, crypto_1.hash)(user.password);
                const result = yield this.usersService.edit(_userEntity, req.user.id);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('edit'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
        storage: (0, multer_1.diskStorage)({
            destination: usersHelperFileLoader.destinationPath,
            filename: usersHelperFileLoader.customFileName,
        }),
        fileFilter: imageFileFilter_1.imageFileFilter,
    })),
    (0, swagger_1.ApiOperation)({ summary: 'User profile edit' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User profile successfully edit',
        type: users_entity_1.UsersEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_b = typeof user_create_dto_1.UserCreateDto !== "undefined" && user_create_dto_1.UserCreateDto) === "function" ? _b : Object, typeof (_d = typeof Express !== "undefined" && (_c = Express.Multer) !== void 0 && _c.File) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "edit", null);
ProfileController = tslib_1.__decorate([
    (0, common_2.Controller)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Profile'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], ProfileController);
exports.ProfileController = ProfileController;


/***/ }),

/***/ "./src/app/users/profile/profile.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
const profile_controller_1 = __webpack_require__("./src/app/users/profile/profile.controller.ts");
let ProfileModule = class ProfileModule {
};
ProfileModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [profile_controller_1.ProfileController],
        imports: [(0, common_1.forwardRef)(() => users_module_1.UsersModule)],
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./src/app/users/users.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const user_create_dto_1 = __webpack_require__("./src/app/users/dto/user-create.dto.ts");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const multer_1 = __webpack_require__("multer");
const helperFileLoaderUser_1 = __webpack_require__("./src/app/utils/helperFileLoaderUser.ts");
const imageFileFilter_1 = __webpack_require__("./src/app/utils/imageFileFilter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const USER_PATH = '/user-static/';
const usersHelperFileLoader = new helperFileLoaderUser_1.HelperFileLoaderUser();
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
        usersHelperFileLoader.path = USER_PATH;
    }
    create(user, avatar) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let avatarPath = null;
                if (avatar === null || avatar === void 0 ? void 0 : avatar.filename) {
                    avatarPath = USER_PATH + avatar.filename;
                }
                return this.usersService.create(user, avatarPath ? avatarPath : null);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getLogin(req) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cookies = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.user) ? yield req.cookies : null;
            return { cookies };
        });
    }
    getRegister() {
        return;
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
        storage: (0, multer_1.diskStorage)({
            destination: usersHelperFileLoader.destinationPath,
            filename: usersHelperFileLoader.customFileName,
        }),
        fileFilter: imageFileFilter_1.imageFileFilter,
    })),
    (0, swagger_1.ApiOperation)({ summary: 'User creation' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User successfully created',
        type: users_entity_1.UsersEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_create_dto_1.UserCreateDto !== "undefined" && user_create_dto_1.UserCreateDto) === "function" ? _b : Object, typeof (_d = typeof Express !== "undefined" && (_c = Express.Multer) !== void 0 && _c.File) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user login' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User successfully login',
        type: users_entity_1.UsersEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized Error',
        type: Error,
    }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getLogin", null);
tslib_1.__decorate([
    (0, common_1.Get)('register'),
    (0, common_1.Render)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user register' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User successfully registered',
        type: users_entity_1.UsersEntity,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        type: Error,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getRegister", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/app/users/users.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
const role_enum_1 = __webpack_require__("./src/app/auth/role/role.enum.ts");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let UsersEntity = class UsersEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, swagger_1.ApiProperty)({ example: 'User id', description: 'User id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof typeorm_1.ObjectID !== "undefined" && typeorm_1.ObjectID) === "function" ? _a : Object)
], UsersEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({ example: 'User first name', description: 'User first name' }),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({
        example: 'User last name',
        description: 'User last name',
    }),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({
        example: 'User email',
        description: 'User email',
    }),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)({
        example: 'User password',
        description: 'User password',
    }),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    (0, class_validator_1.IsEnum)(role_enum_1.Role),
    (0, swagger_1.ApiProperty)({
        example: 'User role',
        description: 'User role',
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof role_enum_1.Role !== "undefined" && role_enum_1.Role) === "function" ? _b : Object)
], UsersEntity.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => news_entity_1.NewsEntity, (news) => news.user),
    tslib_1.__metadata("design:type", Array)
], UsersEntity.prototype, "news", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentsEntity, (comments) => comments.user),
    tslib_1.__metadata("design:type", Array)
], UsersEntity.prototype, "comments", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    (0, swagger_1.ApiProperty)({
        example: 'User avatar',
        description: 'User avatar',
    }),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date create user',
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UsersEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        description: 'Date update user',
    }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UsersEntity.prototype, "updatedAt", void 0);
UsersEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('users')
], UsersEntity);
exports.UsersEntity = UsersEntity;


/***/ }),

/***/ "./src/app/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const users_service_1 = __webpack_require__("./src/app/users/users.service.ts");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const auth_module_1 = __webpack_require__("./src/app/auth/auth.module.ts");
const users_controller_1 = __webpack_require__("./src/app/users/users.controller.ts");
const profile_module_1 = __webpack_require__("./src/app/users/profile/profile.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            profile_module_1.ProfileModule,
        ],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/app/users/users.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
const role_enum_1 = __webpack_require__("./src/app/auth/role/role.enum.ts");
const crypto_1 = __webpack_require__("./src/utils/crypto.ts");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(user, avatarPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userEntity = new users_entity_1.UsersEntity();
            userEntity.firstName = user.firstName;
            userEntity.lastName = user.lastName;
            userEntity.email = user.email;
            userEntity.password = yield (0, crypto_1.hash)(user.password);
            userEntity.roles = user.role;
            userEntity.avatar = avatarPath ? avatarPath : null;
            return yield this.usersRepository.save(userEntity);
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.usersRepository.findOneById(id);
            return data;
        });
    }
    findByEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.usersRepository.find({
                where: {
                    email: email,
                },
            });
            return data[0];
        });
    }
    setModerator(idUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _user = yield this.findById(idUser);
            if (!_user) {
                throw new common_1.UnauthorizedException();
            }
            _user.roles = role_enum_1.Role.Moderator;
            return this.usersRepository.save(_user);
        });
    }
    edit(user, idUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersRepository.update(idUser, user);
            return result;
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.usersRepository.find();
            return data;
        });
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./src/app/utils/crypto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compare = exports.hash = void 0;
const tslib_1 = __webpack_require__("tslib");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
// хэширование строки
function hash(text) {
    return new Promise((resolve) => {
        bcrypt.hash(text, 10, (_err, hash) => {
            resolve(hash);
        });
    });
}
exports.hash = hash;
// метод сравнения захэшированной строки с незахэшированной
function compare(text, hash) {
    return new Promise((resolve) => {
        bcrypt.compare(text, hash, (_err, result) => {
            resolve(result);
        });
    });
}
exports.compare = compare;


/***/ }),

/***/ "./src/app/utils/helperFileLoaderNews.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelperFileLoaderNews = void 0;
const uuid_1 = __webpack_require__("uuid");
const publicPath = './public';
let path = publicPath;
class HelperFileLoaderNews {
    set path(_path) {
        path = publicPath + _path;
    }
    customFileName(req, file, cb) {
        const originalName = file.originalname.split('.');
        const fileExtension = originalName[originalName.length - 1];
        cb(null, `${(0, uuid_1.v4)()}.${fileExtension}`);
    }
    destinationPath(req, file, cb) {
        cb(null, path);
    }
}
exports.HelperFileLoaderNews = HelperFileLoaderNews;


/***/ }),

/***/ "./src/app/utils/helperFileLoaderUser.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelperFileLoaderUser = void 0;
const uuid_1 = __webpack_require__("uuid");
const publicPath = './public';
let path = publicPath;
class HelperFileLoaderUser {
    set path(_path) {
        path = publicPath + _path;
    }
    customFileName(req, file, cb) {
        const originalName = file.originalname.split('.');
        const fileExtension = originalName[originalName.length - 1];
        cb(null, `${(0, uuid_1.v4)()}.${fileExtension}`);
    }
    destinationPath(req, file, cb) {
        cb(null, path);
    }
}
exports.HelperFileLoaderUser = HelperFileLoaderUser;


/***/ }),

/***/ "./src/app/utils/imageFileFilter.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageFileFilter = void 0;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return callback(new Error('Only image files are allowed! Image files allowed such as png, jpeg, jpg, gif'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;


/***/ }),

/***/ "./src/pgConfigService.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PgConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const categories_entity_1 = __webpack_require__("./src/app/categories/categories.entity.ts");
const comments_entity_1 = __webpack_require__("./src/app/news/comments/comments.entity.ts");
const news_entity_1 = __webpack_require__("./src/app/news/news.entity.ts");
const users_entity_1 = __webpack_require__("./src/app/users/users.entity.ts");
let PgConfigService = class PgConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'mongodb',
            database: 'news_blog',
            synchronize: true,
            logging: ['query', 'error'],
            entities: [users_entity_1.UsersEntity, news_entity_1.NewsEntity, comments_entity_1.CommentsEntity, categories_entity_1.CategoriesEntity],
            migrations: [],
            subscribers: [],
        };
    }
};
PgConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PgConfigService);
exports.PgConfigService = PgConfigService;


/***/ }),

/***/ "./src/utils/crypto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compare = exports.hash = void 0;
const tslib_1 = __webpack_require__("tslib");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
// хэширование строки
function hash(text) {
    return new Promise((resolve) => {
        bcrypt.hash(text, 10, (_err, hash) => {
            resolve(hash);
        });
    });
}
exports.hash = hash;
// метод сравнения захэшированной строки с незахэшированной
function compare(text, hash) {
    return new Promise((resolve) => {
        bcrypt.compare(text, hash, (_err, result) => {
            resolve(result);
        });
    });
}
exports.compare = compare;


/***/ }),

/***/ "@nestjs-modules/mailer":
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/common/pipes":
/***/ ((module) => {

module.exports = require("@nestjs/common/pipes");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/event-emitter":
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjs/websockets":
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cache-manager-redis-store":
/***/ ((module) => {

module.exports = require("cache-manager-redis-store");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "ioredis":
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            cors: true,
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle('gb-demo-app')
            .setDescription('The API description gb-demo-app')
            .setVersion('1.0')
            .addTag('gb-demo-app')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        app.useStaticAssets('./public/');
        const port = process.env.PORT || 3001;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map