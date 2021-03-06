import { DepositCashAccountDto } from '../../../dto';
import { Deposit } from '../../../domain/entities/Deposit';
import { IUseCase } from '../interfaces/IUseCase';
import { IDepositCash } from '../../../domain/interfaces/entities/IDepositCash';
import { IDepositCashRepository } from '../../../domain/interfaces/repositories/IDepositCashRepository';
import { Result } from '../../../domain/aggregate-root/Result';

export class DepositCashUseCase implements IUseCase<DepositCashAccountDto, IDepositCash>{
 execute = async (depositDto:IDepositCash, repository: IDepositCashRepository): Promise<Result<IDepositCash>> => {  
  const depositOrError = Deposit.create(depositDto);
  if (depositOrError.isFailure) {
   return Result.fail<Deposit>(depositOrError.error.toString());
  }
  return await repository.depositCashOnAccount(depositOrError.getValue());  
 }
}