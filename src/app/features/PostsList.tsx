import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format } from "date-fns"
import { useEffect, useMemo, useState } from "react"
import { Column, useTable } from "react-table"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service";
import Table from "../components/Table/Table"

export default function PostList() {

  //8.30. Buscando dados paginados da API - 3'
  const [posts, setPosts] = useState<Post.Paginated>();

    //8.32. Aplicando error boundaries 6'17"
    const [error, setError] = useState<Error>()

  useEffect(() => {
    PostService
      .getAllPosts({
        page: 0,
        size: 7,
        showAll: true,
        sort: ['createdAt', 'desc']
      })
      .then(setPosts)
      .catch(error => setError(new Error(error.message)))
  }, [])

  if(error)
    throw error

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />
      },
      {
        Header: () => <div style={{ textAlign: 'left' }}>Título</div>,
        accessor: 'title',
        width: 320,
        Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
          <img 
            width={24} 
            height={24} 
            src={props.row.original.editor.avatarUrls.small} 
            alt={props.row.original.editor.name}
            title={props.row.original.editor.name}
            />
          {props.value}
        </div>//4.24. Recuperando dados além do accessor -> +/- 7'35" - Ao renderizar a célula, passa as props
              //que são as propriedades que a célula tem
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Criação</div>,
        accessor: 'createdAt',
        Cell: (props) => <div 
          style={{ 
            textAlign: 'right', 
            fontFamily: '"Roboto mono", monospace' 
          }}
          >
            {format(new Date(props.value), 'dd/MM/yyyy')}
          </div>
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Última atualização</div>,
        accessor: 'updatedAt',
        Cell: (props) => <div 
          style={{ 
            textAlign: 'right', 
            fontFamily: '"Roboto mono", monospace' 
          }}
          >
            {format(new Date(props.value), 'dd/MM/yyyy')}
          </div>
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right' }}>Ações</div>,
        Cell: (props) => <div style={{ textAlign: 'right' }}>
          {
            props.value ? 'Publicado' : 'Privado'
          }
        </div>
      },
    ],
    []
  )

  //8.30. Buscando dados paginados da API - 5'50"
  const instance = useTable<Post.Summary>({ 
    data: posts?.content || [], 
    columns 
  })

  return <Table 
    instance={ instance }
  />

}