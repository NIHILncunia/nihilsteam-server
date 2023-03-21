import { ApiProperty } from '@nestjs/swagger';
import { UserOrder } from './user_order';
import { Game } from './game';

export class OrderDetail {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => UserOrder, })
	user_order: UserOrder = undefined;

  @ApiProperty({ type: Number, })
	orderId: number = undefined;

  @ApiProperty({ type: () => Game, })
	game: Game = undefined;

  @ApiProperty({ type: Number, })
	gameId: number = undefined;

  @ApiProperty({ type: Number, })
	price: number = undefined;

  @ApiProperty({ type: String, })
	status = '결제완료';
}
