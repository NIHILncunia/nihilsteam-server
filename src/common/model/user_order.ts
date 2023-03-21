import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user';
import { OrderDetail } from './order_detail';
import { Refund } from './refund';

export class UserOrder {
  @ApiProperty({ type: Number, })
	id: number = undefined;

  @ApiProperty({ type: () => User, })
	user: User = undefined;

  @ApiProperty({ type: Number, })
	userId: number = undefined;

  @ApiProperty({ type: Number, })
	totalPrice: number = undefined;

  @ApiPropertyOptional({ type: Number, })
	usePoint?: number = undefined;

  @ApiProperty({ type: String, })
	status = '결제완료';

  @ApiPropertyOptional({ type: Date, })
	createdAt?: Date = undefined;

  @ApiPropertyOptional({ type: Date, })
	updatedAt?: Date = undefined;

  @ApiProperty({ isArray: true, type: () => OrderDetail, })
	order_detail: OrderDetail[] = undefined;

  @ApiProperty({ isArray: true, type: () => Refund, })
	refund: Refund[] = undefined;
}
