import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetSingerDetailsQuery } from '../redux/services/shazamCore'; // Updated query function

const SingerDetails = () => {
  const { id: singerId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: singerData, isFetching: isFetchingSingerDetails, error } = useGetSingerDetailsQuery(singerId); // Updated query function

  if (isFetchingSingerDetails) return <Loader title="Loading singer details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        singerId={singerId} // Updated variable name
        singerData={singerData?.data[0]} // Updated variable name
      />

      <RelatedSongs
        data={singerData?.data[0].views['top-songs']?.data} // Updated variable name
        singerId={singerId} // Updated variable name
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default SingerDetails; // Updated component name
