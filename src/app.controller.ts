import { Controller, Get, Post, Render, Res, UseGuards, UseFilters, Req, } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('/nguhanh')
  @Render('layout/nguhanh')
  nguhanh() {
    return {data:null}
  }
  @Post('/nguhanh')
  @Render('layout/nguhanh')
  getHome(@Req() request: Request) {
    const data = request.body
    const ns = data.namsinh
    let GioiTinh = data.customRadio
    const Cung = this.appService.checkCung(ns, GioiTinh)
    const HangCan = this.appService.checkHangCang(ns)
    const HangChi = this.appService.CheckHangChi(ns)
    const ThienCang = this.appService.CheckThienCan(HangCan)
    const DiaChi = this.appService.CheckDiaChi(HangChi)
    const Menh = this.appService.CheckMenh(ThienCang, DiaChi)
    return {
      GioiTinh: GioiTinh,
      NamSinh: ns,
      Cung: Cung,
      HangCan: HangCan,
      HangChi: HangChi,
      ThienCan: this.appService.ChuyenThienCan(ThienCang),
      DiaChi: this.appService.ChuyenDiaChi(DiaChi),
      Menh: Menh
    }
  }
}
