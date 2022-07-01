import React from 'react';
import { storiesOf } from '@storybook/react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { CoengageUIProvider } from 'coengageui_styles';
import { StylesAPIStory } from 'coengageui_storybook';
import { Alert, AlertProps } from './Alert';
import { Title } from '../Title';

const defaultProps: AlertProps = {
  title: 'Alert title',
  children: 'Alert message',
  icon: '$',
};

export type AlertStyleType = 'filled' | 'outline' | 'light';
const types: Array<AlertStyleType> = ['light', 'filled', 'outline'];

storiesOf('Alert', module)
  .add('Styles API', () => <StylesAPIStory component={Alert} name="Alert" props={defaultProps} />)
  .add('Content overflow', () => (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Alert title that is too large and will definitely take more that one line to render">
        Alert body
      </Alert>

      <Alert
        title="Alert title that is too large and will definitely take more that one line to render, but with close button this time"
        withCloseButton
        mt="xl"
      >
        Alert body
      </Alert>

      <Alert
        classNames={{ title: 'hello', root: 'there' }}
        title="AlertTitleWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout"
        mt="xl"
      >
        AlertBodyWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout
      </Alert>
    </div>
  ))
  .add('All variants', function renderVariants() {
    return (
      <>
        {types.map((type) => {
          return (
            <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
              <Title mb={'xs'} order={3}>
                {type}
              </Title>
              <Alert
                icon={<XCircleFillIcon size={16} />}
                title="Bummer!"
                color="red"
                type={type}
                variant="info"
              >
                Something terrible happened! You made a mistake and there is no going back, your
                data was lost forever!
              </Alert>
              <Alert icon={<XCircleFillIcon size={16} />} title="Bummer!" variant="success" mt="xl">
                Something terrible happened! You made a mistake and there is no going back, your
                data was lost forever!
              </Alert>
              <Alert
                type={type}
                icon={<XCircleFillIcon size={16} />}
                title="Bummer!"
                variant="warning"
                mt="xl"
              >
                Something terrible happened! You made a mistake and there is no going back, your
                data was lost forever!
              </Alert>

              <Alert
                type={type}
                icon={<XCircleFillIcon size={16} />}
                title="Bummer!"
                variant="danger"
                mt="xl"
              >
                Something terrible happened! You made a mistake and there is no going back, your
                data was lost forever!
              </Alert>
            </div>
          );
        })}
      </>
    );
  })
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Alert: { color: 'cyan', title: 'Context prop' } }}>
      <Alert title="Hello" sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Content
      </Alert>
      <Alert color="red" sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Content
      </Alert>
    </CoengageUIProvider>
  ))
  .add('Default radius on CoengageUIProvider', () => (
    <CoengageUIProvider theme={{ defaultRadius: 'lg' }}>
      <Alert title="Hello" sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Content
      </Alert>
    </CoengageUIProvider>
  ));
