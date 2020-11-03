import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateAccountDto } from 'src/dto/create-account.dto';
import { AccountService } from 'src/infra/orms/mongo/repositories/repository/account/account.service';

@Controller('account')
export class AccountController {
 constructor(private accountService: AccountService) { }
 
 @Post()
 createNewAccount(@Body(ValidationPipe) createAccountDto: CreateAccountDto) {
  this.accountService.createNewAccount(createAccountDto);
 }
}
