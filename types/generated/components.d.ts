import type { Schema, Struct } from '@strapi/strapi';

export interface SharedColors extends Struct.ComponentSchema {
  collectionName: 'components_shared_colors';
  info: {
    displayName: 'colors';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Black'>;
    images: Schema.Attribute.Enumeration<
      [
        '"https://cdn.shopify.com/s/files/1/0293/9277/files/10-18-24_S7_14_FNMK144_Black_P_CZ_DJ_10-16-39_26592_BH.jpg?v=1729629330&width=800&height=1200&crop=center"',
        '"https://cdn.shopify.com/s/files/1/0293/9277/files/10-18-24_S7_14_FNMK144_Black_P_CZ_DJ_10-16-22_26585_BH.jpg?v=1729629330&width=800&height=1200&crop=center"',
      ]
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.colors': SharedColors;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
