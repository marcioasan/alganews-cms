import info from "../../core/utils/info"
import React, { useEffect, useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"
import PostService from "../../sdk/services/Post.service"
import Loading from "../components/Loading"
import { useHistory } from "react-router-dom"

//8.55. Edição do post - 4'20"
interface PostFormProps {
  postId?: number
}

export default function PostForm(props: PostFormProps) {
  const history = useHistory()

  const [tags, setTags]  = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  /* 8.37. Fazendo o Loading funcionar - 2'50" */
  const [publishing, setPublishing] = useState(false)

  //8.55. Edição do post - 5'40"
  async function insertNewPost() {
    const newPost ={
      body, title, tags: tags.map(tag => tag.text), imageUrl, //8.22. Implementando o cadastro de posts - 6'
    }
    await PostService.insertNewPost( newPost )
    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post'
    })    
  }
  //8.55. Edição do post - 7'10"
  async function updateExistingPost(postId: number) {
    const newPost ={
      body, title, tags: tags.map(tag => tag.text), imageUrl, //8.22. Implementando o cadastro de posts - 6'
    }
    await PostService.updateExistingPost(postId, newPost)
    info({
      title: 'Post atualizado',
      description: 'Você atualizou o post com sucesso'
    })
  }

async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
  try {
    e.preventDefault();
    setPublishing(true)

    //8.55. Edição do post - 9'
    props.postId
      ? await updateExistingPost(props.postId)
      : await insertNewPost()
  
    history.push('/') //8.53. Melhorando a experiência do cadastro de post - 3'30"
  } finally {
    setPublishing(false)
  }
}

  //8.55. Edição do post - 11'
  function fetchPost(postId: number) {
    PostService
      .getExistingPost(postId)
      .then(post => {
        setTitle(post.title)
        setImageUrl(post.imageUrls.default)
        setBody(post.body)
        setTags(post.tags.map(tag => ({ id: tag, text: tag })))
      })
  }

  //8.55. Edição do post - 13'
  useEffect(() => {
    if(props.postId) {
      fetchPost(props.postId)
    }
  }, [props.postId])

  return <PostFormWrapper onSubmit={ handleFormSubmit }>
    <Loading show={publishing}/> {/* 8.36. Criando um Loading - 3' | 8.37. Fazendo o Loading funcionar - 2'*/}
    <Input 
      label="título"
      value={ title }
      onChange={ e => setTitle(e.currentTarget.value) }
      placeholder="e.g. Como fiquei rico aprendendo React"
    />
    <ImageUpload 
      //onImageUpload={( imageUrl ) => setImageUrl(imageUrl)} ou passar só a referência do método
      onImageUpload={setImageUrl}
      label="Thumbnail do post"
      preview={imageUrl} //8.55. Edição do post - 16'40"
      />
    
    <MarkdownEditor
      onChange={setBody}
      value={body}//8.55. Edição do post - 16'
    />
    <TagInput 
      tags={ tags }
      onAdd={ tag => setTags([...tags, tag]) }
      onDelete={ index => setTags(tags.filter((_, i) => i !== index)) }
      placeholder="Insira as tags deste post"
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter 
        pricePerWord={ 0.25 } 
        wordsCount={ countWordsInMarkdown(body) }
      />
      <Button 
        variant="primary" 
        label="Salvar post" 
        type="submit"
        disabled={!title || !imageUrl || !body || !tags.length}
      />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`