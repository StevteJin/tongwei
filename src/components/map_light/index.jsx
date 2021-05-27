import React, { useEffect } from "react";
import { createMap, Model } from "../../utils/map3d";

import { Common } from '../../utils/mapMethods';
import { useMappedState,useDispatch } from 'redux-react-hook';
import { cameraList_S,labelLists } from '../../api/mainApi'

import "./style.scss";

const MapLight = (props) => {
  const dispatch = useDispatch();
  const mapUrl = useMappedState((state) => state.mapLight_url);
  useEffect(() => {
    console.log(mapUrl,'createMapcreateMapcreateMapcreateMapcreateMap')
    // if (mapUrl) {
    //   createMapsss("http://" + mapUrl);
    //   console.log('对象url',mapUrl)
    // }
    // eslint-disable-next-line
    createMapsss();
  }, []);
    const createMapsss =(url)=>{
        var map_light = createMap.createMap({
            id: "mapv3dContainer_light",
            url:"http://192.168.0.165:9901",
            projectId: "5nbmjsdljf785208",
            token: "rt2d645ty3eadaed32268mdta6"
        },(()=>{

        }))
    }
  return (
    <div id="mapv3dContainer_light"></div>
  );
};

export default MapLight;
