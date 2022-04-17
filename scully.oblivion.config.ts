import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import '@scullyio/scully-plugin-puppeteer';
/** this loads the default render plugin, remove when switching to something else. */
// Dev path: C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe
// Production path: /usr/bin/google-chrome

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "oblivion",
  outDir: './dist/static',
  defaultPostRenderers: [ MinifyHtml ],
  routes: {
  },
  puppeteerLaunchOptions: {
    executablePath: "/usr/bin/google-chrome",
    args: [
      "--disable-gpu",
      "--renderer",
      "--no-sandbox",
      "--no-service-autorun",
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-extensions"
    ]
  }
};