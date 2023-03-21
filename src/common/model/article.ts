import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';
import { ArticleComment } from './article_comment';
import { ArticleImage } from './article_image';

export class Article {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: String, })
	title: string = undefined;

  @ApiProperty({ type: String, })
	content: string = undefined;

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;

  @ApiProperty({ isArray: true, type: () => ArticleComment, })
	article_comment: ArticleComment[] = undefined;

  @ApiProperty({ isArray: true, type: () => ArticleImage, })
	article_image: ArticleImage[] = undefined;
}
