/* eslint-env mocha */
'use strict'

const { Candle } = require('../../../lib')
const testModel = require('../../helpers/test_model')

describe('Candle model', () => {
  testModel({
    model: Candle,
    orderedFields: ['mts', 'open', 'close', 'high', 'low', 'volume']
  })
})
