/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AFPOspedaleAPIService } from './AFPOspedaleAPI.service';

describe('Service: AFPOspedaleAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AFPOspedaleAPIService]
    });
  });

  it('should ...', inject([AFPOspedaleAPIService], (service: AFPOspedaleAPIService) => {
    expect(service).toBeTruthy();
  }));
});
