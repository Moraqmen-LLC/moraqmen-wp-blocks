/**
 * Feature Cards Block - Save Component
 * Renders the saved (serialized) version of Feature Cards for the frontend
 */

import { useBlockProps } from '@wordpress/block-editor';

/**
 * Save component for the Feature Cards block
 * @param {Object} props - Block properties
 * @param {Object} props.attributes - Block attributes
 * @returns {JSX.Element} Rendered block markup for frontend
 */
const FeatureCardsSave = ({ attributes }) => {
	const {
		cards = [],
		cardsPerRow = 3,
		gap = 'md',
		borderRadius = 'md',
		enableHover = true,
		backgroundColor = '#ffffff',
		textColor = '#000000',
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `feature-cards-block gap-${gap} border-radius-${borderRadius} ${enableHover ? 'enable-hover' : ''}`,
	});

	const gridClass = `grid grid-cols-1 md:grid-cols-${cardsPerRow} gap-${gap === 'sm' ? '4' : gap === 'md' ? '6' : '8'}`;

	return (
		<div {...blockProps}>
			<div className={gridClass}>
				{cards.map((card) => (
					<div
						key={card.id}
						className={`feature-card rounded-${borderRadius === 'sm' ? 'lg' : borderRadius === 'md' ? 'xl' : '2xl'} overflow-hidden transition-transform duration-300 ${
							enableHover ? 'hover:shadow-lg hover:scale-105' : ''
						}`}
						style={{
							backgroundColor: backgroundColor,
							color: textColor,
						}}
					>
						<div className="feature-card-inner p-6 md:p-8">
							{card.icon && (
								<div className="feature-card-icon mb-4 text-4xl">
									<span
										className={`icon icon-${card.icon}`}
										style={{ color: card.iconColor || textColor }}
									></span>
								</div>
							)}
							<h3 className="text-lg md:text-xl font-bold mb-2">
								{card.title || 'Feature'}
							</h3>
							<p className="text-sm md:text-base leading-relaxed">
								{card.description || 'Feature description'}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureCardsSave;
