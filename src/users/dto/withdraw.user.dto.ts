import { ApiProperty } from '@nestjs/swagger';

export class WithdrawUserDTO {
  @ApiProperty({ type: Number, description: '유저 식별자', })
  userId: number;

  @ApiProperty({ type: String, description: '탈퇴사유', })
  text: string;
}
