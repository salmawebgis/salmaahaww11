var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasAdministrasiKelurahan_3 = new ol.format.GeoJSON();
var features_BatasAdministrasiKelurahan_3 = format_BatasAdministrasiKelurahan_3.readFeatures(json_BatasAdministrasiKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKelurahan_3.addFeatures(features_BatasAdministrasiKelurahan_3);
var lyr_BatasAdministrasiKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKelurahan_3, 
                style: style_BatasAdministrasiKelurahan_3,
                popuplayertitle: 'Batas Administrasi Kelurahan',
                interactive: true,
    title: 'Batas Administrasi Kelurahan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_0.png" /> Alamjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_1.png" /> Batuceper<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_2.png" /> Batujaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_3.png" /> Batusari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_4.png" /> Bencongan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_5.png" /> Benda<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_6.png" /> Blendung<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_7.png" /> Bojongjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_8.png" /> Bugel<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_9.png" /> Cibodas<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_10.png" /> Cibodasbaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_11.png" /> Cibodassari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_12.png" /> Cikokol<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_13.png" /> Cimone<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_14.png" /> Cimonejaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_15.png" /> Cipadu<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_16.png" /> Cipadujaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_17.png" /> Cipete<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_18.png" /> Cipondoh<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_19.png" /> Gaga<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_20.png" /> Gandasari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_21.png" /> Gebangraya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_22.png" /> Gembor<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_23.png" /> Gerendeng<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_24.png" /> Gondrong<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_25.png" /> Jatake<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_26.png" /> Jatiuwung<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_27.png" /> Jurumudi<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_28.png" /> Jurumudibaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_29.png" /> Kaongjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_30.png" /> Karang Tengah<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_31.png" /> Karang Timur<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_32.png" /> Karanganyar<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_33.png" /> Karangmulya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_34.png" /> Karangsari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_35.png" /> Karawaci<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_36.png" /> Karawacibaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_37.png" /> Kebon Besar<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_38.png" /> Kedaung Wetan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_39.png" /> Kedaungbaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_40.png" /> Keroncong<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_41.png" /> Kreo<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_42.png" /> Kreo Selatan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_43.png" /> Kunciran<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_44.png" /> Larangan Selatan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_45.png" /> Larangan Utara<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_46.png" /> Laranganindah<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_47.png" /> Manisjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_48.png" /> Margasari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_49.png" /> Mekarsari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_50.png" /> Nambojaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_51.png" /> Neglasari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_52.png" /> Nusajaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_53.png" /> Pabuaran<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_54.png" /> Pabuarantumpeng<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_55.png" /> Padurenan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_56.png" /> Pajang<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_57.png" /> Paninggilan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_58.png" /> Paninggilan Utara<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_59.png" /> Panunggangan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_60.png" /> Panunggangan Barat<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_61.png" /> Parungjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_62.png" /> Parungserab<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_63.png" /> Pasarbaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_64.png" /> Pasirjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_65.png" /> Periuk<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_66.png" /> Periukjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_67.png" /> Petir<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_68.png" /> Pinang<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_69.png" /> Pondokbahar<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_70.png" /> Porisgaga<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_71.png" /> Porisgagabaru<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_72.png" /> Porisjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_73.png" /> Porisplawad<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_74.png" /> Sangiangjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_75.png" /> Selapajangjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_76.png" /> Sudimara Barat<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_77.png" /> Sudimara Selatan<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_78.png" /> Sudimara Timur<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_79.png" /> Sudimarajaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_80.png" /> Sukajadi<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_81.png" /> Sukarasa<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_82.png" /> Sukasari<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_83.png" /> Sumurpancing<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_84.png" /> Tajur<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_85.png" /> Tanahtinggi<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_86.png" /> Uwungjaya<br />\
    <img src="styles/legend/BatasAdministrasiKelurahan_3_87.png" /> <br />' });
var format_BatasAdministrasiKecamatan_4 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_4 = format_BatasAdministrasiKecamatan_4.readFeatures(json_BatasAdministrasiKecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_4.addFeatures(features_BatasAdministrasiKecamatan_4);
var lyr_BatasAdministrasiKecamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_4, 
                style: style_BatasAdministrasiKecamatan_4,
                popuplayertitle: 'Batas Administrasi Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_4.png" /> Batas Administrasi Kecamatan'
            });
var format_JalanTangerang_5 = new ol.format.GeoJSON();
var features_JalanTangerang_5 = format_JalanTangerang_5.readFeatures(json_JalanTangerang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanTangerang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanTangerang_5.addFeatures(features_JalanTangerang_5);
var lyr_JalanTangerang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanTangerang_5, 
                style: style_JalanTangerang_5,
                popuplayertitle: 'Jalan Tangerang',
                interactive: true,
    title: 'Jalan Tangerang<br />\
    <img src="styles/legend/JalanTangerang_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JalanTangerang_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalanTangerang_5_2.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />' });
var format_Puskesmas_6 = new ol.format.GeoJSON();
var features_Puskesmas_6 = format_Puskesmas_6.readFeatures(json_Puskesmas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_6.addFeatures(features_Puskesmas_6);
var lyr_Puskesmas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_6, 
                style: style_Puskesmas_6,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_6.png" /> Puskesmas'
            });
var format_RumahSakit_7 = new ol.format.GeoJSON();
var features_RumahSakit_7 = format_RumahSakit_7.readFeatures(json_RumahSakit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_7.addFeatures(features_RumahSakit_7);
var lyr_RumahSakit_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_7, 
                style: style_RumahSakit_7,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_7.png" /> Rumah Sakit'
            });

lyr_ESRIGraydark_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_ESRISatellite_2.setVisible(true);lyr_BatasAdministrasiKelurahan_3.setVisible(true);lyr_BatasAdministrasiKecamatan_4.setVisible(true);lyr_JalanTangerang_5.setVisible(true);lyr_Puskesmas_6.setVisible(true);lyr_RumahSakit_7.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_OSMStandard_1,lyr_ESRISatellite_2,lyr_BatasAdministrasiKelurahan_3,lyr_BatasAdministrasiKecamatan_4,lyr_JalanTangerang_5,lyr_Puskesmas_6,lyr_RumahSakit_7];
lyr_BatasAdministrasiKelurahan_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasAdministrasiKecamatan_4.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_JalanTangerang_5.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Puskesmas_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_RumahSakit_7.set('fieldAliases', {'namobj': 'namobj', 'rsalamat': 'rsalamat', 'jplyrs': 'jplyrs', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', });
lyr_BatasAdministrasiKelurahan_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_4.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_JalanTangerang_5.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Puskesmas_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'JPLPKM': 'TextEdit', 'KMPPKM': 'TextEdit', 'PKMKAT': 'TextEdit', 'PKMKODE': 'TextEdit', 'PKMLMT': 'TextEdit', 'KWKPKM': 'TextEdit', });
lyr_RumahSakit_7.set('fieldImages', {'namobj': 'TextEdit', 'rsalamat': 'TextEdit', 'jplyrs': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', });
lyr_BatasAdministrasiKelurahan_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasAdministrasiKecamatan_4.set('fieldLabels', {'WADMKC': 'no label', });
lyr_JalanTangerang_5.set('fieldLabels', {'REMARK': 'no label', });
lyr_Puskesmas_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'JPLPKM': 'no label', 'KMPPKM': 'no label', 'PKMKAT': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', 'KWKPKM': 'no label', });
lyr_RumahSakit_7.set('fieldLabels', {'namobj': 'inline label - visible with data', 'rsalamat': 'no label', 'jplyrs': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', });
lyr_RumahSakit_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});