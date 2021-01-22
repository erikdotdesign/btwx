import React, { ReactElement, useContext, memo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import FontFamilySelectorItem from './FontFamilySelectorItem';
import { ThemeContext } from './ThemeProvider';

interface FontFamilySelectorItemsProps {
  itemData: { family: string; selected: boolean }[];
}

const FontFamilySelectorItems = (props: FontFamilySelectorItemsProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { itemData } = props;

  const Node = memo(function Node(props: any) {
    const {data, index, style} = props;
    return (
      <FontFamilySelectorItem
        isActive={data[index].selected}
        fontFamily={data[index].family}
        style={style} />
    )
  });

  return (
    <div
      className='c-font-family-selector__items'>
      {
        itemData && itemData.length > 0
        ? <AutoSizer>
            {({height, width}): ReactElement => (
              <List
                itemSize={32}
                height={height}
                itemCount={itemData.length}
                itemData={itemData}
                width={width}>
                { Node }
              </List>
            )}
          </AutoSizer>
        : null
      }
    </div>
  );
}

export default FontFamilySelectorItems;