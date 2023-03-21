import { ApiProperty } from '@nestjs/swagger';
import { User } from './user';
import { Game } from './game';

export class Cart {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: () => Game, })
	game: Game = undefined;

  @ApiProperty({ type: Number, })
	gameId: number = undefined;

  @ApiProperty({ type: Number, })
	price: number = undefined;
}
