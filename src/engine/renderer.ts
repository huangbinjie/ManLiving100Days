export abstract class AbstractRenderer {
  public abstract write(obj: object): Promise<any>;

  public abstract async read(question: string): Promise<number>;
}

export class DefaultRenderer implements AbstractRenderer {
  public write(obj: object): Promise<any> {
    throw new Error("Method not implemented.");
  }  public read(question: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
}