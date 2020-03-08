export abstract class AbstractRenderable {
  abstract type: string
}

/**
 * 渲染纯文本，一般用作过场或者关于里面
 */
export class RenderText implements AbstractRenderable {
  public type = 'text'
  constructor(public content: string) { }
}

export function isRenderText(obj: AbstractRenderable): obj is RenderText {
  return obj.type === 'text'
}

/**
 * 渲染场景
 */
export class RenderStage implements AbstractRenderable {
  public type = 'stage'
  constructor(public title: string, public actions: string[], public desc?: string) { }
}

export function isRenderStage(obj: AbstractRenderable): obj is RenderStage {
  return obj.type === 'stage'
}

/**
 * 渲染菜单
 */