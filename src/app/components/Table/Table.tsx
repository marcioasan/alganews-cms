import { transparentize } from 'polished'
import { useEffect } from 'react'
import { TableInstance } from 'react-table'
import Button from '../Button/Button'
import NoData from '../NoData/NoData'
import * as T from './Table.styles'

interface TableProps<T extends object> {
  instance: TableInstance<T>
  onPaginate?: (newPage: number) => any
}

export default function Table<T extends Object>({ 
  instance,
  onPaginate
}: TableProps<T>) {

    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      rows,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      state: {
        pageIndex,
      }
    } = instance

    //8.42. Paginando no servidor - 2'
    useEffect(() => {
      onPaginate &&
        onPaginate(pageIndex)
    }, [pageIndex, onPaginate])
    
    return(
      <>
      <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps}>
        <T.Heading>
          {
            headerGroups.map(headerGroup => (
              <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <T.HeadingCell {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </T.HeadingCell>
                  ))
                }
              </T.HeadingRow>
            ))
          }
        </T.Heading>
        <T.Body {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row)
              return <T.BodyRow {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <T.BodyCell {...cell.getCellProps()}>
                      { cell.render('Cell') }                      
                    </T.BodyCell>
                  })
                }

              </T.BodyRow>
            })
          }
        </T.Body>
      </T.Wrapper>
          {
            !rows.length &&
            <div style={{ backgroundColor: transparentize(0.95, '#274060') }}>
              <NoData height={360}/>
            </div>
          }
          
          {/* 8.41. Aplicando paginação no react-table - 8' */}
          <T.TablePagination>
            <Button 
              variant={'primary'}
              label={'Primeira página'}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            />

            <Button 
              variant={'primary'}
              label={'Página anterior'}
              onClick={previousPage}
              disabled={!canPreviousPage}
            />

            <Button 
              variant={'primary'}
              label={'Próxima página'}
              onClick={nextPage}
              disabled={!canNextPage}
            />

            <Button 
              variant={'primary'}
              label={'Última página'}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            />
            <span>
              Página { pageIndex + 1 } de { pageOptions.length }
            </span>
          </T.TablePagination>
      </>
    )

}
