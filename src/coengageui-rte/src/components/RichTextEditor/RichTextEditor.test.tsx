import { itSupportsSystemProps } from 'coengageui_tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => { },
};

describe('coengageui_core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: 'coengageui_rte/RichTextEditor',
  });
});
