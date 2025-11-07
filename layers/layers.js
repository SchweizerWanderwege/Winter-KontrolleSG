var wms_layers = [];


    var projection_MapswissTLMcolor_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_MapswissTLMcolor_0 = projection_MapswissTLMcolor_0.getExtent();
    var size_MapswissTLMcolor_0 = ol.extent.getWidth(projectionExtent_MapswissTLMcolor_0) / 256;
    var resolutions_MapswissTLMcolor_0 = new Array(14);
    var matrixIds_MapswissTLMcolor_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_MapswissTLMcolor_0[z] = size_MapswissTLMcolor_0 / Math.pow(2, z);
        matrixIds_MapswissTLMcolor_0[z] = z;
    }
    var lyr_MapswissTLMcolor_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.geo.admin.ch/?VERSION%3D2.0.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swisstlm3d-karte-farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'swissTLM3D Karte',
                            popuplayertitle: 'swisstlm3D Karte',
                            opacity: 1.000000,
                            
                            
                          });
var lyr_Wildruhezonen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.geo.admin.ch/?VERSION%3D2.0.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.wrz-wildruhezonen_portal",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Wildruhezonen',
                            popuplayertitle: 'Wildruhezonen',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_Wildruhezonen_1, 0]);
var lyr_Wanderwege_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.geo.admin.ch/?VERSION%3D2.0.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swisstlm3d-wanderwege",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Wanderwege',
                            popuplayertitle: 'Wanderwege',
                            opacity: 0.7000,
                            
                            
                          });
              wms_layers.push([lyr_Wanderwege_2, 0]);
var lyr_Hochmoore_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.geo.admin.ch/?VERSION%3D2.0.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-hochmoore",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Hochmoore',
                            popuplayertitle: 'Hochmoore',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_Hochmoore_3, 0]);
var format_Winterrouten_SGRouten_4 = new ol.format.GeoJSON();
var features_Winterrouten_SGRouten_4 = format_Winterrouten_SGRouten_4.readFeatures(json_Winterrouten_SGRouten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Winterrouten_SGRouten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Winterrouten_SGRouten_4.addFeatures(features_Winterrouten_SGRouten_4);
var lyr_Winterrouten_SGRouten_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Winterrouten_SGRouten_4, 
                style: style_Winterrouten_SGRouten_4,
                popuplayertitle: 'Winterrouten SG',
                interactive: false,
    title: 'Winterrouten SG<br />\
    <img src="styles/legend/Winterrouten_SGRouten_4_0.png" /> Schneeschuhrouten<br />\
    <img src="styles/legend/Winterrouten_SGRouten_4_1.png" /> Winterwanderwege<br />' });
var format_SG_Winterrouten_nebenWWNetz_5 = new ol.format.GeoJSON();
var features_SG_Winterrouten_nebenWWNetz_5 = format_SG_Winterrouten_nebenWWNetz_5.readFeatures(json_SG_Winterrouten_nebenWWNetz_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SG_Winterrouten_nebenWWNetz_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SG_Winterrouten_nebenWWNetz_5.addFeatures(features_SG_Winterrouten_nebenWWNetz_5);
var lyr_SG_Winterrouten_nebenWWNetz_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SG_Winterrouten_nebenWWNetz_5, 
                style: style_SG_Winterrouten_nebenWWNetz_5,
                popuplayertitle: 'SG Winterrouten neben WW-Netz',
                interactive: true,
                title: '<img src="styles/legend/SG_Winterrouten_nebenWWNetz_5.png" /> SG Winterrouten neben WW-Netz'
            });

