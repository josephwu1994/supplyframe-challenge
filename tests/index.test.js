module.exports = {
  before: (browser) => {
		browser.maximizeWindow();
		browser.url('http://localhost:3000/');
		browser.waitForElementVisible('body');
		browser.pause(1000);
	},

	after: (browser) => {
		browser.end();
  },
  
  "Title and components renders and routes is correct" : (browser) => {
    browser
      .waitForElementVisible('body', 1000)
      .assert.title('SupplyFrame Challenge')
      .assert.containsText('.header', 'Projects')
      .assert.urlContains('projects')
      .assert.elementPresent('.image-box')
      .assert.elementPresent('.owner')
      .assert.elementPresent('.title')
      .assert.cssProperty('.user-detail', 'opacity', '0')
      .click('#next')
      .assert.urlContains('projects?page=2')
      .click('#previous')
      .assert.urlContains('projects?page=1')
      .click('.card-img-top')
      .assert.urlContains('projects/')
      .waitForElementVisible('.stats')
      .assert.cssProperty('.stats','opacity', '1')
      .end()
  },
}