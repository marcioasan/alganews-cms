import styled from 'styled-components'
import { transparentize } from 'polished'

export const TABLE = styled.table`
  color: #274060;
  background-color: ${ transparentize(0.95, '#274060') };
  border-spacing: 0;
  
`
export const Heading = styled.thead`
  border-bottom: 1px solid black;
`

export const BodyCell = styled.td`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`


// export const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `

