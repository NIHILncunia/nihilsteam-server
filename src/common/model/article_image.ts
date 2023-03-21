import { ApiProperty } from '@nestjs/swagger';
import { Article } from './article';

export class ArticleImage {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => Article, })
	article: Article = undefined;

  @ApiProperty({ type: Number, })
	articleId: number = undefined;

  @ApiProperty({ type: String, })
	imagePath: string = undefined;

  @ApiProperty({ type: String, })
	imageExt: string = undefined;

  @ApiProperty({ type: String, })
	imageSize: string = undefined;
}
