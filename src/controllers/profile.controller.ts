import { Controller, Get, Put, Body } from '@nestjs/common';
import { LoginDto } from 'src/models/login-dto';
import {DbService} from "../services/db.service";
import {UpdateProfileDto} from "../models/update-profile-dto";

@Controller('profile')
export class ProfileController {
    constructor(private readonly dbService: DbService) {}

    @Get('')
    get() {
        return { message: 'Firebase Auth is initialized' };
    }

    @Put('')
    edit(@Body() request: UpdateProfileDto){
        return { message: 'Login endpoint hit'};
    }
    
}