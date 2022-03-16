import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

export interface MarkdownEditorProps {
  onChange?: (text: string) => any
  value?: string;
  readOnly?: boolean;
}

export default function MarkdownEditor(props: MarkdownEditorProps) {
  return <MdEditor
    readOnly={props.readOnly}
    style={{ height: props.readOnly ? 'auto' : 300 }}
    value={props.value}
    renderHTML={text => parser.render(text)}
    onChange={({ text }) => props.onChange && props.onChange(text)}
    /* 8.45. Renderizando markdown - 7'30" */
    view={props.readOnly ? {
      menu: false,
      md: false,
      html: true
    }: undefined}
  />
}