var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
      highlightLayer.setStyle({
        color: '#ffff00',
      });
    } else {
      highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
      });
    }
}
var map = L.map('map', {
    zoomControl:false, maxZoom:28, minZoom:1
}).fitBounds([[36.56754925716692,-4.902589916947724],[55.59479016947721,10.532641083052278]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
 var tempDiv = document.createElement('div');
 tempDiv.innerHTML = content;
 var rows = tempDiv.querySelectorAll('tr');
 for (var i = 0; i < rows.length; i++) {
     var td = rows[i].querySelector('td.visible-with-data');
     var key = td ? td.id : '';
     if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
         rows[i].parentNode.removeChild(rows[i]);
     }
 }
 return tempDiv.innerHTML;
}
// add class to format popup if it contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    if (tempDiv.querySelector('td img')) {
        popup._contentNode.classList.add('media');
            // Delay to force the redraw
            setTimeout(function() {
                popup.update();
            }, 10);
    } else {
        popup._contentNode.classList.remove('media');
    }
}
var zoomControl = L.control.zoom({
    position: 'topleft'
}).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_ESRIOcean_0');
map.getPane('pane_ESRIOcean_0').style.zIndex = 400;
var layer_ESRIOcean_0 = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRIOcean_0',
    opacity: 0.5,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_ESRIOcean_0;
