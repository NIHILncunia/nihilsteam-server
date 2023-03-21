import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Article } from './article';
import { ArticleComment } from './article_comment';
import { Cart } from './cart';
import { GameComment } from './game_comment';
import { Point } from './point';
import { Refund } from './refund';
import { UserAuth } from './user_auth';
import { UserOrder } from './user_order';
import { UserToken } from './user_token';
import { Withdraw } from './withdraw';

export class User {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: String, })
	userId: string = undefined;

  @ApiProperty({ type: String, })
	userName: string = undefined;

  @ApiProperty({ type: String, })
	role = 'user';

  @ApiProperty({ type: String, })
	email: string = undefined;

  @ApiPropertyOptional({ type: String, })
	phone?: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	birthday?: Date = undefined;

  @ApiProperty({ type: Number, })
	userPoint: number = undefined;

  @ApiProperty({ type: String, })
	status = '활동계정';

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;

  @ApiProperty({ isArray: true, type: () => Article, })
	article?: Article[] = undefined;

  @ApiProperty({ isArray: true, type: () => ArticleComment, })
	article_comment?: ArticleComment[] = undefined;

  @ApiProperty({ isArray: true, type: () => Cart, })
	cart?: Cart[] = undefined;

  @ApiProperty({ isArray: true, type: () => GameComment, })
	game_comment?: GameComment[] = undefined;

  @ApiProperty({ isArray: true, type: () => Point, })
	point?: Point[] = undefined;

  @ApiProperty({ isArray: true, type: () => Refund, })
	refund?: Refund[] = undefined;

  @ApiProperty({ isArray: true, type: () => UserAuth, })
	user_auth?: UserAuth[] = undefined;

  @ApiProperty({ isArray: true, type: () => UserOrder, })
	user_order?: UserOrder[] = undefined;

  @ApiProperty({ isArray: true, type: () => UserToken, })
	user_token?: UserToken[] = undefined;

  @ApiProperty({ isArray: true, type: () => Withdraw, })
	Withdraw?: Withdraw[] = undefined;
}
