import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Cart } from './cart';
import { GameComment } from './game_comment';
import { OrderDetail } from './order_detail';
import { Refund } from './refund';

export class Game {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: String, })
	thumbnail: string = undefined;

  @ApiProperty({ type: String, })
	title: string = undefined;

  @ApiProperty({ type: String, })
	developer: string = undefined;

  @ApiProperty({ type: String, })
	publisher: string = undefined;

  @ApiProperty({ type: String, })
	genre: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	releaseAt?: Date = undefined;

  @ApiPropertyOptional({ type: Number, })
	score?: number = undefined;

  @ApiProperty({ type: String, })
	rating: string = undefined;

  @ApiProperty({ type: Number, })
	price: number = undefined;

  @ApiPropertyOptional({ type: Number, })
	discount?: number = undefined;

  @ApiProperty({ type: String, })
	description: string = undefined;

  @ApiProperty({ type: String, })
	language: string = undefined;

  @ApiProperty({ type: String, })
	system_requirements: string = undefined;

  @ApiProperty({ isArray: true, type: () => Cart, })
	cart: Cart[] = undefined;

  @ApiProperty({ isArray: true, type: () => GameComment, })
	game_comment: GameComment[] = undefined;

  @ApiProperty({ isArray: true, type: () => OrderDetail, })
	order_detail: OrderDetail[] = undefined;

  @ApiProperty({ isArray: true, type: () => Refund, })
	refund: Refund[] = undefined;
}
