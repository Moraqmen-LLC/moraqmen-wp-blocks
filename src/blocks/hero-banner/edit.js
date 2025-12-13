/**
 * Hero Banner Edit Component
 */

import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, RangeControl } from '@wordpress/components';

const HeroBannerEdit = ( { attributes, setAttributes } ) => {
  const { headline, subheadline, ctaText, ctaUrl, backgroundImageUrl, overlayOpacity } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Hero Settings', 'moraqmen-blocks' ) }>
          <TextControl
            label={ __( 'CTA URL', 'moraqmen-blocks' ) }
            value={ ctaUrl }
            onChange={ ( value ) => setAttributes( { ctaUrl: value } ) }
          />
          <RangeControl
            label={ __( 'Overlay Opacity', 'moraqmen-blocks' ) }
            value={ overlayOpacity }
            onChange={ ( value ) => setAttributes( { overlayOpacity: value } ) }
            min={ 0 }
            max={ 1 }
            step={ 0.1 }
          />
          <MediaUpload
            onSelect={ ( media ) => setAttributes( { backgroundImageUrl: media.url } ) }
            allowedTypes={ [ 'image' ] }
            render={ ( { open } ) => (
              <Button onClick={ open } variant="primary">
                { __( 'Select Background Image', 'moraqmen-blocks' ) }
              </Button>
            ) }
          />
        </PanelBody>
      </InspectorControls>

      <div className="moraqmen-hero" style={ { backgroundImage: `url(${ backgroundImageUrl })` } }>
        <RichText
          tagName="h1"
          value={ headline }
          onChange={ ( value ) => setAttributes( { headline: value } ) }
          placeholder={ __( 'Enter headline...', 'moraqmen-blocks' ) }
        />
        <RichText
          tagName="p"
          value={ subheadline }
          onChange={ ( value ) => setAttributes( { subheadline: value } ) }
          placeholder={ __( 'Enter subheadline...', 'moraqmen-blocks' ) }
        />
      </div>
    </>
  );
};

export default HeroBannerEdit;
