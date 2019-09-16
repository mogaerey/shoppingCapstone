import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GoodsService } from './goods.service';
import { Goods } from './goods';

describe('GoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: GoodsService = TestBed.get(GoodsService);
    expect(service).toBeTruthy();
  });

  it('should get goods', inject(
    [ HttpTestingController ],
    (httpMock: HttpTestingController) => {
      const mockData = [
        new Goods("Cough Syrup", "domestic", 12.49, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "medical", 12.49, 0.0, 12.49, 10),
        new Goods("The Stand", "domestic", 14.49, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "books", 15.49, 0.0, 25.49, 10),
        new Goods("Glasses", "imported", 5412.00, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "luxury", 5412.00, 0.15, 6223.8, 10),
      ];

      const service: GoodsService = TestBed.get(GoodsService);
      service.getGoods().subscribe(
        (res: any) => {
          expect(res.length).toEqual(mockData.length);
          expect(res[0].name).toEqual(mockData[0].name);
          expect(res[1].name).toEqual(mockData[1].name);
          expect(res[2].name).toEqual(mockData[2].name);
        });

      const mockReq = httpMock.expectOne("http://localhost:8080/goods");
      expect(mockReq.request.method).toEqual("GET");

      mockReq.flush(mockData);
    }));

    it('should add a new goods item', inject(
      [ HttpTestingController ],
      (httpMock: HttpTestingController) => {
        const mockData =  new Goods("Cough Syrup", "domestic", 12.49, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "medical", 12.49, 0.0, 12.49, 10);
        const service: GoodsService = TestBed.get(GoodsService);
        service.addGoodsItem(mockData).subscribe(
          (res: any) => {
            expect(res.name).toEqual(mockData.name);
            expect(res.importType).toEqual(mockData.importType);
          });
        
        const mockReq = httpMock.expectOne("http://localhost:8080/goods");
        expect(mockReq.request.method).toEqual("POST");
        expect(mockReq.request.body.name).toEqual(mockData.name);
        expect(mockReq.request.body.importType).toEqual(mockData.importType);
  
        mockReq.flush(mockData);
    }));
  
    it('should delete a goods item', inject(
      [ HttpTestingController ],
      (httpMock: HttpTestingController) => {
        const mockData =  new Goods("Cough Syrup", "domestic", 12.49, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "medical", 12.49, 0.0, 12.49, 10);
  
        const service: GoodsService = TestBed.get(GoodsService);
        service.deleteGoodsItem(1).subscribe(
          (res: any) => {
            expect(res.name).toEqual(mockData.name);
            expect(res.importType).toEqual(mockData.importType);
          });
        
        const mockReq = httpMock.expectOne("http://localhost:8080/goods/1");
        expect(mockReq.request.method).toEqual("DELETE");
  
        mockReq.flush(mockData);
    }));
  
    it('should update a goods item', inject(
      [ HttpTestingController ], 
      (httpMock: HttpTestingController) => {
        const mockData =   new Goods("Cough Syrup", "domestic", 12.49, "https://target.scene7.com/is/image/Target/GUEST_8673bce7-74e8-4436-9812-1800fc1aa993?wid=488&hei=488&fmt=webp", "medical", 12.49, 0.0, 12.49, 10);
  
        const service: GoodsService = TestBed.get(GoodsService);
        service.updateGoodsItem(1, mockData).subscribe(
          (res: any) => {
            expect(res.name).toEqual(mockData.name);
            expect(res.importType).toEqual(mockData.importType);
          });
  
        const mockReq = httpMock.expectOne("http://localhost:8080/goods/1");
        expect(mockReq.request.method).toEqual("PUT");
        expect(mockReq.request.body.name).toEqual(mockData.name);
        expect(mockReq.request.body.importType).toEqual(mockData.importType);
  
        mockReq.flush(mockData);
    }));
});
