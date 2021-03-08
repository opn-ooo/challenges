import { paymentsService } from '../donations';

describe('charitiesService', () => {
  paymentsService.fetchAll();
  it('pass', () => {
    const mockResponse = [
      {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
        id: 1,
      },
      {
        charitiesId: 1,
        amount: 20,
        currency: 'THB',
        id: 2,
      },
      {
        charitiesId: 3,
        amount: 50,
        currency: 'THB',
        id: 3,
      },
      {
        charitiesId: 4,
        amount: 100,
        currency: 'THB',
        id: 4,
      },
      {
        charitiesId: 2,
        amount: 500,
        currency: 'THB',
        id: 5,
      },
      {
        charitiesId: 5,
        amount: 500,
        currency: 'THB',
        id: 6,
      },
      {
        amount: 500,
        charitiesId: 2,
        currency: 'THB',
        id: 7,
      },
    ];
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(mockResponse) });

    paymentsService.fetchAll().then((resp) => {
      expect(resp).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
