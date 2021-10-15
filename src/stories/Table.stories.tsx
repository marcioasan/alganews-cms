import React, { useMemo } from 'react';
import { Meta } from '@storybook/react';

import Table from '../components/Table/Table';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { Column, useTable } from 'react-table';

export default {
  title: 'Example/Table',
  component: Table,
} as Meta;

type Data = {
  preview: React.ReactNode
  col1: string
  col2: string
  actions: string
}

export function Default(){
  const data = useMemo<Data[]>(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        actions: 'ações',
        preview: <Icon
          size="14px"
          color="#09F"
          path={ mdiOpenInNew }
        />
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        actions: 'ações',
        preview: <Icon
          size="14px" 
          path={ mdiOpenInNew }
        />
      },
      {
        col1: 'whatever',
        col2: 'you want',
        actions: 'ações',
        preview: <Icon
          size="14px" 
          path={ mdiOpenInNew }
        />
      },
      {
        col1: 'Teste 1',
        col2: 'Teste 2',
        actions: 'ações',
        preview: <Icon
          size="14px" 
          path={ mdiOpenInNew }
        />
      },
    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: '',
        accessor: 'preview', // accessor is the "key" in the data
      },
      {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: 'right' }}>{ row.value }</div>
        
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: 'center' }}>{ row.value }</div>
      },
      {
        Header: 'Ações',
        accessor: 'actions',
      },
    ],
    []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={ instance }/>
}

export function NoData(){
  const data = useMemo<Data[]>(
    () => [],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: '',
        accessor: 'preview', // accessor is the "key" in the data
      },
      {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: 'right' }}>{ row.value }</div>
        
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: 'center' }}>{ row.value }</div>
      },
      {
        Header: 'Ações',
        accessor: 'actions',
      },
    ],
    []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={ instance }/>
}