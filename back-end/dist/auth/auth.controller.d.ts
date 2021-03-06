import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create.user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: CreateUserDto): Promise<any>;
    signUp(user: CreateUserDto): Promise<any>;
    getDataUser(token: string): Promise<{
        email: any;
        sub: any;
        newIat: Date;
        newExp: Date;
    }>;
}
