/**
 * Hero Banner Block
 * 
 * Registers the Hero Banner block with WordPress
 */

import { registerBlockType } from '@wordpress/blocks';
import HeroBannerEdit from './edit';
import HeroBannerSave from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
  ...metadata,
  edit: HeroBannerEdit,
  save: HeroBannerSave,
} );

console.log( '[Moraqmen Blocks] Hero Banner block registered' );
