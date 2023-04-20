import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactDetailFormProps } from './forms/ContactDetails';
import { CreateDetailFormProps } from './forms/CreateDetailForm';
import { CreateProviderFormProps } from './forms/ProviderForm';
import { CreateOrderFormProps } from './forms/CreateOrderForm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/contact')
  @Render('ContactDetails')
  contact(): ContactDetailFormProps {
    return { setCurrentOpen: () => 0 };
  }

  @Get('/detail')
  @Render('CreateDetailForm')
  detail(): CreateDetailFormProps {
    return { detail: null, onCreate: () => null, setCurrentOpen: () => 1 };
  }

  @Get('/provider')
  @Render('ContactDetails')
  provider(): CreateProviderFormProps {
    return { setCurrentOpen: () => 2 };
  }

  @Get('/order')
  @Render('CreateDetailForm')
  order(): CreateOrderFormProps {
    return {
      order: null,
      providerId: null,
      onCreate: () => null,
      setCurrentOpen: () => 3,
    };
  }
}
