export interface MenuItemProps {
    label: string;
    name: string;
    items?: Array<MenuItemProps>;
    depthStep?: number;
    depth?: number;
    parentPath?: string
}