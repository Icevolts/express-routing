const {findMean,findMedian,findMode} = require('./helpers');

describe('#findMean', () => {
    it('finds the mean', () =>{
        expect(findMean([1,2,3,4])).toEqual(2.5)
    })
    it('finds the mean of an empty array',() =>{
        expect(findMean([])).toEqual(0) 
    })
})

describe('#findMedian', () => {
    it('finds the median of an even set of numbers', () =>{
        expect(findMedian([1,2,3,4])).toEqual(2.5)
    })
    it('finds the median of an odd set of numbers', () =>{
        expect(findMedian([1,2,3])).toEqual(2)
    })
})

describe('#findMode', () => {
    it('finds the mode', () =>{
        expect(findMode([1,1,2,3,4])).toEqual(1)
    })
})