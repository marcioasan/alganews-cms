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

type Post = {
  id: number
  title: string
  views: number
  author: {
    name: string
    avatar: string
  }
  conversions: {
    thousands: number
    percentage: number
  }
}

export function Default(){
  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      },
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'React.js vs. React Native: a REAL diferença entre os dois',
        views: 985415
      },
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      }
    ],
    []
  )

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />
      },
      {
        Header: 'Artigo',
        accessor: 'title',
        width: 320,
        Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
          <img width={24} height={24} src={props.row.original.author.avatar} alt={props.row.original.author.name}/>
          {props.value}
        </div>
      },
      {
        Header: 'Views',
        accessor: 'views',
        Cell: (props) => <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>{props.value.toLocaleString('pt-br')}</div>
      },
      {
        Header: 'Conversões',
        accessor: 'conversions',
        Cell: (props) => <div style={{ display: 'flex', gap: 8, fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          <span>{props.value.thousands}k</span>
          <span style={{ color: '#09f' }}>{props.value.percentage}%</span>
        </div>
      },
      {
        Header: 'Ações',
        Cell: () => <div style={{ textAlign: 'right' }}>
          todo: actions
        </div>
      },
    ],
    []
  )

  const instance = useTable<Post>({ data, columns })

  return <Table<Post> instance={ instance }/>
}

export function NoData(){
  const data = useMemo<Post[]>(
    () => [],
    []
  )

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: () => <Icon path={ mdiOpenInNew } size={'14px'} color={'#09f'}/>
      },
      {
        Header: 'Artigo',
        accessor: 'title',
        width: 320,
        Cell: (props) => <div style={{ textAlign: 'left' }}>
          <img src={props.row.original.author.avatar} alt={props.row.original.author.name} />
          { props.value }
        </div>//4.24. Recuperando dados além do accessor - 8'
        
      },
      {
        Header: 'Views',
        accessor: 'views',
        Cell: (props) => <div style={{ textAlign: 'right' }}>{ props.value }</div>
      },
      {
        Header: 'Conversões',
        accessor: 'conversions',
        Cell: (props) => <div style={{ textAlign: 'right' }}>{ props.value }
          <span>{props.value.thousands}k</span>
          <span>{props.value.percentage}%</span>
        </div>
      },
    ],
    []
  )

  const instance = useTable<Post>({ data, columns })

  return <Table<Post> instance={ instance }/>
}