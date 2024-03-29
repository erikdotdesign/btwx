import React, { ReactElement, useEffect, useState } from 'react';
import MenuEditSelectAll from './MenuEditSelectAll';
import MenuEditSelectAllArtboards from './MenuEditSelectAllArtboards';

interface MenuEditSelectProps {
  setSelect(select: any): void;
}

const MenuEditSelect = (props: MenuEditSelectProps): ReactElement => {
  const { setSelect } = props;
  const [menuItemTemplate, setMenuItemTemplate] = useState({
    label: 'Select'
  });
  const [selectAll, setSelectAll] = useState(undefined);
  const [selectAllArtboards, setSelectAllArtboards] = useState(undefined);

  useEffect(() => {
    if (selectAll && selectAllArtboards) {
      setSelect({
        ...menuItemTemplate,
        submenu: [
          selectAll,
          selectAllArtboards
        ]
      });
    }
  }, [selectAll, selectAllArtboards]);

  return (
    <>
      <MenuEditSelectAll
        setSelectAll={setSelectAll} />
      <MenuEditSelectAllArtboards
        setSelectAllArtboards={setSelectAllArtboards} />
    </>
  );
}

export default MenuEditSelect;