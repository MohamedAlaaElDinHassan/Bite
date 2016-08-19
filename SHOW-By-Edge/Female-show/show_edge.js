/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_004',
                type: 'image',
                rect: ['0px', '0px','1000px','200px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"004.jpg",'0px','0px']
            },
            {
                id: '_003',
                type: 'image',
                rect: ['0px', '0px','1000px','200px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"003.jpg",'0px','0px']
            },
            {
                id: '_002',
                type: 'image',
                rect: ['0px', '0px','1000px','200px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"002.jpg",'0px','0px']
            },
            {
                id: '_001',
                type: 'image',
                rect: ['0px', '0px','1000px','200px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"001.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__002}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__001}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__003}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__004}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1000px'],
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9550,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid16", tween: [ "style", "${__004}", "opacity", '1', { fromValue: '0'}], position: 7050, duration: 500 },
                { id: "eid28", tween: [ "style", "${__004}", "opacity", '0', { fromValue: '1'}], position: 9050, duration: 500 },
                { id: "eid15", tween: [ "style", "${__003}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 500 },
                { id: "eid27", tween: [ "style", "${__003}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 500 },
                { id: "eid13", tween: [ "style", "${__001}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid25", tween: [ "style", "${__001}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid14", tween: [ "style", "${__002}", "opacity", '1', { fromValue: '0'}], position: 2395, duration: 500 },
                { id: "eid26", tween: [ "style", "${__002}", "opacity", '0', { fromValue: '1'}], position: 4395, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-123113326");
