var map = new ol.Map({
                     target: 'map',
                     layers: [
                              new ol.layer.Tile({source: new ol.source.OSM()})
                              ],
                     view: new ol.View({
                                       center: ol.proj.fromLonLat([114.2, 22.4]),
                                       zoom: 10
                                       })
                     });