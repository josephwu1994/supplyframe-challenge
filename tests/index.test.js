module.exports = {
  'First test': (browser) => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('')
      .end()
  }
}