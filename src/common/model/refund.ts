import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';
import { UserOrder } from './user_order';
import { Game } from './game';

export class Refund {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: () => UserOrder, })
	user_order: UserOrder = undefined;

  @ApiProperty({ type: Number, })
	orderId: number = undefined;

  @ApiProperty({ type: () => Game, })
	game: Game = undefined;

  @ApiProperty({ type: Number, })
	gameId: number = undefined;

  @ApiProperty({ type: String, })
	title: string = undefined;

  @ApiProperty({ type: String, })
	content: string = undefined;

  @ApiProperty({ type: String, })
	status = '환불요청';

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;
}