map.addLayer(layer_ESRIOcean_0);
function pop_contourdesdepartements_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['code'] !== null ? autolinker.link(feature.properties['code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['nom'] !== null ? autolinker.link(feature.properties['nom'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_contourdesdepartements_1_0() {
    return {
        pane: 'pane_contourdesdepartements_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fillOpacity: 0,
        interactive: false,
    }
}
map.createPane('pane_contourdesdepartements_1');
map.getPane('pane_contourdesdepartements_1').style.zIndex = 401;
map.getPane('pane_contourdesdepartements_1').style['mix-blend-mode'] = 'normal';
var layer_contourdesdepartements_1 = new L.geoJson(json_contourdesdepartements_1, {
    attribution: '',
    interactive: false,
    dataVar: 'json_contourdesdepartements_1',
    layerName: 'layer_contourdesdepartements_1',
    pane: 'pane_contourdesdepartements_1',
    onEachFeature: pop_contourdesdepartements_1,
    style: style_contourdesdepartements_1_0,
});
bounds_group.addLayer(layer_contourdesdepartements_1);
map.addLayer(layer_contourdesdepartements_1);
function pop_154circonscriptionslegislativesp10_1_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field18'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field18'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_154circonscriptionslegislativesp10_1_2_0(feature) {
    switch(String(feature.properties['q2wHide_Candidats RN (1) (2) — Feuille 1_Field14'])) {
        case 'affilié à des régimes autoritaires':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,71,1,1.0)',
        interactive: true,
    }
            break;
        case 'climatosceptique':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(102,204,0,1.0)',
        interactive: true,
    }
            break;
        case 'complotiste':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,145,220,1.0)',
        interactive: true,
    }
            break;
        case 'complotiste ':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,145,220,1.0)',
        interactive: true,
    }
            break;
        case 'conspirationniste':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,145,220,1.0)',
        interactive: true,
    }
            break;
        case 'contre votre santé':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(208,197,95,1.0)',
        interactive: true,
    }
            break;
        case 'coupable de fraude':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(204,17,0,1.0)',
        interactive: true,
    }
            break;
        case 'fraude':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(204,17,0,1.0)',
        interactive: true,
    }
            break;
        case 'homophobe':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(134,42,0,1.0)',
        interactive: true,
    }
            break;
        case 'homophobie':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(134,42,0,1.0)',
        interactive: true,
    }
            break;
        case 'négationniste':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(169,194,208,1.0)',
        interactive: true,
    }
            break;
        case 'opposé aux droits des femmes':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(182,46,114,1.0)',
        interactive: true,
    }
            break;
        case 'opposé aux droits des femmes ':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(182,46,114,1.0)',
        interactive: true,
    }
            break;
        case 'raciste et antisémite':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(56,143,194,1.0)',
        interactive: true,
    }
            break;
        case 'raciste et antisémite ':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(56,143,194,1.0)',
        interactive: true,
    }
            break;
        case 'sexiste':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(209,112,56,1.0)',
        interactive: true,
    }
            break;
        case 'suprémaciste':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(36,25,191,1.0)',
        interactive: true,
    }
            break;
        case 'un peu de tout':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(59,19,19,1.0)',
        interactive: true,
    }
            break;
        case 'violence':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(36,114,48,1.0)',
        interactive: true,
    }
            break;
        case 'violent':
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(36,114,48,1.0)',
        interactive: true,
    }
            break;
        default:
            return {
        pane: 'pane_154circonscriptionslegislativesp10_1_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(214,141,107,1.0)',
        interactive: true,
    }
            break;
    }
}
map.createPane('pane_154circonscriptionslegislativesp10_1_2');
map.getPane('pane_154circonscriptionslegislativesp10_1_2').style.zIndex = 402;
map.getPane('pane_154circonscriptionslegislativesp10_1_2').style['mix-blend-mode'] = 'normal';
var layer_154circonscriptionslegislativesp10_1_2 = new L.geoJson(json_154circonscriptionslegislativesp10_1_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_154circonscriptionslegislativesp10_1_2',
    layerName: 'layer_154circonscriptionslegislativesp10_1_2',
    pane: 'pane_154circonscriptionslegislativesp10_1_2',
    onEachFeature: pop_154circonscriptionslegislativesp10_1_2,
    style: style_154circonscriptionslegislativesp10_1_2_0,
});
bounds_group.addLayer(layer_154circonscriptionslegislativesp10_1_2);
map.addLayer(layer_154circonscriptionslegislativesp10_1_2);
function pop_dejaelus154__circonscriptionslegislativesp10_1_3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_dejaelus154__circonscriptionslegislativesp10_1_3_0() {
    return {
        pane: 'pane_dejaelus154__circonscriptionslegislativesp10_1_3',
        opacity: 1,
        color: 'rgba(168,104,40,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_dejaelus154__circonscriptionslegislativesp10_1_3');
map.getPane('pane_dejaelus154__circonscriptionslegislativesp10_1_3').style.zIndex = 403;
map.getPane('pane_dejaelus154__circonscriptionslegislativesp10_1_3').style['mix-blend-mode'] = 'normal';
var layer_dejaelus154__circonscriptionslegislativesp10_1_3 = new L.geoJson(json_dejaelus154__circonscriptionslegislativesp10_1_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_dejaelus154__circonscriptionslegislativesp10_1_3',
    layerName: 'layer_dejaelus154__circonscriptionslegislativesp10_1_3',
    pane: 'pane_dejaelus154__circonscriptionslegislativesp10_1_3',
    onEachFeature: pop_dejaelus154__circonscriptionslegislativesp10_1_3,
    style: style_dejaelus154__circonscriptionslegislativesp10_1_3_0,
});
bounds_group.addLayer(layer_dejaelus154__circonscriptionslegislativesp10_1_3);
map.addLayer(layer_dejaelus154__circonscriptionslegislativesp10_1_3);
function pop_circopivot154__circonscriptionslegislativesp10_1_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field3'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field4'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field5'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field6'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field7'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field8'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field9'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field10'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field11'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field13'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field17'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field17'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field18'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field18'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field19'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field20'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field21'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field22'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field23'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field24'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field25'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'] !== null ? autolinker.link(feature.properties['Candidats RN (1) (2) — Feuille 1_Field26'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_circopivot154__circonscriptionslegislativesp10_1_4_0() {
    return {
        pane: 'pane_circopivot154__circonscriptionslegislativesp10_1_4',
        opacity: 1,
        color: 'rgba(246,233,55,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_circopivot154__circonscriptionslegislativesp10_1_4');
map.getPane('pane_circopivot154__circonscriptionslegislativesp10_1_4').style.zIndex = 404;
map.getPane('pane_circopivot154__circonscriptionslegislativesp10_1_4').style['mix-blend-mode'] = 'normal';
var layer_circopivot154__circonscriptionslegislativesp10_1_4 = new L.geoJson(json_circopivot154__circonscriptionslegislativesp10_1_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_circopivot154__circonscriptionslegislativesp10_1_4',
    layerName: 'layer_circopivot154__circonscriptionslegislativesp10_1_4',
    pane: 'pane_circopivot154__circonscriptionslegislativesp10_1_4',
    onEachFeature: pop_circopivot154__circonscriptionslegislativesp10_1_4,
    style: style_circopivot154__circonscriptionslegislativesp10_1_4_0,
});
bounds_group.addLayer(layer_circopivot154__circonscriptionslegislativesp10_1_4);
map.addLayer(layer_circopivot154__circonscriptionslegislativesp10_1_4);
setBounds();
map.addControl(new L.Control.Search({
    layer: layer_154circonscriptionslegislativesp10_1_2,
    initial: false,
    hideMarkerOnCollapse: true,
    propertyName: 'Candidats RN (1) (2) — Feuille 1_Field3'}));
document.getElementsByClassName('search-button')[0].className +=
 ' fa fa-binoculars';
