import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: '이메일을 입력해야합니다.', })
  @IsEmail({}, { message: '이메일 형식이 아닙니다.', })
  @ApiProperty({ description: '이메일', example: 'nihil_ncunia@naver.com', })
  email: string;

  @IsNotEmpty({ message: '아이디를 입력해야합니다.', })
  @ApiProperty({ description: '아이디', example: 'NIHILncunia', })
  userId: string;

  @IsNotEmpty({ message: '이름을 입력해야합니다.', })
  @ApiProperty({ description: '이름', example: '김태현', })
  userName: string;

  @IsNotEmpty({ message: '비밀번호를 입력해야합니다.', })
  @ApiProperty({ description: '비밀번호', example: '1234567', })
  password: string;

  @IsNotEmpty({ message: '핸드폰 번호를 입력해야합니다.', })
  @ApiProperty({ description: '핸드폰 번호', example: '01000000000', })
  phone: string;

  @IsNotEmpty({ message: '생년월일을 입력해야합니다.', })
  @ApiProperty({ description: '생년월일', example: '1993-11-03', })
  birthday: string;
}
