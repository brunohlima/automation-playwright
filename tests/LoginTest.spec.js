// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  // Abrir Site
  await page.goto('https://automationpratice.com.br/login');
  // Logar com e-mail e senha
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  // Verificar mensagem de logado
  await expect(page.getByRole('heading', { name: 'Login realizado'})).toBeVisible();

});

test('Login com email vazio', async ({ page }) => {
  // Abrir Site
  await page.goto('https://automationpratice.com.br/login');
  // Logar com e-mail vazio
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  // Validar mensagem de e-mail inválido
  await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 1000 });

});

test('Login com senha vazia', async ({ page }) => {
  // Abrir Site
  await page.goto('https://automationpratice.com.br/login');
  // Logar com senha vazia
  await page.locator('#user').fill('teste@gmail.com');
  await page.getByRole('button', { name: 'login' }).click();
  // Vefificar mensagem de senha inválida
  await expect(page.getByText('Senha inválida.')).toBeVisible();

});