import {
  Body, Controller, Get, Post, Res, UseGuards
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBody, ApiOperation, ApiResponse, ApiTags
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '@/users/dto';
import { GetUser } from './get.user.decorator';
import {
  JwtAuthGuard, JwtRefreshAuthGuard, LocalAdminAuthGuard, LocalAuthGuard
} from './guards';
import { Public } from './public.decorator';
import { UserResDTO } from './dto';
import { ErrorResponseDTO } from '@/common/dto/error.response.dto';
import { HttpErrorDTO } from '@/common/dto';
import { User } from '@/common/model/user';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  @ApiOperation({
    summary: '회원가입',
    description: '새로운 유저를 생성합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserResDTO,
  })
  @ApiResponse({
    status: 400,
    description: '에러',
    type: ErrorResponseDTO,
  })
  async signUp(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.signUp(createUserDTO);
  }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: '로그인',
    description: '로그인에 성공하면 토큰이 발급됩니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserResDTO,
  })
  @ApiResponse({
    status: 400,
    description: '아이디 없음',
    type: HttpErrorDTO,
  })
  @ApiResponse({
    status: 401,
    description: '비밀번호 불일치',
    type: HttpErrorDTO,
  })
  @ApiBody({
    schema: {
      properties: {
        email: { type: 'string', example: 'nihil_ncunia@naver.com', },
        password: { type: 'string', example: '1234567', },
      },
    },
  })
  async signIn(
    @GetUser() user: User,
    @Res({ passthrough: true, }) res: Response
  ) {
    return this.authService.signIn(user, res);
  }

  @Post('/admin/signin')
  @UseGuards(LocalAdminAuthGuard)
  @ApiOperation({
    summary: '관리자 로그인',
    description: '관리자만 로그인 할 수 있습니다. 성공하면 토큰이 발급됩니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserResDTO,
  })
  @ApiResponse({
    status: 400,
    description: '아이디 없음',
    type: HttpErrorDTO,
  })
  @ApiResponse({
    status: 401,
    description: '비밀번호 불일치 혹은 관리자 계정 아님',
    type: HttpErrorDTO,
  })
  @ApiBody({
    schema: {
      properties: {
        email: { type: 'string', example: 'nihil_ncunia@naver.com', },
        password: { type: 'string', example: '1234567', },
      },
    },
  })
  async signInAdmin(
    @GetUser() user: User,
    @Res({ passthrough: true, }) res: Response
  ) {
    return this.authService.signIn(user, res);
  }

  @Public()
  @Get('signout')
  @UseGuards(JwtRefreshAuthGuard)
  @ApiOperation({
    summary: '로그아웃',
    description: '로그아웃을 하고 토큰 정보를 지웁니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    schema: {
      properties: {
        message: { type: 'string', },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: '인증 실패',
    type: HttpErrorDTO,
  })
  async signOut(
    @GetUser() user: User,
    @Res({ passthrough: true, }) res: Response
  ) {
    const { accessOption, refreshOption, } = await this.authService.signOutWithTokenClear();

    await this.authService.deleteRefreshToken(user.id);

    res.cookie('Authentication', '', accessOption);
    res.cookie('Refresh', '', refreshOption);

    return {
      message: '로그아웃 성공',
    };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: '사용자 정보 조회',
    description: '로그인한 유저의 정보를 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: User,
  })
  @ApiResponse({
    status: 401,
    description: '인증 실패',
    type: HttpErrorDTO,
  })
  async getMe(@GetUser() user: User) {
    return user;
  }

  @Public()
  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  @ApiOperation({
    summary: '토큰 갱신',
    description: '토큰이 만료되었을 경우 토큰을 재발급',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: User,
  })
  @ApiResponse({
    status: 401,
    description: '인증 실패',
    type: HttpErrorDTO,
  })
  async refresh(
    @GetUser() user: User,
    @Res({ passthrough: true, }) res: Response
  ) {
    const { AccessToken, ...option } = await this.authService.createAccessToken(user);

    res.cookie('Authentication', AccessToken, option);
    return user;
  }
}
