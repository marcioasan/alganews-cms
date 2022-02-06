//8.12. Gerando interfaces TypeScript automaticamente com OpenAPI - 14'

import { Alganews } from "./AlgaNews";

export namespace User {
  export type Input = Alganews.components['schemas']['UserInput']
  export type Datailed = Alganews.components['schemas']['UserDetailed']
  export type Summary = Alganews.components['schemas']['UserSummary']
  export type Minimal = Alganews.components['schemas']['UserMinimal']
  export type Metrics = Alganews.components['schemas']['UserMetrics']
  export type EditorSummary = Alganews.components['schemas']['EditorSummary']
  export type EditorDetailed = Alganews.components['schemas']['EditorDetailed']

  export type Role = Alganews.components['schemas']['Role']
  export type Skill = Alganews.components['schemas']['Skill']
}