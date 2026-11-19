import type { ComponentOptions, ComputedRef } from 'vue'
import type { WujieTabsManager, WujieTabsState } from '@melt-js/libs-wujie2-tabs-core'

export { createWujieTabs } from '@melt-js/libs-wujie2-tabs-core'
export type {
  WujieTab,
  WujieTabsListener,
  WujieTabsManager,
  WujieTabsState,
} from '@melt-js/libs-wujie2-tabs-core'

export interface WujieTabBarSlot extends WujieTabsState {
  activate: WujieTabsManager['activate']
  close: WujieTabsManager['close']
  closeOthers: WujieTabsManager['closeOthers']
  closeAll: WujieTabsManager['closeAll']
}

/** 订阅页签状态；在组件 setup 内调用时随组件销毁自动退订。 */
export declare function useWujieTabs(manager: WujieTabsManager): ComputedRef<WujieTabsState>

/** 无头组件：不渲染 DOM，通过默认作用域插槽交出状态与操作。 */
export declare const WujieTabBar: ComponentOptions
