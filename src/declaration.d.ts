declare module "*.json" {
    const content: any;
    export default content;
  }

  declare function require(moduleName: string): any;