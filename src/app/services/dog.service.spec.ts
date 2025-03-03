import { TestBed } from '@angular/core/testing';
import { DogService } from './dog.service';
import { HttpClientModule } from '@angular/common/http'; // ✅ Importado

describe('DogService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // ✅ Se agrega `HttpClientModule`
      providers: [DogService],
    });
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
