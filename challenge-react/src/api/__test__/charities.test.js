import { charitiesService } from '../charities';

describe('charitiesService', () => {
  charitiesService.fetchAll();
  it('pass', () => {
    const mockResponse = [
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
      {
        id: 4,
        name: 'Makhampom Theater',
        image: 'makhampom-theater.jpg',
        currency: 'THB',
      },
      {
        id: 5,
        name: 'Thailand Association of the Blind',
        image: 'thailand-association-of-the-blind.jpg',
        currency: 'THB',
      },
    ];
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(mockResponse) });

    charitiesService.fetchAll().then((resp) => {
      expect(resp).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
