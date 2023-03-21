import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';

export class Point {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiPropertyOptional({ type: Number, })
	increase?: number = undefined;

  @ApiPropertyOptional({ type: Number, })
	decrease?: number = undefined;

  @ApiPropertyOptional({ type: String, })
	message?: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;
}
