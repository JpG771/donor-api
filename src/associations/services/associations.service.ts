import { Injectable } from '@nestjs/common';

@Injectable()
export class AssociationsService {
  public getAllAssociations() {
    return [
      {
        name: 'Test 1',
      },
      {
        name: 'Test 2',
      },
    ];
  }
}
