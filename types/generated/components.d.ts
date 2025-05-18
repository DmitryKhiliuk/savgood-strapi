import type { Schema, Struct } from '@strapi/strapi';

export interface SharedChar extends Struct.ComponentSchema {
  collectionName: 'components_shared_chars';
  info: {
    displayName: 'char';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedCharacteristics extends Struct.ComponentSchema {
  collectionName: 'components_shared_characteristics';
  info: {
    description: '';
    displayName: '\u0425\u0430\u0440-\u043A\u0438 \u0442\u0438\u043F1';
  };
  attributes: {
    sensor: Schema.Attribute.Component<'shared.char', false>;
    zoom: Schema.Attribute.Component<'shared.char', false>;
  };
}

export interface SharedHarKiTip2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_har_ki_tip2s';
  info: {
    description: '';
    displayName: '\u0425\u0430\u0440-\u043A\u0438 \u0442\u0438\u043F2';
  };
  attributes: {
    detector: Schema.Attribute.Component<'shared.char', false>;
    other: Schema.Attribute.Component<'shared.char', false>;
  };
}

export interface SharedHarKiTip3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_har_ki_tip3s';
  info: {
    description: '';
    displayName: '\u0425\u0430\u0440-\u043A\u0438 \u0442\u0438\u043F3';
  };
  attributes: {
    detector: Schema.Attribute.Component<'shared.char', false>;
    thermal_lens: Schema.Attribute.Component<'shared.char', false>;
    visible_sensor: Schema.Attribute.Component<'shared.char', false>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.char': SharedChar;
      'shared.characteristics': SharedCharacteristics;
      'shared.har-ki-tip2': SharedHarKiTip2;
      'shared.har-ki-tip3': SharedHarKiTip3;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
    }
  }
}
