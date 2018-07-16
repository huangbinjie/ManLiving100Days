# PAL

仙剑奇侠传

## 架构

### 为什么要用 ECS 架构

OO 往往强调我是什么，比如我是一个玩家，我会走，会攻击。强调事物本身能驱动某些行为

```ts
class Player {
  public attack() {}
  public move() {}
}
```

ECS 强调我有什么。根据有什么决定这个实体做什么

```ts
const Player = [new PlayerComponent, new MoveComponent, new AttactComponent]
```

因为有了 PlayerComponent 我们知道这个实体是玩家。因为有了 MoveComponent，我们知道这个实体可以移动。

综合看来，正如知乎上说的

|> 感觉ECS比OOP更符合现实物理世界，毕竟事物(Entity)的变化并不是本身在驱动，而是规律(System)在驱动，而且从各个层面和尺度(Component)呈现的变化不同。

### Entity

理论上是元组或者struct，在js里面适合用数组。但是类型不好写，ts里面我用class表达实体。

定理：

+ 实体只能有组件
+ 实体不能有名字，不能根据名字判断是什么，而要看有什么组件决定他是什么

### Component

组件是一个游戏世界的类似元素周期表的最基本元素，不同的组件组成了不同实体

定理

+ 组件无函数
+ 组件可以有数据和实体
+ 组件行为属于组件
+ 组件行为只能包含实体

#### System

系统类似大自然法则和规律。负责处理各种组件行为。另外系统也有自己的行为。

定理

+ 系统无状态
+ 系统不依赖其他系统
+ 系统处理组件行为(不确定有没有系统行为，理解不够)

## 素材

剧情介绍：https://zhidao.baidu.com/question/102465003.html
剧情对话：https://tieba.baidu.com/p/4718152154?red_tag=2728916468

## 总结

场景怎么管理？

Scene is only a visual representation (human view) of game world and it's only purpose to help human players interact with this world. If a game architecture is designed in such way, you can see as game world might live and update even without any views attached.

场景是从人的角度思考的一种抽象，帮助人和游戏世界打交道很好理解。比如换地图看起来就像换场景。实际上只是批量操作实体而已，会删除一批，加载一批。
