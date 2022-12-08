import { ComponentType } from 'react'
import { StandardProps, CommonEventFunction, FormItemProps } from './common'

/** 选择器通用参数 */
interface PickerStandardProps extends StandardProps, FormItemProps {
  /**
   * 选择器类型，默认是普通选择器
   * @default "selector"
   * @supported weapp, h5, rn
   */
  mode?: keyof PickerStandardProps.Mode
  /**
   * 是否禁用
   * @default false
   * @supported weapp, h5, rn
   */
  disabled?: boolean
  /**
   * 整体缩放比
   * @default 1
   * @supported h5
   */
  scale?: number
  /**
   * 滚动区行数
   * @default 7
   * @supported weapp, h5
   */
  scrollRows?: 3 | 5 | 7
}

declare namespace PickerStandardProps {
  /** 选择器类型 */
  interface Mode {
    /** 普通选择器 */
    selector
    /** 多列选择器 */
    multiSelector
    /** 时间选择器 */
    time
    /** 日期选择器 */
    date
    /** 省市区选择器 */
    region
  }
}

/** 普通选择器：mode = selector */
interface PickerSelectorProps extends PickerStandardProps {
  /** 选择器类型 */
  mode?: 'selector'
  /**
   * mode为 selector 或 multiSelector 时，range 有效
   * @supported weapp, h5, rn
   * @default []
   */
  range: string[] | number[] | Record<string, any>[]
  /**
   * 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
   * @supported weapp, h5, rn
   */
  rangeKey?: string
  /**
   * 表示选择了 range 中的第几个（下标从 0 开始）
   * @supported weapp, h5, rn
   * @default 0
   */
  value?: number
  /**
   * value 改变时触发 change 事件，event.detail = {value}
   * @supported weapp, h5, rn
   */
  onChange?: CommonEventFunction<PickerSelectorProps.ChangeEventDetail>
}

declare namespace PickerSelectorProps {
  interface ChangeEventDetail {
    /** 表示变更值的下标 */
    value: string | number
  }
}

/** 多列选择器：mode = multiSelector */
interface PickerMultiSelectorProps extends PickerStandardProps {
  /** 选择器类型 */
  mode: 'multiSelector'
  /**
   * mode为 selector 或 multiSelector 时，range 有效
   * @supported weapp, h5, rn
   * @default []
   */
  range: Array<string[]> | Array<number[]> | Array<Record<string, any>[]>
  /**
   * 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
   * @supported weapp, h5, rn
   */
  rangeKey?: string
  /**
   * 表示选择了 range 中的第几个（下标从 0 开始）
   * @supported weapp, h5, rn
   * @default []
   */
  value?: number[] | string[] | Record<string, any>[]
  /**
   * 当 value 改变时触发 change 事件，event.detail = {value}
   * @supported weapp, h5, rn
   */
  onChange?: CommonEventFunction<PickerMultiSelectorProps.ChangeEventDetail>
  /**
   * 列改变时触发
   * @supported weapp, h5, rn
   */
  onColumnChange?: CommonEventFunction<PickerMultiSelectorProps.ColumnChangeEvnetDetail>
}

declare namespace PickerMultiSelectorProps {
  interface ChangeEventDetail {
    /** 表示变更值的下标 */
    value: number[]
  }
  interface ColumnChangeEvnetDetail {
    /** 表示改变了第几列（下标从0开始） */
    column: number
    /** 表示变更值的下标 */
    value: number
  }
}

/** 时间选择器：mode = time */
interface PickerTimeProps extends PickerStandardProps {
  /** 选择器类型 */
  mode: 'time'
  /**
   * value 的值表示选择了 range 中的第几个（下标从 0 开始）
   * @supported weapp, h5, rn
   */
  value?: string
  /**
   * 仅当 mode = time|date 时有效，表示有效时间范围的开始，字符串格式为"hh:mm"
   * @supported weapp, h5, rn
   */
  start?: string
  /**
   * 仅当 mode = time|date 时有效，表示有效时间范围的结束，字符串格式为"hh:mm"
   * @supported weapp, h5, rn
   */
  end?: string
  /**
   * value 改变时触发 change 事件，event.detail = {value}
   * @supported weapp, h5, rn
   */
  onChange?: CommonEventFunction<PickerTimeProps.ChangeEventDetail>
}

declare namespace PickerTimeProps {
  interface ChangeEventDetail {
    /** 表示选中的时间 */
    value: string
  }
}

/** 日期选择器：mode = date */
interface PickerDateProps extends PickerStandardProps {
  /** 选择器类型 */
  mode: 'date'
  /**
   * 表示选中的日期，格式为"YYYY-MM-DD"
   * @supported weapp, h5, rn
   * @default 0
   */
  value?: string
  /**
   * 仅当 mode = time|date 时有效，表示有效时间范围的开始，字符串格式为"hh:mm"
   * @supported weapp, h5, rn
   */
  start?: string
  /**
   * 仅当 mode = time|date 时有效，表示有效时间范围的结束，字符串格式为"hh:mm"
   * @supported weapp, h5, rn
   */
  end?: string
  /**
   * 有效值 year, month, day，表示选择器的粒度
   * @supported weapp, h5, rn
   * @default "day"
   */
  fields?: keyof PickerDateProps.Fields
  /**
   * value 改变时触发 change 事件，event.detail = {value}
   * @supported weapp, h5, rn
   */
  onChange?: CommonEventFunction<PickerDateProps.ChangeEventDetail>
}

declare namespace PickerDateProps {
  interface Fields {
    /** 选择器粒度为年 */
    year
    /** 选择器粒度为月份 */
    month
    /** 选择器粒度为天 */
    day
  }
  interface ChangeEventDetail {
    /** 表示选中的日期 */
    value: string
  }
}

/** 省市区选择器：mode = region */
interface PickerRegionProps extends PickerStandardProps {
  /** 选择器类型 */
  mode: 'region'
  /**
   * 表示选中的省市区，默认选中每一列的第一个值
   * @supported weapp, h5, rn
   * @default []
   */
  value?: string[]
  /**
   * 可为每一列的顶部添加一个自定义的项
   * @supported weapp, h5, rn
   */
  customItem?: string
  /**
   * 自定义省市区数据
   * @supported rn
   */
  regionData?: PickerRegionProps.RegionData[]
  /**
   * value 改变时触发 change 事件，event.detail = {value, code, postcode}，其中字段 code 是统计用区划代码，postcode 是邮政编码
   * @supported weapp, h5, rn
   */
  onChange?: CommonEventFunction<PickerRegionProps.ChangeEventDetail>
}

declare namespace PickerRegionProps {
  interface ChangeEventDetail {
    /** 表示选中的省市区 */
    value: string[]
    /** 统计用区划代码 */
    code: string[]
    /** 邮政编码 */
    postcode?: string
  }
  interface RegionData {
    value: string
    code: string
    postcode?: string
  }
}

declare const PickerContent: ComponentType<PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps | PickerSelectorProps>

export {
  PickerContent,
  PickerStandardProps,
  PickerSelectorProps,
  PickerMultiSelectorProps,
  PickerTimeProps,
  PickerDateProps,
  PickerRegionProps
}
