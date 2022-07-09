import DeckTwoToneIcon from '@mui/icons-material/DeckTwoTone';
// TODO: When summer ends => add this icons to HOME label
// import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import CameraRollTwoToneIcon from '@mui/icons-material/CameraRollTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

export const mainNavbarItem = [
	{
		id: 0,
		icon: <DeckTwoToneIcon />,
		label: 'Home',
		route: 'route'
	},
	{
		id: 1,
		icon: <LiveTvTwoToneIcon />,
		label: 'Live',
		route: 'route'
	},
	{
		id: 2,
		icon: <CameraRollTwoToneIcon />,
		label: 'Videos',
		route: 'route'
	},
	{
		id: 3,
		icon: <InfoTwoToneIcon />,
		label: 'About',
		route: 'route'
	}
];