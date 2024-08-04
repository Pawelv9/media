import Button from "./Button";
import React from 'react';
import ExpandablePanel from "./ExpendablePanel";
import {GoTrashcan} from "react-icons/go";
import {useFetchAlbumsQuery, useRemoveAlbumMutation} from "../store";

function AlbumsListItem({album}) {
    const [removeAlbum, results] = useFetchAlbumsQuery();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = (
        <>
            <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveAlbum}><GoTrashcan/></Button>
            {album.title}
        </>
);

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos in the album
        </ExpandablePanel>
    )
}

export default AlbumsListItem;