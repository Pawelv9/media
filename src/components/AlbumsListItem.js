import ExpendablePanel from "./ExpendablePanel";
import Button from "./Button";

import React from 'react';
import ExpandablePanel from "./ExpendablePanel";
import {GoTrashcan} from "react-icons/go";

function AlbumsListItem({album}) {
    const header = <div>
        <Button><GoTrashcan/></Button>
        {album.title}
    </div>;

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos in the album
        </ExpandablePanel>
    )
}

export default AlbumsListItem;