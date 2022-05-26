import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("getquestion")
  async getQuestion() {
    return await this.appService.getQuestion();
  }
  @Post("submit")
  async postSubmit(
    @Body("data") data : string,
    
  ){
     return await this.appService.postSubmit(data) 
  }
  
  @Get("leaderBoard")
  async getleaderBoard() {
    return await this.appService.getleaderBoard();
  }
}
