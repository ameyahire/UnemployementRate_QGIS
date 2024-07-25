var wms_layers = [];

var format_IND_adm0_0 = new ol.format.GeoJSON();
var features_IND_adm0_0 = format_IND_adm0_0.readFeatures(json_IND_adm0_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm0_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm0_0.addFeatures(features_IND_adm0_0);
var lyr_IND_adm0_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm0_0, 
                style: style_IND_adm0_0,
                interactive: true,
                title: '<img src="styles/legend/IND_adm0_0.png" /> IND_adm0'
            });
var format_IND_adm1_1 = new ol.format.GeoJSON();
var features_IND_adm1_1 = format_IND_adm1_1.readFeatures(json_IND_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_1.addFeatures(features_IND_adm1_1);
var lyr_IND_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm1_1, 
                style: style_IND_adm1_1,
                interactive: true,
                title: '<img src="styles/legend/IND_adm1_1.png" /> IND_adm1'
            });
var format_Refactored_2 = new ol.format.GeoJSON();
var features_Refactored_2 = format_Refactored_2.readFeatures(json_Refactored_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_2.addFeatures(features_Refactored_2);
var lyr_Refactored_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_2, 
                style: style_Refactored_2,
                interactive: true,
    title: 'Refactored<br />\
    <img src="styles/legend/Refactored_2_0.png" /> 0 - 2.6<br />\
    <img src="styles/legend/Refactored_2_1.png" /> 2.6 - 8.9<br />\
    <img src="styles/legend/Refactored_2_2.png" /> 8.9 - 16.8<br />\
    <img src="styles/legend/Refactored_2_3.png" /> 16.8 - 20.4<br />\
    <img src="styles/legend/Refactored_2_4.png" /> 20.4 - 74.5<br />'
        });

lyr_IND_adm0_0.setVisible(true);lyr_IND_adm1_1.setVisible(true);lyr_Refactored_2.setVisible(true);
var layersList = [lyr_IND_adm0_0,lyr_IND_adm1_1,lyr_Refactored_2];
lyr_IND_adm0_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'OBJECTID_1': 'OBJECTID_1', 'ISO3': 'ISO3', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', });
lyr_IND_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Unemployment in India1_Date': 'Unemployment in India1_Date', 'Unemployment in India1_Estimated Unemployment Rate (%)': 'Unemployment in India1_Estimated Unemployment Rate (%)', 'Unemployment in India1_Estimated Employed': 'Unemployment in India1_Estimated Employed', 'Unemployment in India1_Estimated Labour Participation Rate (%)': 'Unemployment in India1_Estimated Labour Participation Rate (%)', 'Unemployment in India1_Area': 'Unemployment in India1_Area', });
lyr_Refactored_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Date': 'Date', 'Estimated Unemployment Rate (%)': 'Estimated Unemployment Rate (%)', 'Estimated Employed': 'Estimated Employed', 'Estimated Labour Participation Rate (%)': 'Estimated Labour Participation Rate (%)', 'Area': 'Area', });
lyr_IND_adm0_0.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'OBJECTID_1': '', 'ISO3': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', });
lyr_IND_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Unemployment in India1_Date': 'TextEdit', 'Unemployment in India1_Estimated Unemployment Rate (%)': 'TextEdit', 'Unemployment in India1_Estimated Employed': 'TextEdit', 'Unemployment in India1_Estimated Labour Participation Rate (%)': 'TextEdit', 'Unemployment in India1_Area': 'TextEdit', });
lyr_Refactored_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Date': 'TextEdit', 'Estimated Unemployment Rate (%)': 'TextEdit', 'Estimated Employed': 'TextEdit', 'Estimated Labour Participation Rate (%)': 'TextEdit', 'Area': 'TextEdit', });
lyr_IND_adm0_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'OBJECTID_1': 'no label', 'ISO3': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', });
lyr_IND_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Unemployment in India1_Date': 'no label', 'Unemployment in India1_Estimated Unemployment Rate (%)': 'no label', 'Unemployment in India1_Estimated Employed': 'no label', 'Unemployment in India1_Estimated Labour Participation Rate (%)': 'no label', 'Unemployment in India1_Area': 'no label', });
lyr_Refactored_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'header label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Date': 'inline label', 'Estimated Unemployment Rate (%)': 'inline label', 'Estimated Employed': 'inline label', 'Estimated Labour Participation Rate (%)': 'inline label', 'Area': 'inline label', });
lyr_Refactored_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});