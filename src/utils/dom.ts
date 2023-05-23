export async function findElement(selector: string) {
    try {
      const element = await $(selector);
      return element;
    } catch (error: any) {
      selector 
      ? error.message = `Failed to find element with selector: ${selector}`
      : error.message = `Selector is not provided, check your page object`;
      throw new Error(error)
    }
  }
  
  export async function findArrayOfElements(selector: string) {
      try {
          const arrayOfElements = await $$(selector);
          return arrayOfElements;
        } catch (error: any) {
          error.message = `Failed to find list of elements with selector: ${selector}`;
          console.log(error);
        }
  }
  