/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppStateManagerService } from './app-state-manager.service';

describe('Service: AppStateManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateManagerService]
    });
  });

  it('should ...', inject([AppStateManagerService], (service: AppStateManagerService) => {
    expect(service).toBeTruthy();
  }));
});
