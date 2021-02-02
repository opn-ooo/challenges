import charityApi from '../charityApi';

describe('charityApi', () => {
  describe('getCharities', () => {
    it('success', () => {
      //   Given
      const mockApiResp = [
        {
          id: 1,
          name: 'Baan Kru Noi',
          image: 'baan-kru-noi.jpg',
          currency: 'THB',
        },
        {
          id: 2,
          name: 'Habitat for Humanity Thailand',
          image: 'habitat-for-humanity-thailand.jpg',
          currency: 'THB',
        },
        {
          id: 3,
          name: 'Paper Ranger',
          image: 'paper-ranger.jpg',
          currency: 'THB',
        },
      ];
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => Promise.resolve(mockApiResp) });

      //   When
      charityApi.getCharities().then((resp) => {
        expect(resp).toEqual(mockApiResp);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
    it('failed', () => {
      //   Given
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => Promise.resolve(mockApiResp) });

      //   When
      charityApi.getCharities().then((resp) => {
        expect(resp).toEqual([]);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
