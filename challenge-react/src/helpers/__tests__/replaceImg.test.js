import { replaceImg } from '..'

describe('replaceImg', () => {
    test('`replaceImg` default should be string empty', () => {
        expect(replaceImg()).toEqual('');
    })
    test('should be return image path', () => {
        expect(replaceImg('Hello.jpg')).toEqual('/images/Hello.jpg');
    })

})
