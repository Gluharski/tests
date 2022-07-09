import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { mainNavbarItem } from '../constants/navbarListItems';
import { useParams, useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();
	const drawerWidth = 240;

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					backgroundColor: '#101F33',
					color: 'rgba(255, 255, 255, 0.7)'
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar />
			<Divider />
			<List>
				{mainNavbarItem.map(item => (
					<ListItem
						button
						key={item.id}
						onClick={() => navigate(item.route)}
					>
						<ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)'}}>
							{item.icon}
						</ListItemIcon>
						<ListItemText primary={item.label} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Navbar;