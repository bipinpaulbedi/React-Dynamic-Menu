import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import { MenuItemProps } from './MenuItemProps'
import { Link } from "react-router-dom";

const MenuItem: React.FC<MenuItemProps> = ({ label, items, parentPath = '', depthStep = 10, depth = 0, ...rest }) => {
    return (
        <>
            <Link to={`${parentPath}/${label}`}>
                <ListItem button dense {...rest}>
                    <ListItemText style={{ paddingLeft: depth * depthStep }}>
                        <span>{label}</span>
                    </ListItemText>
                </ListItem>
            </Link>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <MenuItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                            parentPath={`${parentPath}/${label}`}
                        />
                    ))}
                </List>
            ) : null}
        </>
    )
}

export default MenuItem
