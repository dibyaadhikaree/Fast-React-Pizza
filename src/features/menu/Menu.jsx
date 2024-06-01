/* eslint-disable react-refresh/only-export-components */
import { getMenu } from "../../services/apiRestaurant";

import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { memo } from "react";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200  px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default memo(Menu);
