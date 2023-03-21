/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable max-classes-per-file */
import { Article as _Article } from './article';
import { ArticleComment as _ArticleComment } from './article_comment';
import { ArticleImage as _ArticleImage } from './article_image';
import { Cart as _Cart } from './cart';
import { Game as _Game } from './game';
import { GameComment as _GameComment } from './game_comment';
import { OrderDetail as _OrderDetail } from './order_detail';
import { Point as _Point } from './point';
import { Refund as _Refund } from './refund';
import { User as _User } from './user';
import { UserAuth as _UserAuth } from './user_auth';
import { UserOrder as _UserOrder } from './user_order';
import { UserToken as _UserToken } from './user_token';
import { Withdraw as _Withdraw } from './withdraw';

export namespace PrismaModel {
  export class Article extends _Article {}
  export class ArticleComment extends _ArticleComment {}
  export class ArticleImage extends _ArticleImage {}
  export class Cart extends _Cart {}
  export class Game extends _Game {}
  export class GameComment extends _GameComment {}
  export class OrderDetail extends _OrderDetail {}
  export class Point extends _Point {}
  export class Refund extends _Refund {}
  export class User extends _User {}
  export class UserAuth extends _UserAuth {}
  export class UserOrder extends _UserOrder {}
  export class UserToken extends _UserToken {}
  export class Withdraw extends _Withdraw {}

  export const extraModels = [
    Article,
    ArticleComment,
    ArticleImage,
    Cart,
    Game,
    GameComment,
    OrderDetail,
    Point,
    Refund,
    User,
    UserAuth,
    UserOrder,
    UserToken,
    Withdraw,
  ];
}