lyr_MapswissTLMcolor_0.setVisible(true);lyr_Wildruhezonen_1.setVisible(false);lyr_Wanderwege_2.setVisible(false);lyr_Hochmoore_3.setVisible(false);lyr_Winterrouten_SGRouten_4.setVisible(true);lyr_SG_Winterrouten_nebenWWNetz_5.setVisible(true);
var layersList = [lyr_MapswissTLMcolor_0,lyr_Wildruhezonen_1,lyr_Wanderwege_2,lyr_Hochmoore_3,lyr_Winterrouten_SGRouten_4,lyr_SG_Winterrouten_nebenWWNetz_5];
lyr_Winterrouten_SGRouten_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Abwicklung': 'Abwicklung', 'AOrt': 'AOrt', 'AuspraegR': 'AuspraegR', 'BeschreibR': 'Beschreibung', 'Change_Dt': 'Change_Dt', 'GueltigJ': 'GueltigJ', 'HoeheAbR': 'HoeheAbR', 'HoeheAufR': 'HoeheAufR', 'HoeheMaxR': 'HoeheMaxR', 'HoeheMinR': 'HoeheMinR', 'KonditionR': 'KonditionR', 'LaengeR': 'LaengeR', 'LVRoute_ID': 'LVRoute_ID', 'ReStR': 'ReStR', 'Richtung': 'Richtung', 'Routenart': 'Routenart', 'TechnikR': 'TechnikR', 'NameR': 'Routenname', 'NrR_ID': 'NrR_ID', 'Typ_TR': 'Typ_TR', 'ZeitStZiR': 'ZeitStZiR', 'ZeitZiStR': 'ZeitZiStR', 'ZOrt': 'ZOrt', 'NichtPubFhg': 'NichtPubFhg', 'UnsEtpZiel': 'UnsEtpZiel', 'NrR': 'NrR', 'LvArt': 'LvArt', 'Traeger': 'Trägerschaft', 'TraegerBem': 'TraegerBem', 'IsCHM': 'IsCHM', 'SHAPE_Length': 'SHAPE_Length', });
lyr_SG_Winterrouten_nebenWWNetz_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Abwicklung': 'Abwicklung', 'AOrt': 'AOrt', 'AuspraegR': 'AuspraegR', 'BeschreibR': 'Beschreibung', 'Change_Dt': 'Change_Dt', 'GueltigJ': 'GueltigJ', 'HoeheAbR': 'HoeheAbR', 'HoeheAufR': 'HoeheAufR', 'HoeheMaxR': 'HoeheMaxR', 'HoeheMinR': 'HoeheMinR', 'KonditionR': 'KonditionR', 'LaengeR': 'LaengeR', 'LVRoute_ID': 'LVRoute_ID', 'ReStR': 'ReStR', 'Richtung': 'Richtung', 'Routenart': 'Routenart', 'TechnikR': 'TechnikR', 'NameR': 'Routenname', 'NrR_ID': 'Technische Routennummer', 'Typ_TR': 'Typ_TR', 'ZeitStZiR': 'ZeitStZiR', 'ZeitZiStR': 'ZeitZiStR', 'ZOrt': 'ZOrt', 'NichtPubFhg': 'NichtPubFhg', 'UnsEtpZiel': 'UnsEtpZiel', 'NrR': 'NrR', 'LvArt': 'LvArt', 'Traeger': 'Trägerschaft', 'TraegerBem': 'TraegerBem', 'IsCHM': 'IsCHM', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Winterrouten_SGRouten_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Abwicklung': 'TextEdit', 'AOrt': 'TextEdit', 'AuspraegR': 'TextEdit', 'BeschreibR': 'TextEdit', 'Change_Dt': 'DateTime', 'GueltigJ': 'Range', 'HoeheAbR': 'Range', 'HoeheAufR': 'Range', 'HoeheMaxR': 'Range', 'HoeheMinR': 'Range', 'KonditionR': 'TextEdit', 'LaengeR': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'ReStR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'TechnikR': 'TextEdit', 'NameR': 'TextEdit', 'NrR_ID': 'TextEdit', 'Typ_TR': 'TextEdit', 'ZeitStZiR': 'Range', 'ZeitZiStR': 'Range', 'ZOrt': 'TextEdit', 'NichtPubFhg': 'Range', 'UnsEtpZiel': 'Range', 'NrR': 'TextEdit', 'LvArt': 'TextEdit', 'Traeger': 'TextEdit', 'TraegerBem': 'TextEdit', 'IsCHM': 'Range', 'SHAPE_Length': 'TextEdit', });
lyr_SG_Winterrouten_nebenWWNetz_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Abwicklung': 'TextEdit', 'AOrt': 'TextEdit', 'AuspraegR': 'TextEdit', 'BeschreibR': 'TextEdit', 'Change_Dt': 'DateTime', 'GueltigJ': 'Range', 'HoeheAbR': 'Range', 'HoeheAufR': 'Range', 'HoeheMaxR': 'Range', 'HoeheMinR': 'Range', 'KonditionR': 'TextEdit', 'LaengeR': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'ReStR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'TechnikR': 'TextEdit', 'NameR': 'TextEdit', 'NrR_ID': 'TextEdit', 'Typ_TR': 'TextEdit', 'ZeitStZiR': 'Range', 'ZeitZiStR': 'Range', 'ZOrt': 'TextEdit', 'NichtPubFhg': 'Range', 'UnsEtpZiel': 'Range', 'NrR': 'TextEdit', 'LvArt': 'TextEdit', 'Traeger': 'TextEdit', 'TraegerBem': 'TextEdit', 'IsCHM': 'Range', 'SHAPE_Length': 'TextEdit', });
lyr_Winterrouten_SGRouten_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Abwicklung': 'hidden field', 'AOrt': 'hidden field', 'AuspraegR': 'hidden field', 'BeschreibR': 'hidden field', 'Change_Dt': 'hidden field', 'GueltigJ': 'hidden field', 'HoeheAbR': 'hidden field', 'HoeheAufR': 'hidden field', 'HoeheMaxR': 'hidden field', 'HoeheMinR': 'hidden field', 'KonditionR': 'hidden field', 'LaengeR': 'hidden field', 'LVRoute_ID': 'hidden field', 'ReStR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'TechnikR': 'hidden field', 'NameR': 'hidden field', 'NrR_ID': 'hidden field', 'Typ_TR': 'hidden field', 'ZeitStZiR': 'hidden field', 'ZeitZiStR': 'hidden field', 'ZOrt': 'hidden field', 'NichtPubFhg': 'hidden field', 'UnsEtpZiel': 'hidden field', 'NrR': 'hidden field', 'LvArt': 'hidden field', 'Traeger': 'hidden field', 'TraegerBem': 'hidden field', 'IsCHM': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_SG_Winterrouten_nebenWWNetz_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Abwicklung': 'hidden field', 'AOrt': 'hidden field', 'AuspraegR': 'hidden field', 'BeschreibR': 'inline label - always visible', 'Change_Dt': 'hidden field', 'GueltigJ': 'hidden field', 'HoeheAbR': 'hidden field', 'HoeheAufR': 'hidden field', 'HoeheMaxR': 'hidden field', 'HoeheMinR': 'hidden field', 'KonditionR': 'hidden field', 'LaengeR': 'hidden field', 'LVRoute_ID': 'hidden field', 'ReStR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'TechnikR': 'hidden field', 'NameR': 'header label - always visible', 'NrR_ID': 'header label - always visible', 'Typ_TR': 'hidden field', 'ZeitStZiR': 'hidden field', 'ZeitZiStR': 'hidden field', 'ZOrt': 'hidden field', 'NichtPubFhg': 'hidden field', 'UnsEtpZiel': 'hidden field', 'NrR': 'hidden field', 'LvArt': 'header label - always visible', 'Traeger': 'inline label - always visible', 'TraegerBem': 'hidden field', 'IsCHM': 'inline label - always visible', 'SHAPE_Length': 'hidden field', });
lyr_SG_Winterrouten_nebenWWNetz_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});