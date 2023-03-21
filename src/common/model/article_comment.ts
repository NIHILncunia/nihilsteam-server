import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Article } from './article';
import { User } from './user';

export class ArticleComment {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => Article, })
	article: Article = undefined;

  @ApiProperty({ type: Number, })
	articleId: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: String, })
	comment: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;
}
