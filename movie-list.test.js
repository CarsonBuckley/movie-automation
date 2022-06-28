const {Builder, Capabilities} = require('selenium-webdriver')
const { By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// const { addMovie } = require('../movieList/index')
// const { deleteMovie } = require('../movieList/index')
// const { crossOffMovie } = require('../movieList/index')
// const { revealMessage } = require('../movieList/index')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// Write at least 3 tests for the functionality of the Movie List app - these cannot be the same as the functions we covered in the demo. You could test crossing off a movie, deleting a movie, or even the notifications that are displayed.

test('Add a movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Carson')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

    await driver.sleep(4000)
})

test('Cross off movie',  async () => {
    // let movieText = await driver.findElement(By.name('Carson'))
    await driver.findElement(By.xpath('//*[text()="Carson"]')).click()

})

test('Reveal message', async () => {
    await driver.findElement(By.id('message'))

})

test('Delete a movie', async () => {
    await driver.findElement(By.xpath('//*[text()="x"]')).click()

})

