import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sum(NamSinh: string) {
    let sum = 0;
    let i = 0;
    while (i < NamSinh.length) {
      sum += (+NamSinh[i]);
      i++;
    }
    return sum;
  }
  checkCung(NamSinh: string, GioiTinh: string) {
    let sum: number = this.sum(NamSinh)
    let num = sum % 9
    if (num === 0) {
      num = 9
    }

    if (GioiTinh === "Nam") {
      switch (num) {
        case 1: return "Khảm"
        case 2: return "Ly"
        case 3: return "Cấn"
        case 4: return "Đoài"
        case 5: return "Càn"
        case 6: return "Khôn"
        case 7: return "Tốn"
        case 8: return "Chấn"
        case 9: return "Khôn"
      }
    }
    switch (num) {
      case 1: return "Cấn"
      case 2: return "Càn"
      case 3: return "Đoài"
      case 4: return "Cấn"
      case 5: return "Ly"
      case 6: return "Khảm"
      case 7: return "Khôn"
      case 8: return "Chấn"
      case 9: return "Tốn"
    }
  }
  checkHangCang(NamSinh: string) {
    const num = +NamSinh[NamSinh.length - 1]
    switch (num) {
      case 0: return "Canh"
      case 1: return "Tân"
      case 2: return "Nhâm"
      case 3: return "Quý"
      case 4: return "Giáp"
      case 5: return "Ất"
      case 6: return "Bính"
      case 7: return "Đinh"
      case 8: return "Mậu"
      case 9: return "Kỷ"
    }
  }
  CheckHangChi(NamSinh: string) {
    const ns = +(NamSinh[NamSinh.length - 2].toString() + NamSinh[NamSinh.length - 1].toString())
    const num = ns % 12
    switch (num) {
      case 0: return "Tý"
      case 1: return "Sửu"
      case 2: return "Dần"
      case 3: return "Mẹo"
      case 4: return "Thìn"
      case 5: return "Tỵ"
      case 6: return "Ngọ"
      case 7: return "Mùi"
      case 8: return "Thân"
      case 9: return "Dậu"
      case 10: return "Tuất"
      case 11: return "Hợi"
    }
  }
  CheckThienCan(HangCan: string) {
    if (HangCan === "Giáp" || HangCan === "Ất") {
      return 1
    }
    if (HangCan === "Bính" || HangCan === "Đinh") {
      return 2
    }
    if (HangCan === "Mậu" || HangCan === "Kỷ") {
      return 3
    }
    if (HangCan === "Canh" || HangCan === "Tân") {
      return 4
    }
    if (HangCan === "Nhâm" || HangCan === "Quý") {
      return 5
    }
  }
  CheckDiaChi(HangChi:string)
  {
    if(HangChi === "Tý" ||HangChi === "Sửu"||HangChi ==="Ngọ"||HangChi==="Mùi")
    {
      return 0
    }
    if(HangChi === "Dần" ||HangChi === "Mẹo"||HangChi ==="Thân"||HangChi==="Dậu")
    {
      return 1
    }
    if(HangChi === "Thìn" ||HangChi === "Tỵ"||HangChi ==="Tuất"||HangChi==="Hợi")
    {
      return 2
    }
  }
  CheckMenh(can:number,chi:number)
  {
    let num = can + chi
    if(num > 5)
    {
      num-=5
    }
    switch (num) {
      case 1: return "Kim"
      case 2: return "Thủy"
      case 3: return "Hỏa"
      case 4: return "Thổ"
      case 5: return "Mộc"
    } 
  }
  ChuyenThienCan(num:number)
  {
    switch (num)
    {
      case 1: return "Giáp, Ất  (1)"
      case 2: return "Bính, Đinh (2)"
      case 3: return "Mậu, Kỷ (3)"
      case 4: return "Canh, Tân (4)"
      case 5: return "Nhâm, Quý (5)"
    }
  }
  ChuyenDiaChi(num:number)
  {
    switch (num)
    {
      case 0: return "Tý, Sửu, Ngọ, Mùi (0)"
      case 1: return "Dần, Mẹo,Thân, Dậu (1)"
      case 2: return "Thìn, Tỵ, Tuất, Hợi (2)"
      
    }
  }


}
