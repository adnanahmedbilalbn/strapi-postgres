import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryComponent1 extends Schema.Component {
  collectionName: 'components_category_component1s';
  info: {
    icon: 'angry';
    displayName: 'Component1';
  };
  attributes: {
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.component1': CategoryComponent1;
    }
  }
}
