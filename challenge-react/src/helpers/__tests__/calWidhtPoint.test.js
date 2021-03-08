import { pxToVw } from '..';

describe('pxToVw', function () {
    test('`pxToVw` should calculate Relative to 1% of the width of the viewport* default value size = 300, width = 1440 correctly', function () {
        expect(pxToVw()).toEqual('20.833333333333336vw');
    });

    test('`pxToVw` should calculate Relative to 1% of the width of the viewport* correctly', () => {
        expect(pxToVw(1,1)).toEqual('100vw');
    })
});
