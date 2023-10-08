import { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from 'expo-permissions';


export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION); 
      if (status !== "granted") return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
