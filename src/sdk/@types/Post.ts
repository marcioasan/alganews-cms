import { Alganews } from "./AlgaNews";

export namespace Post {
  export type Summary = Alganews.components['schemas']['PostSummary']
  export type Datailed = Alganews.components['schemas']['PostDetailed']
  export type WithEarnings = Alganews.components['schemas']['PostWithEarnings']
  export type Input = Alganews.components['schemas']['PostInput']
  export type Paginated = Alganews.components['schemas']['PostsPaginated']
}