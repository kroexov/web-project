import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ContactDetailFormProps,
} from './forms/ContactDetails';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('ContactDetails')
  index(): ContactDetailFormProps {
    return { setCurrentOpen: () => 0 };
  }
}
