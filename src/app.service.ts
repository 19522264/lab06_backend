import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService){}
  async getQuestion() {
    const randomlessthan2 = Math.floor(Math.random() * 2) // for prince and princess
    const randomlessthan3 = Math.floor(Math.random() * 3)
    //console.log(randomlessthan2, randomlessthan3)
    const knight =  await this.prismaService.knight.findFirst({
      skip: randomlessthan3
    })
    const calvinothecook = await this.prismaService.calvinothecook.findFirst({
      skip: randomlessthan3
    })
    const trustedservant = await this.prismaService.trustedservant.findFirst({
      skip: randomlessthan3
    })
    const prince = await this.prismaService.prince.findFirst({
      skip: randomlessthan2
    })
    const princesszizola = await this.prismaService.princesszizola.findFirst({
      skip: randomlessthan2
    })
    const alchemist = await this.prismaService.alchemist.findFirst({
      skip: randomlessthan3
    })
    const queen = await this.prismaService.queen.findFirst({
      skip: randomlessthan3
    }) 
    const prisoner = await this.prismaService.prisoner.findFirst({
      skip: randomlessthan3
    })
    const merchant = await this.prismaService.merchant.findFirst({
      skip: randomlessthan3
    })
    const farmer = await this.prismaService.farmer.findFirst({
      skip: randomlessthan3
    })
    const questions = {
      qMaxPoint: 8719,
      qLength: 10,
      characters: []
    }
    questions.characters.push({
      ...knight,
      contentUrl: 'knight.png',
      name: "Knight"
    })
    questions.characters.push({
      ...calvinothecook,
      contentUrl: 'the-cook.png',
      name: "Calvino the cook"
    })
    questions.characters.push({
      ...trustedservant,
      contentUrl:  "servant.png",
      name : "Trusted servant"
    })
    questions.characters.push({
      ...prince,
      contentUrl:  "prince.png",
      name : "Prince"
    })
    questions.characters.push({
      ...princesszizola,
      contentUrl:  "princess.png",
      name : "Prince"
    })
    questions.characters.push({
      ...alchemist,
      contentUrl:  "achemist.png",
      name : "Prince"
    })
    questions.characters.push({
      ...queen, 
      contentUrl: "queen.png",
      name: "Queen"
    })
    questions.characters.push({
      ...prisoner,
      contentUrl: "prisoner.png",
      name: "Prisoner"
    })
    questions.characters.push({
      ...merchant,
      contentUrl: "merchant.png",
      name: "Merchant"
    })
    questions.characters.push({
      ...farmer,
      contentUrl: "farmer.png",
      name: "Farmer"
    })
    return questions
  }
  async postSubmit(data : string){
    const parsed = JSON.parse(data)
    const result = await this.prismaService.user.create({
      data:{
        name: parsed.user,
        score: parsed.score
      }
    })
    if (result){
      return "ok"
    }
    return "fail"
  }
  async getleaderBoard(){
    const result = await this.prismaService.user.findMany({
      orderBy: {
        score: 'desc'
      }
    })
    let leaders = []
    let rank = 1;
    for(const index of result){
      
      leaders.push({
        ...index,
        rank
      })
      rank += 1
    }
    return leaders
  }
}
