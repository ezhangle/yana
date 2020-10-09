import * as React from 'react';
import { SearchView } from '../mainContent/searchView/SearchView';
import { InternalTag } from '../../datasource/InternalTag';

export const DraftItems: React.FC<{}> = props => {
  return (
    <SearchView
      title="Draft Items"
      icon="edit"
      hiddenSearch={{ tags: [InternalTag.Draft], notTags: [InternalTag.Trash] }}
      defaultSearch={{}}
    />
  );
};
