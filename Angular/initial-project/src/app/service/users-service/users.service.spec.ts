import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch currentUsersVariation', () => {
    expect(service.currentUsersVariation).toEqual(service.usersVariations.at(0));

    service.changeCurrentUsersVariation(service.usersVariations.at(1) || "api");
    expect(service.currentUsersVariation).toEqual("api");

    service.changeCurrentUsersVariation(service.usersVariations.at(0) || "local");
    expect(service.currentUsersVariation).toEqual("local");
  });

  it('should fetch users from API', async () => {
    expect(service.apiUsers.length).toEqual(0);

    await service.getAPIUsers();

    expect(service.apiUsers.length).toBeGreaterThan(0);
    expect(service.apiUsers.at(0)).toBeDefined();
  });
});
