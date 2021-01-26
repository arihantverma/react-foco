import { Page } from 'puppeteer';
import { TestElements } from '../../stories/TestElements';

export class ClicksPage {
  constructor(private page: Page) {}

  public async open() {
    await this.page.goto(
      'http://localhost:6006/iframe.html?id=foco--clicks-and-focuses&viewMode=story'
    );
  }

  public getClicksStatus(): Promise<string | null> {
    return this.page.$eval(
      getSelectorByTestID(TestElements.ClickStatusNode),
      node => node.textContent
    ) as Promise<string>;
  }

  public getFocusStatus(): Promise<string | null> {
    return this.page.$eval(
      getSelectorByTestID(TestElements.FocusStatusNode),
      node => node.textContent
    ) as Promise<string>;
  }

  public clickInside() {
    return this.page.click(
      `${getSelectorByTestID(TestElements.InnerNode)} button`
    );
  }

  public clickOutside() {
    return this.page.click(
      `${getSelectorByTestID(TestElements.OuterNode)} button`
    );
  }

  public focusInside() {
    return this.page.focus(
      `${getSelectorByTestID(TestElements.InnerNode)} button`
    );
  }

  public focusOutside() {
    return this.page.focus(
      `${getSelectorByTestID(TestElements.OuterNode)} button`
    );
  }
}

function getSelectorByTestID(testID: string) {
  return `[data-testID=${testID}]`;
}
