export interface ICustomListItem {
    icon?: ICustomListItemIcon;
    text: string;
}

interface ICustomListItemIcon {
    icon: React.ReactNode;
    iconType?: CustomListItemIconType;
}

export enum CustomListItemIconType {
    INFO = 'info',
    ERROR = 'error',
    SUCCESS = 'success',
}

export type CustomListType = 'light' | 'dark';