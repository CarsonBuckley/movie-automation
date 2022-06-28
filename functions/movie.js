const {Builder, Capabilities} = require('selenium-webdriver')
const { By } = require('selenium-webdriver')

const addMovie = async (driver) => {

    // select the input field, put some text in it
    await driver.findElement(By.xpath('//input')).sendKeys('F.R.0.7.')

    // select the 'add' button and click it
    await driver.findElement(By.xpath('//button')).click()

    // find the first li element (the added movie)
    const movie = await driver.findElement(By.xpath('//li'))

    // create a variable that sees if that li element is visible (return boolean)
    // if the li element isn't visible, it either doesn't exist or isn't visible
    const displayed = movie.isDisplayed()

    // do our jest test to see if the element was displayed
    expect(displayed).toBeTruthy()

}

const deleteMovie = async (driver) => {

    await driver.findElement(By.xpath('//span'))

    let resultsText = await driver.findElement(By.xpath('//span')).getText()

    await driver.findElement(By.id(resultsText)).click()

    await driver.sleep(3000)
}

const crossOffMovie = async (driver) => {

}

const revealMessage = async (driver) => {

}



module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie,
    revealMessage
}