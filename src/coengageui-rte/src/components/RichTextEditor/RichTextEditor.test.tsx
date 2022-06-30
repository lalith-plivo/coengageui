import { itSupportsSystemProps } from '@coengageui/tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => { },
};

describe('@coengageui/core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: '@coengageui/rte/RichTextEditor',
  });
});
