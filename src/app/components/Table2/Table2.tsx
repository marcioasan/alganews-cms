import { useMemo } from "react"
import { Column, useTable } from 'react-table'

import * as T from './Table2.styles'

type Data = {
  firstName: string
  lastName: string
  age: string
  visits: string
  status: string
  progress: string
}

export default function Table() {

  const data = useMemo<Data[]>(
    () => [
      {
        firstName: 'Márcio',
        lastName: 'Santos',
        age: '49',
        visits: '1',
        status: 'married',
        progress: '100'
      },
      {
        firstName: 'Fulano',
        lastName: 'De Tal',
        age: '36',
        visits: '2',
        status: 'single',
        progress: '50'
      },
    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      rows
    } = useTable<Data>({ data, columns })

    return(
      <T.TABLE {...getTableProps}>
        <T.Heading>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </T.Heading>
        <tbody {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row)
              return <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <T.BodyCell {...cell.getCellProps()}>
                      { cell.render('Cell') }                      
                    </T.BodyCell>
                  })
                }

              </tr>
            })
          }
        </tbody>
      </T.TABLE>
    )
}
