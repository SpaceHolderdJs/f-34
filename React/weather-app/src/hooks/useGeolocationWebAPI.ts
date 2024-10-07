import { useEffect, useState } from "react";

type CoordsType = {
    lat: string;
    lon: string;
};

export const useGeolocationWebAPI = () => {
    const [coords, setCoords] = useState<CoordsType | undefined>();

    useEffect(() => {
        if ("geolocation" in window.navigator) {
            window.navigator.geolocation.getCurrentPosition(
                ({ coords }) =>
                    setCoords({ lat: `${coords.latitude}`, lon: `${coords.longitude}` }),
                (err) => console.log(err)
            );
        }
    }, []);

    return coords;
};
