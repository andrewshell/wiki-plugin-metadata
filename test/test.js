// build time tests for metadata plugin
// see http://mochajs.org/

(function() {
  const metadata = require('../client/metadata'),
        expect = require('expect.js')

  describe('metadata plugin', () => {
    describe('expand', () => {
      it('can make itallic', () => {
        var result = metadata.expand('hello *world*')
        return expect(result).to.be('hello <i>world</i>')
      })
    })
  })

}).call(this)
