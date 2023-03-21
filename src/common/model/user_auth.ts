import { ApiProperty } from '@nestjs/swagger';
import { User } from './user';

export class UserAuth {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: String, })
	hashedPassword: string = undefined;
}
