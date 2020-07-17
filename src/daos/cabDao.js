import CabLocations from '../models/CabLocation';
import { distance } from '../../utils/distance';

export const getAllCabs = async sourceLocation => {
  const { sourceLatitude, sourceLongitude } = sourceLocation;

  const cabs = [];

  CabLocations.findAll().then(
    cabLocation =>
      distance(
        cabLocation.cab_latititude,
        cabLocation.cab_longitude,
        sourceLatitude,
        sourceLongitude
      ) && cabs.push(cabLocation)
  );

  return cabs;
};
