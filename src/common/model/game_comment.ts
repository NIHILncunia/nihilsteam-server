import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';
import { Game } from './game';

export class GameComment {
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

  @ApiProperty({ type: String, })
	comment: string = undefined;

  @ApiPropertyOptional({ type: Number, })
	score?: number = undefined;

  @ApiProperty({ type: Number, })
	up: number = undefined;

  @ApiProperty({ type: Number, })
	down: number = undefined;

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;
}
