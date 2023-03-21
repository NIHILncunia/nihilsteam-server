import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ description: '아이디', nullable: true, })
  userId?: string;

  @ApiProperty({ description: '이름', nullable: true, })
  userName?: string;

  @ApiProperty({ description: '핸드폰', nullable: true, })
  phone?: string;

  @ApiProperty({ description: '생년월일', nullable: true, })
  birthday?: string;

  @ApiProperty({ description: '권한', nullable: true, })
  role?: string;

  @ApiProperty({ description: '상태', nullable: true, })
  status?: string;

  @ApiProperty({ description: '비밀번호', nullable: true, })
  password?: string;
}
