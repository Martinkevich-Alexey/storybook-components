import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Components from '../../../../src/components';

const Dropdown = Components.Dropdowns.Dropdown;
const RegularItem = Components.Dropdowns.RegularItem;
const RegularHeader = Components.Dropdowns.RegularHeader;
const ButtonHeader = Components.Dropdowns.ButtonHeader;
const InlineHeader = Components.Dropdowns.InlineHeader;

export default storiesOf('Dropdown', module)
  .add('With regular items', () =>
    <Dropdown onItemClick={action('Item clicked')} header='Plain text header'>
      <RegularItem key='Item 1'
        text='Some text' />
      <RegularItem key='Item 2'
        text='Some long long long long long long long long long text' />
      <RegularItem key='Item 3'
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem key='Item 4'
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem key='Item 5'
        text='👁 Some text with utf icon' />
      <RegularItem key='Item 6'
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With regular header', () =>
    <Dropdown onItemClick={action('Item clicked')}
     header={<RegularHeader text='Regular header' />}>
      <RegularItem
        text='Some text' />
      <RegularItem
        text='Some long long long long long long long long long text' />
      <RegularItem
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        text='👁 Some text with utf icon' />
      <RegularItem
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With button header', () =>
    <Dropdown onItemClick={action('Item clicked')}
     header={<ButtonHeader text='Button header' />}>
      <RegularItem
        text='Some text' />
      <RegularItem
        text='Some long long long long long long long long long text' />
      <RegularItem
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        text='👁 Some text with utf icon' />
      <RegularItem
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With inline header', () =>
    <Dropdown onItemClick={action('Item clicked')}
     header={<InlineHeader text='Inline header' />}>
      <RegularItem
        text='Some text' />
      <RegularItem
        text='Some long long long long long long long long long text' />
      <RegularItem
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        text='👁 Some text with utf icon' />
      <RegularItem
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)