import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';

export class UserToken {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiPropertyOptional({ type: String, })
	hashedRefreshToken?: string = undefined;
}
