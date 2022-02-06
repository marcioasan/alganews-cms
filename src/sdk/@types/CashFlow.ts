import { Alganews } from "./AlgaNews"

export namespace CashFlow {
  export type CategoryDetailed = Alganews.components['schemas']['CashFlowCategoryDetailed']
  export type CategorySummary = Alganews.components['schemas']['CashFlowCategorySummary']
  export type CategoryIdInput = Alganews.components['schemas']['CashFlowCategoryIdInput']
  export type CategoryMinimal = Alganews.components['schemas']['CashFlowCategoryMinimal']
  export type CategoryInput = Alganews.components['schemas']['CashFlowCategoryInput']
  export type EntryType = Alganews.components['schemas']['CashFlowEntryType']
  export type EntrySummary = Alganews.components['schemas']['CashFlowEntrySummary']
  export type EntryDetailed = Alganews.components['schemas']['CashFlowEntryDetailed']
  export type EntryInput = Alganews.components['schemas']['CashFlowEntryInput']
}