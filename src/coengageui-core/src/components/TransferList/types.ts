import { CoengageUINumberSize } from 'coengageui_styles';

export interface TransferListItem {
  value: string;
  label: string;
  group?: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];

export interface TransferListItemComponentProps {
  data: TransferListItem;
  selected: boolean;
  radius: CoengageUINumberSize;
}

export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
