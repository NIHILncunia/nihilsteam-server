import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';

export class Withdraw {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: String, })
	text: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;
}
