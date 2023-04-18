import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ContactDetailFormContext,
  ContactDetailFormProps,
} from './forms/ContactDetails';
import { TsxViewsService } from 'nestjs-tsx-views';

@Controller()
export class AppController {
  constructor(private readonly appService: TsxViewsService) {}
  //constructor(private readonly ssr: TsxViewsService) {}

  @Get()
  @Render('ContactDetails')
  index() {
    this.appService.addContext(ContactDetailFormContext, {
      ContactDetailFormProps: 2,

      //setCurrentOpen(2),
    });

    return {};
  }
}
