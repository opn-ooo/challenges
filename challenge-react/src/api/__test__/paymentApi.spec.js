import paymentApi from '../paymentApi';

describe('paymentApi', () => {
  beforeEach(() => {
    // global.fetch.mockClear();
  });
  describe('getPayment', () => {
    it('get success', () => {
      //   Given
      const mockApiResp = [
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
      ];
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => Promise.resolve(mockApiResp) });

      //   When
      paymentApi.getPayment().then((resp) => {
        expect(resp).toEqual(mockApiResp);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
    it('get failed', () => {
      //   Given
      global.fetch = jest.fn().mockRejectedValue();

      //   When
      paymentApi.getPayment().then((resp) => {
        expect(resp).toEqual([]);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('updatePayment', () => {
    it('get success', () => {
      //   Given
      const mockApiResp = {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
        id: 1,
      };
      const mockReqBody = {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
      };
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => Promise.resolve(mockApiResp) });

      //   When
      paymentApi.updatePayment(mockReqBody).then((resp) => {
        expect(resp).toEqual(mockApiResp);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
    it('get failed', () => {
      //   Given
      global.fetch = jest.fn().mockRejectedValue();
      const mockReqBody = {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
      };
      //   When
      paymentApi.getPayment(mockReqBody).then((resp) => {
        expect(resp).toEqual({});
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
