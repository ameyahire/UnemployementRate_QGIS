var wms_layers = [];

var format_Refactored_0 = new ol.format.GeoJSON();
var features_Refactored_0 = format_Refactored_0.readFeatures(json_Refactored_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_0.addFeatures(features_Refactored_0);
var lyr_Refactored_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_0, 
                style: style_Refactored_0,
                interactive: false,
    title: 'Refactored<br />\
    <img src="styles/legend/Refactored_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Refactored_0_1.png" /> 0 - 2.1<br />\
    <img src="styles/legend/Refactored_0_2.png" /> 2.1 - 10.1<br />\
    <img src="styles/legend/Refactored_0_3.png" /> 10.1 - 20<br />\
    <img src="styles/legend/Refactored_0_4.png" /> 20 - 74.5<br />'
        });

lyr_Refactored_0.setVisible(true);
var layersList = [lyr_Refactored_0];
lyr_Refactored_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Date': 'Date', 'Estimated': 'Estimated', 'Estimate_1': 'Estimate_1', 'Estimate_2': 'Estimate_2', 'Area': 'Area', });
lyr_Refactored_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Date': 'TextEdit', 'Estimated': 'TextEdit', 'Estimate_1': 'TextEdit', 'Estimate_2': 'TextEdit', 'Area': 'TextEdit', });
lyr_Refactored_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'inline label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Date': 'inline label', 'Estimated': 'inline label', 'Estimate_1': 'inline label', 'Estimate_2': 'inline label', 'Area': 'inline label', });
lyr_Refactored_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});