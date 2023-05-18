// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const URL_API_CAT = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.locator('.fact')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(URL_API_CAT)).toBeTruthy()
})

test('click get new fact button and app shows new random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.locator('.fact')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // await page.getByRole('button').click()
  await page.locator('.button-get-fact').click()
  // await page.waitForLoadState()
  await page.waitForTimeout(900)

  const newTextContent = await text.textContent()
  const newImageSrc = await image.getAttribute('src')

  // console.log({ textContent })
  // console.log({ newTextContent })

  await expect(textContent).not.toEqual(newTextContent)
  await expect(imageSrc).not.toEqual(newImageSrc)

  await expect(newTextContent?.length).toBeGreaterThan(0)
  await expect(newImageSrc?.startsWith(URL_API_CAT)).toBeTruthy()
})
