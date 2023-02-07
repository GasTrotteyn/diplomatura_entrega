import React from 'react';
import classes from './BasicKit.module.css';
import IconSection from '../../../components/IconsSection/IconsSection';
import iconClock from '../../../Assests/optimized/icon-clock.svg';
import iconSolarPanel from '../../../Assests/optimized/icon-solarpanel.svg';
import iconVentilation from '../../../Assests/optimized/icon-ventilation.svg';
import iconFloor from '../../../Assests/optimized/icon-panels.svg';
import RightPiece from '../../../components/Pieces/RightPiece/RightPiece';
import iconPillow from '../../../Assests/optimized/bg-icon-pillow.png';
import interior from '../../../Assests/optimized/Basic2.PNG';
import LeftPiece from '../../../components/Pieces/LeftPiece/LeftPiece';
import iconSun from '../../../Assests/optimized/bg-icon-sun.png';
import roof from '../../../Assests/optimized/basic2.jpg';
import iconLog from '../../../Assests/optimized/bg-icon-log.png';
import cedar from '../../../Assests/optimized/basic3.jpg';
import iconInterior from '../../../Assests/optimized/icon-interior.svg';
import iconExterior from '../../../Assests/optimized/icon-exterior.svg';
import iconElectrical from '../../../Assests/optimized/icon-electrical.svg';
import Upgrade from '../../UpgradeBasic/Upgrade';
import MoreAdds from '../../../components/MoreAdds/MoreAdds';

const BasicKit = (props) => {
	const { clicked } = props;
	const icons1 = [
		{
			id: 1,
			title: 'Fast Conversion',
			subtitles: ['60 days'],
			src: iconClock,
		},
		{
			id: 2,
			title: 'Solar Power',
			subtitles: ['480w solar panels'],
			src: iconSolarPanel,
		},
		{
			id: 3,
			title: 'Ventilation system',
			subtitles: ['Two ceiling exhaust fans'],
			src: iconVentilation,
		},
		{
			id: 4,
			title: 'Laminate flooring',
			subtitles: ['Easy to clean'],
			src: iconFloor,
		},
	];

	const icons2 = [
		{
			id: 1,
			title: 'Interior',
			subtitles: [
				'Insulation (Foamular)',
				'Two Ceiling Fans (3 Speed)',
				'Laminate Flooring',
				'Cedar Wall Paneling',
				'Simple Bed Frame',
			],
			src: iconInterior,
		},
		{
			id: 2,
			title: 'Exterior',
			subtitles: ['Aluminum Roof Rack'],
			src: iconExterior,
		},
		{
			id: 3,
			title: 'Electrical',
			subtitles: [
				'3 Solar Panels - 160 Watt EA',
				'Two Lithium Batteries - 100 AMP EA',
				'Fuse Box',
				'MPPT Battery Insolator',
				'Electrical Wiring',
				'4 LED lights & switches',
				'3 USB outlets',
			],
			src: iconElectrical,
		},
	];

	return (
		<div className={classes.container}>
			<div className={classes.kitSelector}>
				<div className={classes.buttons}>
					<div className={classes.title}>Basic Conversion</div>
					<div className={classes.buttonGrey} onClick={clicked}>
						Full Conversion
					</div>
				</div>
			</div>
			<div className={classes.price}>Price: $19,000</div>
			<IconSection payload={icons1} oneLine></IconSection>
			<RightPiece
				flag='BASIC CONVERSION PACKAGE'
				title='Just the essentials, practical and comfortable.'
				srcIcon={iconPillow}
				altIcon='pillow icon'
				paragraph1='Get your van life started with our basic conversion package. Customize to your specifications by adding or removing any options.'
				paragraph2='Custom woodwork, custom bed frame, electrical amenities, and a ventilation system controlled by two ceiling exhaust fans will make your next weekend excursion luxurious.'
				srcPhoto={interior}
				altPhoto='interior of a van'
				noButton></RightPiece>
			<LeftPiece
				flag='ENERGY SYSTEM'
				title='Clean and self-sufficient solar energy'
				srcIcon={iconSun}
				altIcon='sun icon'
				paragraph1='Using three 160 Watt solar panels we harness the power of the sun to outfit your van with electricity.'
				paragraph2='After panels charge your two insulated batteries you can run your LED lighting, switches and USB/cigar outlets completely fossil fuel free.'
				srcPhoto={roof}
				altPhoto='roof with solar panels'
				noButton></LeftPiece>
			<RightPiece
				flag='INTERIORS'
				title='Surrounded by insulated cedar paneling.'
				srcIcon={iconLog}
				altIcon='log icon'
				paragraph1='No need to worry if your dirt follows you in after your adventure, your laminate flooring will be easy to clean.'
				paragraph2='Rest comfortably in your custom made bed frame, surrounded by insulated cedar paneling, a cozy retreat from the great outdoors.'
				srcPhoto={cedar}
				altPhoto='interior of a van'
				noButton></RightPiece>
			<IconSection
				withBackground
				oneLine
				title={'What a Basic Conversion includes'}
				payload={icons2}></IconSection>
			<Upgrade></Upgrade>
			<MoreAdds title={'More add-ons'}></MoreAdds>
		</div>
	);
};

export default BasicKit;
