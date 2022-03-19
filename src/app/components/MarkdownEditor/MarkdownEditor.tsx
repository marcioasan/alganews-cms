import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import FileService from '../../../sdk/services/File.service';

MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

//8.48. Abrindo links em uma nova aba - INÍCIO
const defaultRender = parser.renderer.rules.link_open ||
  function(tokens: any, idx: any, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    //@ts-ignore
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, self);
};
//8.48. Abrindo links em uma nova aba - FIM

export interface MarkdownEditorProps {
  onChange?: (text: string) => any
  value?: string;
  readOnly?: boolean;
}

export default function MarkdownEditor(props: MarkdownEditorProps) {
  
  //8.50. Upload de imagem no post
  async function handleImageUpload(file: File){
    return FileService.upload(file)
  }
  return <MdEditor
    readOnly={props.readOnly}
    onImageUpload={handleImageUpload}
    style={{ height: props.readOnly ? 'auto' : 300 }}
    value={props.value}
    renderHTML={text => parser.render(text)}

    //8.50. Upload de imagem no post - 6'10" - deixa o markdow sem a exibição da prévia
    /*
    config={{
      view: {
        html: false
      }
    }}
    */

    onChange={({ text }) => props.onChange && props.onChange(text)}
    /* 8.45. Renderizando markdown - 7'30" */
    view={props.readOnly ? {
      menu: false,
      md: false,
      html: true
    }: undefined}
  />
}