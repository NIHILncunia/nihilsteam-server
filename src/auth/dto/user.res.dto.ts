import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from '@/common/model/user';

export class UserResDTO {
  @IsNotEmpty()
  @ApiProperty({ description: '메시지', })
  message: string;

  @IsNotEmpty()
  @ApiProperty({ description: '유저 정보', })
  user: User;
}
